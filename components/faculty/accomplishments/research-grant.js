import Link from 'next/link'
import ResearchGrantForm from './research-grant-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import downloadProof from '../../../services/faculty/downloadProof'
import deleteResearch from '../../../services/faculty/accomplishments/deleteResearch'
import updateResearch from '../../../services/faculty/accomplishments/updateResearch'

function ResearchGrant(props){
    let content 
    let deleteRes = 0
    let editRes = 0
    const [currData, setData] = React.useState({
        researchId: 0,
        researchName: '',
        granter:'',
        amount: '',
        projectedStart: '',
        projectedEnd: '',
        actualStart: '',
        actualEnd: '',
        researchProgress: '',
        nonFacultyResearchers: ''
    })
    if(props.children != null) {
        content = Object.keys(props.children).map(key => { 
            if(props.children[key].researchId != null) {
                let res = props.children[key].faculty_researchers;
                return (
                    <tr>
                        <td>{props.children[key].researchName}</td>
                        <td>
                            {Object.keys(res).map(auth => {
                            let link = "/faculty/basic-info/" + res[auth].facultyId
                                return (
                                    <a href = {link}>{res[auth].faculty_personal_info.lastName},{res[auth].faculty_personal_info.firstName}, </a>
                                );
                            })}
                            {props.children[key].nonFacultyResearchers}
                        </td>
                        <td>{props.children[key].granter}</td>
                        <td>{props.children[key].amount}</td>
                        <td>{props.children[key].projectedStart} to {props.children[key].projectedEnd}</td>
                        <td>{props.children[key].actualStart}</td>
                        <td>{props.children[key].actualEnd}</td>
                        <td>{props.children[key].researchProgress}</td>
                        <td>
                            {Object.keys(res).map(auth => {
                                if(res[auth].facultyId == props.facultyId) {
                                    if(res[auth].proof) {
                                        return (
                                            <div className = "btn-grp">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    onClick = {() => {
                                                        let file = res[auth].proof
                                                        downloadProof(file)
                                                    }}
                                                >
                                                    Download
                                                </button>
                                                <a
                                                    className ="btn btn-info"
                                                    href={"http://localhost:3001/" + res[auth].proof}
                                                    style = {{ color: 'white' }}
                                                    target="_blank">
                                                    Preview
                                                </a>
                                            </div>
                                        );
                                    } else {
                                        return(<div>None</div>)
                                    }
                                }
                            })}
                        </td>
                        <td>
                            {Object.keys(res).map(auth => {
                                if(res[auth].facultyId == props.facultyId) {
                                    return (
                                        res[auth].status
                                    );
                                }
                            })}
                        </td>
                        
                        <td>
                        {
                            props.facultyFlag && !props.viewFlag &&
                            <div className = "btn-group">
                                <a className="btn btn-info" data-toggle="modal" data-target="#editResearchGrant" onClick={() => {
                                    setEdit(props.children.[key].researchId)
                                    setKey(editRes)
                                }}>Edit</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#deleteResearchGrant" onClick={() => {
                                    setDelete(props.children.[key].researchId)
                                }}>Delete</a>
                            </div>
                        }
                        {
                            !props.facultyFlag && !props.viewFlag &&
                            <div className = "btn-grp">
                                <a className="btn btn-info" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Approve</a>
                                <a className="btn btn-danger" data-toggle="modal" data-target="#" onClick={() => {
                                    
                                }}>Reject</a>
                            </div>
                        }
                        </td>
                    </tr>
                );
            }
        });
    }
    else{
        content = <td colspan = "10"><p align = "center">No data available!</p></td>
    }

    function setEdit(id) {
        editRes = id
    }

    function setDelete(id) {
        deleteRes = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children.[key].researchId == x) {
                setData(props.children.[key])
            }
        });
    }

	return(
		<div>
            <h2 align = "center"> Research Grants </h2>
            <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{props.name}</NameDisplay>
			<div className ="alert alert-success" role="alert" id="researchalert" style={{visibility:"hidden"}}></div>
            <div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Research Project</th>
				<th>Researcher/s</th>
				<th>Sponsor</th>
				<th>Amount</th>
				<th>Projected Duration</th>
				<th>Start Date</th>
				<th>End Date</th>
				<th>Research Progress</th>
				<th>Proof</th>
				<th>Status</th>
                {!props.viewFlag && <th>Action</th>}
			</tr>
            {content}
		</tbody>
	</table>	
	</div>
    { 
        props.facultyFlag &&
        <div>
            <ResearchGrantForm faculty = {props.faculty} token = {props.token} />
        </div>
    }

        <div className="modal fade" id="editResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="editResearchGrantLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="editResearchGrantLabel">Update Research Grant Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={currData}
                    onSubmit={async (values) => {
                        let form = document.getElementById('editResForm')
                        let formData = new FormData(form)
                        formData.append('researchId', currData.researchId)
                        let alert = document.getElementById("researchalert")
                        let res = await updateResearch(formData, props.token)
                        if(res.success == true) { 
                            alert.className ="alert alert-success"
                            alert.style = "visibility: visible"
                            alert.innerHTML = res.message
                        } else {
                            alert.className = "alert alert-danger"
                            if(res.error) alert.innerHTML = res.error[0].message
                            else alert.innerHTML = res.message
                        }
                        $("#researchalert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#researchalert").slideUp(500);
                        });

                        Router.push('/faculty/accomplishment')
                    }}
                >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "editResForm">
                        <div className="modal-body">
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchUpdate"> Research Project </label>
                                    <Field className = "form-control" type = "text" name = "researchName" placeholder = "Input research name" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchSponsorUpdate"> Sponsor </label>
                                    <Field className = "form-control" type = "text" name = "granter" placeholder = "Input sponsor" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchAmountUpdate"> Amount </label>
                                    <Field className = "form-control" type = "text" name = "amount" placeholder = "Input amount" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchStartDateUpdate"> Start Date (Actual) </label>
                                    <Field type = "date" className = "form-control" name = "actualStart" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchEndDateUpdate"> End Date (Actual) </label>
                                    <Field type = "date" className = "form-control" name = "actualEnd" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProjectedStartDateUpdate"> Start Date (Projected) </label>
                                    <Field type = "date" className = "form-control" name = "projectedStart" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProjectedEndDateUpdate"> End Date (Projected) </label>
                                    <Field type = "date" className = "form-control" name = "projectedEnd" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProgressUpdate"> Progress </label>
                                    <Field className = "form-control" type = "text" name = "researchProgress" placeholder = "Input progress" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchAuthorNonDPSMUpdate"> Authors (non-DPSM) </label>
                                    <Field className = "form-control" type = "text" name = "nonFacultyResearchers" placeholder = "Input all authors outside DPSM (separate names with commas)" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchAuthorDPSMUpdate"> Authors (DPSM) </label>
                                    <input className = "form-control" type = "text" name = "ResearchAuthorDPSMUpdate" placeholder = "Input author (must be from DPSM)" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "ResearchProofUpdate"> Proof </label>
                                    <Field type = "file" className = "form-control-file" name = "proof"  value={undefined} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                $('#editResearchGrant').modal('toggle');
                            }}>Save changes</button>
                        </div>
                    </Form>
                )}
                </Formik>
                </div>
            </div>
        </div>
        
            <div className="modal fade" id="deleteResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="deleteResearchGrantLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteResearchGrantLabel">Delete Research Grant Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this research grant information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {async () => {
                            $('#deleteResearchGrant').modal('toggle');
                            
                            let alert = document.getElementById("researchalert")
                            let res = await deleteResearch(deleteRes, props.token)
                            console.log('res', res);
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) values.message = res.error[0].message
                                else values.message = res.message
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


		</div>
	)
}

export default ResearchGrant
