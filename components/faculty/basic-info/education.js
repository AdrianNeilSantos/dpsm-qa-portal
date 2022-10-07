import Link from 'next/link'
import EducationForm from './education-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import downloadProof from '../../../services/faculty/downloadProof'
import deleteEducation from '../../../services/faculty/basic-info/deleteEducation'
import updateEducation from '../../../services/faculty/basic-info/updateEducation'
import approveEducation from '../../../services/faculty/basic-info/approveEducation'

function Education(props) { 
    let deleteEduc = 0
    let editEduc = 0
    let approveEduc = 0

    const [currData, setData] = React.useState({
        educInfoId: 0,
        institutionSchool: '',
        degreeType:'',
        degreeCert: '',
        majorSpecialization: '',
        startDate: '',
        endDate: ''
    })
    let content 
    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
                return (
                    <tr key = {props.children[key].educInfoId}>
                        <td>{props.children[key].degreeCert}</td>
                        <td className="less-important-mobile">{props.children[key].degreeType}</td>
                        <td className="less-important-pc">{props.children[key].majorSpecialization}</td>
                        <td className="less-important-mobile">{props.children[key].institutionSchool}</td>
                        <td className="less-important-pc">{props.children[key].startDate}</td>
                        <td className="less-important-tablet">{props.children[key].endDate}{!props.children[key].endDate && <div>Present</div>}</td>
                        <td className="less-important-tablet">
                            {
                                props.children[key].proof &&
                                <div className = "center">
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
                        <td className="less-important-tablet">{props.children[key].approverRemarks || 'None'}</td>
                        { props.editable &&
                            <td>
                                <div className = "btn-grp">
                                    <button type="submit" className="btn customButton-icon-only blue" data-bs-toggle="modal" data-bs-target="#seeDetailsEducation" onClick={() => {
                                        setEdit(props.children[key].educInfoId)
                                        setKey(editEduc)
                                    }}>
                                        <span className="material-icons-sharp">visibility</span>
                                    </button>
                                    <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editEducation" onClick={() => {
                                        setEdit(props.children[key].educInfoId)
                                        setKey(editEduc)
                                    }}>
                                        <span className="material-icons-sharp">edit</span>
                                    </button>
                                    <button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#deleteEducation" onClick={() => {
                                        setDelete(props.children[key].educInfoId)
                                    }}>
                                        <span className="material-icons-sharp">delete</span>
                                    </button>
                                </div>
                            </td>
                        }
                        { props.approver && 
                            <td>
                                <div className = "center">
                                    <button className="btn customButton-icon-only green" data-bs-toggle="modal" data-bs-target="#approveEducation" onClick={() => {
                                        setApprove(props.children[key].educInfoId)
                                    }}>
                                        <span className="material-icons-sharp">check</span>
                                    </button>
                                    <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#rejectEducation" onClick={() => {
                                        setApprove(props.children[key].educInfoId)
                                    }}>
                                        <span className="material-icons-sharp">close</span>
                                    </button>
                                </div>
                            </td>
                        }
                    </tr>
                );
        });
    }
    else{
        content = <td colSpan = "10"><br/><p align = "center">No data available.</p></td>
    }
    let res

    function setEdit(id) {
        editEduc = id
    }

    function setDelete(id) {
        deleteEduc = id
    }

    function setApprove(id) {
        approveEduc = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children[key].educInfoId == x) {
                setData(props.children[key])
                if(props.children[key].endDate == "" || props.children[key].endDate == null) {
                    setData(currData => ({...currData, endDate: ''}))
                }
                if(props.children[key].proof) {
                    setData(currData => ({...currData, proof: props.children[key].proof}))
                } else {
                    setData(currData => ({...currData, proof: 'None'}))
                }
            }
        });
    }
    // let message
    return (
        <div>
            <div className="center">
                <h2 align = "center" style={{display: "inline-block", verticalAlign: "bottom"}}> Educational History </h2>
                {/* Add Button Trigger */}
                { props.editable && 
                <button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addEducation" aria-expanded="false" aria-controls="addEducation" style={{left: "1rem", position: "relative"}}>
                    <span className="material-icons-sharp">add</span>
                </button>
                }
            </div>

            <br/>

            <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>
            <div className ="alert alert-success" role="alert" id="educalert" style={{visibility:"hidden"}}></div>

            

            { props.editable && 
                <div>
                    <div className="card collapse" id="addEducation">
                        <EducationForm token = { props.token }/>
                    </div>
                </div>   
            }





            <div className = "table-container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Degree</th>
                            <th className="less-important-mobile">Type</th>
                            <th className="less-important-pc">Major</th>
                            <th className="less-important-mobile">Institution</th>
                            <th className="less-important-pc">Start Date</th>
                            <th className="less-important-tablet">End Date</th>
                            <th className="less-important-tablet    ">Proof</th>
                            <th className="less-important-mobile">Status</th>
                            <th className="less-important-tablet">Remarks</th>
                            { (props.editable || props.approver) && <th>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
            
            <br/><br/>
            

            {/* <!-- See More Modal --> */}
            <div className="modal fade" id="seeDetailsEducation" tabIndex="-1" role="dialog" aria-labelledby="seeDetailsEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="seeDetailsEducationLabel">View Education Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-details">
                            <h3>School/Institution: </h3>
                            <h4>{currData.institutionSchool}</h4>
                            <br></br>
                            <h3>Degree Type: </h3>
                            <h4>{currData.degreeType}</h4>
                            <br></br>
                            <h3>Degree Certification: </h3>
                            <h4>{currData.degreeCert}</h4>
                            <br></br>
                            <h3>Major/Specialization: </h3>
                            <h4>{currData.majorSpecialization}</h4>
                            <br></br>
                            <h3>Start Date: </h3>
                            <h4>{currData.startDate}</h4>
                            <br></br>
                            <h3>End Date: </h3>
                            <h4>{currData.endDate}</h4>
                            <br></br>
                            <h3>Status: </h3>
                            <h4>{currData.status}</h4>
                            <br></br>
                            <h3>Approver Remarks: </h3>
                            <h4>{currData.approverRemarks}</h4>
                            <br></br>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>



            {/* Edit Modal */}
            <div className="modal fade" id="editEducation" tabIndex="-1" role="dialog" aria-labelledby="editEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editEducationLabel">Update Education Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let alert = document.getElementById("educalert")
                            
                            let form = document.getElementById('editEducForm')
                            let formData = new FormData(form)
                            formData.append('educInfoId', currData.educInfoId)
                            let res = await updateEducation(formData, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#educalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#educalert").slideUp(500);
                            });
                            Router.push('/faculty/basic-info', '/faculty/basic-info')
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "editEducForm">
                            <div className="modal-body">
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "SchoolEducationHistoryUpdate"> School/Institution </label>
                                        <Field className = "form-control" type = "text" name = "institutionSchool" id ="institutionSchool" placeholder = "Input school" required />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "DegreeEducationalHistoryUpdate"> Degree Type </label>
                                        <Field as = "select" className = "form-control" name = "degreeType" id = "degreeType" >
                                            <option value = "AA">AA</option>
                                            <option value = "AS">AS</option>
                                            <option value = "BA">BA</option>
                                            <option value = "BS">BS</option>
                                            <option value = "MA">MA</option>
                                            <option value = "MS">MS</option>
                                            <option value = "MD">MD</option>
                                            <option value = "PhD">PhD</option>
                                            <option value = "DEng">DEng</option>
                                            <option value = "DrPH">DrPH</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "DegreeEducationalHistoryUpdate"> Degree/Certification </label>
                                        <Field className = "form-control" type = "text" name = "degreeCert" id = "degreeCert" placeholder = "Input degree" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "MajorEducationalHistoryUpdate"> Major/Specialization </label>
                                        <Field className = "form-control" type = "text" name = "majorSpecialization" id = "majorSpecialization" placeholder = "Input major" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "StartDateEducationalHistoryUpdate"> Start Date </label>
                                        <Field className = "form-control" type = "date" name = "startDate" id = "startDate" required />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "EndDateEducationalHistoryUpdate"> End Date </label>
                                        <Field className = "form-control" type = "date" name = "endDate" id = "endDate" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "proof" > Add/Edit Proof [Uploaded: {currData.proof}] </label>
                                        <Field type = "file" className = "form-control-file" name = "proof" id = "proof" value={undefined} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#editEducation').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>


            {/* Delete Modal */}
            <div className="modal fade" id="deleteEducation" tabIndex="-1" role="dialog" aria-labelledby="deleteEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteEducationLabel">Delete Education Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to delete this education information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            let alert = document.getElementById("educalert")
                            $('#deleteEducation').modal('toggle');

                            let res = await deleteEducation(deleteEduc, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#educalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#educalert").slideUp(500);
                            });
                            Router.push('/faculty/basic-info', '/faculty/basic-info')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="approveEducation" tabIndex="-1" role="dialog" aria-labelledby="approveEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveEducationLabel">Approve Education Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to approve this education information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't approve</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            let alert = document.getElementById("educalert")
                            $('#approveEducation').modal('toggle');
                            
                            let formData = new FormData()
                            formData.append('educInfoId', approveEduc)
                            
                            let res = await approveEducation(formData, true, props.facultyId, props.token)
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
                            
                            $("#educalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#educalert").slideUp(500);
                            });
                            Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                        }}>Yes, approve</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="rejectEducation" tabIndex="-1" role="dialog" aria-labelledby="rejectEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectEducationLabel">Reject Education Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let alert = document.getElementById("educalert")
                            $('#rejectEducation').modal('toggle');
                            
                            let form = document.getElementById('rejectEducForm')
                            let formData = new FormData(form)
                            formData.append('educInfoId', approveEduc)
                            
                            let res = await approveEducation(formData, false, props.facultyId, props.token)
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
                            
                            $("#educalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#educalert").slideUp(500);
                            });
                            Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "rejectEducForm">
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
                                    $('#rejectEducation').modal('toggle');
                                }}>
                                    Save changes
                                </button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}

export default Education
