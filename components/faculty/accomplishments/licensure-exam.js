import Link from 'next/link'
import LicensureExamForm from './licensure-exam-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import downloadProof from '../../../services/faculty/downloadProof'
import updateLicensure from '../../../services/faculty/accomplishments/updateLicensure'
import deleteLicensure from '../../../services/faculty/accomplishments/deleteLicensure'
import approveLicense from '../../../services/faculty/accomplishments/approveLicense'

function LicensureExam(props) {
    let deleteLic = 0
    let editLic = 0
    let approveLic = 0

    const [currData, setData] = React.useState({
        licenseId: 0,
        examName: '',
        examDate:'',
        licenseNumber: '',
        rank: '',
        proof: ''
    })
    const name = props.name
    let content 
    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
            if(props.children[key].licenseId != null) {
                return (
                    <tr key = {props.children[key].licenseId}>
                        <td>{props.children[key].examName}</td>
                        <td className="less-important-mobile">{props.children[key].rank == 0 || props.children[key].rank == null ? 'N/A' : props.children[key].rank}</td>
                        <td className="less-important-pc">{props.children[key].examDate}</td>
                        <td className="less-important-mobile">{props.children[key].licenseNumber}</td>
                        <td className="less-important-tablet">
                        {
                            props.children[key].proof &&
                            <div className = "btn-grp">
                                <button
                                    type="button"
                                    className="btn customButton-icon-only blue"
                                    onClick = {() => {
                                        let file = props.children[key].proof
                                        downloadProof(file, props.token)
                                    }}
                                >
                                    <span className="material-icons-sharp">file_download</span>
                                </button>
                                <a
                                    className ="btn customButton-icon-only blue"
                                    href={process.env.UPLOADS_URL + props.children[key].proof}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    <span className="material-icons-sharp">visibility</span>
                                </a>
                            </div>
                        }
                        { 
                            !props.children[key].proof && 
                            <div>None</div>
                        }
                        </td>
                        <td className="less-important-mobile">{props.children[key].status}</td>
                        <td className="less-important-pc">{props.children[key].approverRemarks || 'None'}</td>
                        <td>
                        { props.editable &&
                            <div>
                                <button type="submit" className="btn customButton-icon-only blue" data-bs-toggle="modal" data-bs-target="#seeDetailsLicensureExam" onClick={() => {
                                        setEdit(props.children[key].licenseId)
                                        setKey(editLic)
                                    }}>
                                        <span className="material-icons-sharp">visibility</span>
                                </button>
                                <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editLicensureExam" onClick={() => {
                                    setEdit(props.children[key].licenseId)
                                    setKey(editLic)
                                }}>
                                    <span className="material-icons-sharp">edit</span>
                                </button>
                                <button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#deleteLicensureExam" onClick={() => {
                                    setDelete(props.children[key].licenseId)
                                }}>
                                    <span className="material-icons-sharp">delete</span>
                                </button>
                            </div>
                        }
                        { props.approver &&
                            <div className = "center">
                                <button className="btn customButton-icon-only green" data-bs-toggle="modal" data-bs-target="#approveLicense" onClick={() => {
                                    setApprove(props.children[key].licenseId)
                                }}>
                                    <span className="material-icons-sharp">check</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#rejectLicense" onClick={() => {
                                    setApprove(props.children[key].licenseId)
                                }}>
                                    <span className="material-icons-sharp">close</span>
                                </button>
                            </div>
                        }
                        </td>
                    </tr>
                );
            }
        })
    }
    else{
        content = <td colSpan = "8"><br/><p align = "center">No data available.</p></td>
    }

    function setEdit(id) {
        editLic = id
    }

    function setDelete(id) {
        deleteLic = id
    }

    function setApprove(id) {
        approveLic = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children[key].licenseId == x) {
                setData(props.children[key])
                if(props.children[key].rank == "" || props.children[key].rank == null) {
                    setData(currData => ({...currData, rank: ''}))
                }
                if(props.children[key].proof) {
                    setData(currData => ({...currData, proof: props.children[key].proof}))
                } else {
                    setData(currData => ({...currData, proof: 'None'}))
                }
            }
        });
    }

    return (
        <div>
            <div className="center">
                <h2 align = "center" style={{display: "inline-block", verticalAlign: "bottom"}}> Licensure Exams </h2>
                {/* Add Button Trigger */}
                { props.editable &&
                <button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addLicense" aria-expanded="false" aria-controls="addLicense" style={{left: "1rem", position: "relative"}}>
                    <span className="material-icons-sharp">add</span>
                </button>
                }
            </div>

            
            
            <br/>
            <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>
            <div role="alert" id="licensureexamalert" style={{visibility:"hidden"}}></div>
            
            <br/>
            { props.editable && 
                <div className="card collapse" id="addLicense">
                    <LicensureExamForm token = { props.token } />
                </div>   
            }

            <div className = "table-container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Exam Name</th>
                            <th className="less-important-mobile">Rank</th>
                            <th className="less-important-pc">Date</th>
                            <th className="less-important-mobile">License Number</th>
                            <th className="less-important-tablet">Proof</th>
                            <th className="less-important-mobile">Status</th>
                            <th className="less-important-pc">Approver Remarks</th>
                            { (props.editable || props.approver) && <th>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
            <br/><br/>

	
            <div className="modal fade" id="editLicensureExam" tabIndex="-1" role="dialog" aria-labelledby="editLicensureExamLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editLicensureExamLabel">Update Licensure Exam Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let form = document.getElementById('editLicForm')
                            let formData = new FormData(form)
                            formData.append('licenseId', currData.licenseId)

                            let alert = document.getElementById("licensureexamalert")
                            let res = await updateLicensure(formData, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#licensureexamalert").slideUp(500);
                            });

                            Router.push('/faculty/accomplishment')
                            
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "editLicForm">
                            <div className="modal-body">
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "LicensureExamUpdate"> Licensure Exam </label>
                                        <Field className = "form-control" type = "text" name = "examName" id = "examName" placeholder = "Input licensure exam" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "LicensureExamDateUpdate"> Date </label>
                                        <Field type = "date" className = "form-control" name = "examDate" id = "examDate" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "LicensureExamRankUpdate"> Rank </label>
                                        <Field className = "form-control" type = "text" name = "rank" id = "rank" placeholder = "Input rank" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "LicenseNumeberUpdate"> License Number </label>
                                        <Field className = "form-control" type = "text" name = "licenseNumber" id = "licenseNumber" placeholder = "Input licensure number" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "LicensureExamProofUpdate"> Add/Edit Proof [Uploaded: {currData.proof}] </label>
                                        <Field type = "file" className = "form-control-file" name = "proof" id = "proof" value={undefined} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#editLicensureExam').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteLicensureExam" tabIndex="-1" role="dialog" aria-labelledby="deleteLicensureExamLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteLicensureExamLabel">Delete Licensure Exam Information</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p> Are you sure you want to delete this licensure exam information? </p>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            $('#deleteLicensureExam').modal('toggle');
                            let alert = document.getElementById("licensureexamalert")
                            let res = await deleteLicensure(deleteLic, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#licensureexamalert").slideUp(500);
                            });

                            Router.push('/faculty/accomplishment')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>            
            <div className="modal fade" id="approveLicense" tabIndex="-1" role="dialog" aria-labelledby="approveLicenseLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveLicenseLabel">Approve Licensure Exam Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to approve this licensure exam information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't approve</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            let alert = document.getElementById("licensureexamalert")
                            $('#approveLicense').modal('toggle');
                            
                            let formData = new FormData()
                            formData.append('licenseId', approveLic)
                            
                            let res = await approveLicense(formData, true, props.facultyId, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                alert.style = "visibility: visible"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#licensureexamalert").slideUp(500);
                            });
                            Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                        }}>Yes, approve</button>
                    </div>
                    </div>
                </div>
            </div>

        <div className="modal fade" id="rejectLicense" tabIndex="-1" role="dialog" aria-labelledby="rejectLicenseLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="rejectLicenseLabel">Reject Licensure Exam Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={currData}
                    onSubmit={async (values) => {
                        let alert = document.getElementById("licensureexamalert")
                        $('#rejectLicense').modal('toggle');
                        
                        let form = document.getElementById('rejectLicenseForm')
                        let formData = new FormData(form)
                        formData.append('licenseId', approveLic)
                        
                        let res = await approveLicense(formData, false, props.facultyId, props.token)
                        if(res.success == true) { 
                            alert.className ="alert alert-success"
                            alert.style = "visibility: visible"
                            alert.innerHTML = res.message
                        } else {
                            alert.className = "alert alert-danger"
                            alert.style = "visibility: visible"
                            if(res.error) alert.innerHTML = res.error[0].message
                            else alert.innerHTML = res.message
                        }
                        
                        $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#licensureexamalert").slideUp(500);
                        });
                        Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                    }}
                >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "rejectLicenseForm">
                        <div className="modal-body">
                            <div className = "row pb-3">
                                <div className = "form-group">
                                    <label htmlFor = "RejectionRemarks"> Reason/Remarks for Rejection </label>
                                    <Field className = "form-control" type = "text" name = "approverRemarks" placeholder = "Input remarks" required />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                $('#rejectLicense').modal('toggle');
                            }}>Save changes</button>
                        </div>
                    </Form>
                )}
                </Formik>
                </div>
            </div>
        </div>

        {/* <!-- See More Modal--> */}
        <div className="modal fade" id="seeDetailsLicensureExam" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">View Licensure Exam Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-details">
                        <h3>Exam Name: </h3>
                        <h4>{currData.examName}</h4>
                        <br></br>
                        <h3>Exam Date: </h3>
                        <h4>{currData.examDate}</h4>
                        <br></br>
                        <h3>License Number: </h3>
                        <h4>{currData.licenseNumber}</h4>
                        <br></br>
                        <h3>Rank: </h3>
                        <h4>{currData.rank}</h4>
                        <br></br>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>

        <br/><br/>

        </div>
	
	
    )
  }
  
  export default LicensureExam
