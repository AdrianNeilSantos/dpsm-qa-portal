import PublicationForm from './publication-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import Select from 'react-select'

import downloadProof from '../../../services/faculty/downloadProof'
import deletePublication from '../../../services/faculty/accomplishments/deletePublication'
import updatePublication from '../../../services/faculty/accomplishments/updatePublication'
import approvePublication from '../../../services/faculty/accomplishments/approvePublication'

function Publication(props){
    let content 
    let deletePub = 0
    let editPub = 0
    let approvePub = 0
    const [currData, setData] = React.useState({
        publicationId: 0,
        title: '',
        publicationDate:'',
        citation: '',
        url: '',
        nonFacultyAuthors: '',
        faculty_publishers: [],
        og_auth: []
    })
    let authors 
    if(props.faculty) {
    authors = Object.keys(props.faculty).map(key => {
            return(
                {value: props.faculty[key].facultyId, label: props.faculty[key].lastName + ', ' + props.faculty[key].firstName}
            );
        });
    }    
    let faculty_publishers = []
    
    if(props.children != null) { 
        content = Object.keys(props.children).map(key => {
            let pub = props.children[key].faculty_publishers;
            let dpsmauth = []
            
            pub.forEach((auth) => {
                let link
                let name = auth.faculty_personal_info.firstName + ' ' + auth.faculty_personal_info.lastName + ', '
                if(auth.facultyId == props.facultyId || props.role == 1) {
                    dpsmauth.push(name)
                } else if(props.role == 5) {
                    link = "/admin/" + auth.facultyId
                    dpsmauth.push(<a href = {link}>{name}</a>)
                } else if(props.role == 2 || props.role == 3) {
                    link = "/faculty/view/" + auth.facultyId
                    dpsmauth.push(<a href = {link}>{name}</a>)
                } 
            })

            return (
                <tr key = {props.children[key].publicationId}>
                    <td>{props.children[key].title}</td>
                    <td className="less-important-mobile">                        
                        { dpsmauth } 
                        {props.children[key].nonFacultyAuthors}
                    </td>
                    <td className="less-important-pc">{props.children[key].publicationDate}</td>
                    <td className="less-important-pc">{props.children[key].url}</td>
                    <td className="less-important-pc">{props.children[key].citation}</td>
                    <td className="less-important-tablet">{
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
                            !props.children[key].proof && <div>None</div>
                        }
                    </td>
                    <td className="less-important-mobile">{props.children[key].status}</td>
                    <td className="less-important-tablet">{props.children[key].approverRemarks || 'None'}</td>
                    <td>
                    { props.editable &&
                        <div>
                            <button type="submit" className="btn customButton-icon-only blue" data-bs-toggle="modal" data-bs-target="#seeDetailsPublication" onClick={() => {
                                setEdit(props.children[key].publicationId)
                                setKey(editPub)
                            }}>
                                <span className="material-icons-sharp">visibility</span>
                            </button>
                            <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editPublication" onClick={async () => {
                                setEdit(props.children[key].publicationId)
                                setKey(editPub)
                            }}>
                                <span className="material-icons-sharp">edit</span>
                            </button>
                            <button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#deletePublication" onClick={() => {
                                setDelete(props.children[key].publicationId)
                            }}>
                                <span className="material-icons-sharp">delete</span>
                            </button>
                        </div>
                    }
                    { props.approver &&
                        <div className = "center">
                            <button className="btn customButton-icon-only green" data-bs-toggle="modal" data-bs-target="#approvePublication" onClick={() => {
                                setApprove(props.children[key].publicationId)
                            }}>
                                <span className="material-icons-sharp">check</span>
                            </button>
                            <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#rejectPublication" onClick={() => {
                                setApprove(props.children[key].publicationId)
                            }}>
                                <span className="material-icons-sharp">close</span>
                            </button>
                        </div>
                    }
                    </td>
                </tr>
            );    
        });
    }
    else{
        content = <td colSpan = "9"><br/><p align = "center">No data available.</p></td>
    }

    function setEdit(id) {
        editPub = id
    }

    function setDelete(id) {
        deletePub = id
    }

    function setApprove(id) {
        approvePub = id
    }

    async function setKey(x) { 
        await Object.keys(props.children).map(async key => {
            if(props.children[key].publicationId == x) {
                let tempProof = props.children[key].proof
                await props.children[key].faculty_publishers.forEach(async (e) => {
                    await authors.forEach(async (fp, index) => {
                        if(fp.value == e.facultyId) {
                            await faculty_publishers.push(fp)
                        }
                    })
                })
                let temp = {
                    citation: props.children[key].citation,
                    faculty_publishers: faculty_publishers,
                    nonFacultyAuthors: props.children[key].nonFacultyAuthors,
                    publicationDate: props.children[key].publicationDate,
                    publicationId: props.children[key].publicationId,
                    title: props.children[key].title,
                    url: props.children[key].url,
                    og_auth: faculty_publishers
                }
                temp.proof = tempProof ? tempProof : 'None'
                
                await setData(temp)
            }
        });

        return faculty_publishers
    }

    const handleChange = (e) => {
        setData(currData => ({...currData, faculty_publishers: e}))
    }

	return(
		<div>
            <div className="center">
                <h2 align = "center" style={{display: "inline-block" , verticalAlign: "bottom"}}> Publications </h2>
                {/* Add Button Trigger */}
                { props.editable &&
                <button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addPublication" aria-expanded="false" aria-controls="addPublication" style={{left: "1rem", position: "relative"}}>
                    <span className="material-icons-sharp">add</span>
                </button>
                }
            </div>

            <br/>

            <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>
            <div className ="alert alert-success" role="alert" id="publicationalert" style={{visibility:"hidden"}}></div>
            
            { props.editable && 
                <div className="card collapse" id="addPublication">
                    <PublicationForm faculty = {props.faculty} token = {props.token} />
                </div>
            }
            
			<div className = "table-container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Publication</th>
                            <th className="less-important-mobile">Author/s</th>
                            <th className="less-important-pc">Publication Date</th>
                            <th className="less-important-pc">URL</th>
                            <th className="less-important-pc">Citation</th>
                            <th className="less-important-tablet">Proof</th>
                            <th className="less-important-mobile">Status</th>
                            <th className="less-important-tablet">Approver Remarks</th>
                            { (props.editable || props.approver) && <th>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>	
	        </div>
            <br/>






	       <div className="modal fade" id="editPublication" tabIndex="-1" role="dialog" aria-labelledby="editPublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editPublicationLabel">Update Publication Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize={true}
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let form = document.getElementById('editPubForm')
                            let formData = new FormData(form)
                            formData.append('publicationId', currData.publicationId)
                            let alert = document.getElementById("publicationalert")
                            let existing = []
                            currData.og_auth.forEach(x => {
                                existing.push(x.value)
                            })
                            
                            let temp_pub = formData.getAll('faculty_publishers').map(x => Number(x))
                            let rem_og = await existing.filter(x => !temp_pub.includes(x))
                            let add_pub = await temp_pub.filter(x => !existing.includes(x))

                            if(add_pub.length > 0) {
                                add_pub.forEach((x) => {
                                    formData.append('add_auth', x)
                                })
                            }

                            if(rem_og.length > 0) {
                                rem_og.forEach((x) => {
                                    formData.append('rem_auth', x)
                                })
                            }

                            let res = await updatePublication(formData, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#publicationalert").slideUp(500);
                            });
                            
                            Router.push('/faculty/accomplishment')
                        }}
                    >
                    {({ values, errors, touched, isSubmitting, setFieldValue }) => (
                        <Form id = "editPubForm">
                            <div className="modal-body">
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationUpdate"> Publication </label>
                                        <Field className = "form-control" type = "text" name = "title" placeholder = "Input publication name/title" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationCitationUpdate"> Citation </label>
                                        <Field className = "form-control" type = "text" name = "citation" placeholder = "Input full citation for publication" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationURLUpdate"> URL </label>
                                        <Field className = "form-control" type = "text" name = "url" placeholder = "Input publication URL" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "PublishDateUpdate"> Date Published </label>
                                        <Field type = "date" className = "form-control" name = "publicationDate" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationAuthorDPSMUpdate"> Authors (DPSM) </label>
                                        <Select
                                            name = "faculty_publishers"
                                            isMulti
                                            options = {authors}
                                            value = {currData.faculty_publishers}
                                            onChange = {event => handleChange(event)}
                                        />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationAuthorNonDPSMUpdate"> Authors (non-DPSM) </label>
                                        <Field className = "form-control" type = "text" name = "nonFacultyAuthors" placeholder = "Input all authors outside DPSM (separate names with commas)" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "PublicationProofUpdate"> Add/Edit Proof [Uploaded: {currData.proof}] </label>
                                        <Field type = "file" className = "form-control-file" name = "proof" value={undefined} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#editPublication').modal('hide');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deletePublication" tabIndex="-1" role="dialog" aria-labelledby="deletePublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deletePublicationLabel">Delete Publication Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to delete this publication information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            $('#deletePublication').modal('toggle');
                            let alert = document.getElementById("publicationalert")
                            let res = await deletePublication(deletePub, props.token)
                            
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#publicationalert").slideUp(500);
                            });
                            
                            Router.push('/faculty/accomplishment')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="approvePublication" tabIndex="-1" role="dialog" aria-labelledby="approvePublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approvePublicationLabel">Approve Publication Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to approve this publication information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't approve</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            let alert = document.getElementById("publicationalert")
                            $('#approvePublication').modal('toggle');
                            
                            let formData = new FormData()
                            formData.append('publicationId', approvePub)
                            
                            let res = await approvePublication(formData, true, props.facultyId, props.token)
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
                            
                            $("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#publicationalert").slideUp(500);
                            });
                            Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                        }}>Yes, approve</button>
                    </div>
                    </div>
                </div>
            </div> 

            <div className="modal fade" id="rejectPublication" tabIndex="-1" role="dialog" aria-labelledby="rejectPublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectPublicationLabel">Reject Publication Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let alert = document.getElementById("publicationalert")
                            $('#rejectPublication').modal('toggle');
                            
                            let form = document.getElementById('rejectPubForm')
                            let formData = new FormData(form)
                            formData.append('publicationId', approvePub)
                            
                            let res = await approvePublication(formData, false, props.facultyId, props.token)
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
                            
                            $("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#publicationalert").slideUp(500);
                            });
                            Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "rejectPubForm">
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
                                    $('#rejectPublication').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>


        {/* <!-- See More Modal--> */}
        <div className="modal fade" id="seeDetailsPublication" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">View Publication Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-details">
                        <h3>Title: </h3>
                        <h4>{currData.title}</h4>
                        <br></br>
                        <h3>Publication Date: </h3>
                        <h4>{currData.publicationDate}</h4>
                        <br></br>
                        <h3>Citation: </h3>
                        <h4>{currData.citation}</h4>
                        <br></br>
                        <h3>URL: </h3>
                        <h4>{currData.url}</h4>
                        <br></br>
                        <h3>Non-Faculty Authors: </h3>
                        <h4>{currData.nonFacultyAuthors}</h4>
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

export default Publication
