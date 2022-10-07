import Link from 'next/link'
import { Formik, Form, Field } from 'formik'
import React from 'react'
import Router from 'next/router'

import updateEmployment from '../../../services/faculty/basic-info/updateEmployment'
import deleteEmployment from '../../../services/faculty/basic-info/deleteEmployment'

function EmploymentHistory(props){
	const [currData, setData] = React.useState({
        employmentInfoId: 0,
        startDate: '',
        endDate: ''
    })
	let empInfoId
	let content

	if(props.children != null) {
		content = Object.keys(props.children.faculty_employment_infos).map(key => {
			return (
				<tr key = {props.children.faculty_employment_infos[key].employmentInfoId}>
					<td>{props.children.faculty_employment_infos[key].faculty_employment_position.position}</td>
                    <td>{props.children.faculty_employment_infos[key].status}</td>
                    <td>{props.children.faculty_employment_infos[key].category}</td>
					<td className="less-important-mobile">{props.children.faculty_employment_infos[key].startDate}</td>
					<td className="less-important-mobile">{props.children.faculty_employment_infos[key].endDate || 'Present'}</td>
					{
						props.role == 5 && 
						<td>
							<div className = "btn-grp">
								<button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editEmployment" onClick={() => {
									empInfoId = props.children.faculty_employment_infos[key].employmentInfoId
									setKey(props.children.faculty_employment_infos[key].employmentInfoId)
								}}>
                                    <span className="material-icons-sharp">edit</span>
                                </button>
								<button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#deleteEmployment" onClick={() => {
									empInfoId = props.children.faculty_employment_infos[key].employmentInfoId
								}}>
                                    <span className="material-icons-sharp">delete</span>
                                </button>
							</div>
						</td> 
					}
				</tr>
			);
		});
	} else {
        content = <td colSpan = "6"><br/><p align = "center">No data available.</p></td>
    }

	function setKey(x) {
        Object.keys(props.children.faculty_employment_infos).map(key => {
            if(props.children.faculty_employment_infos[key].employmentInfoId == x) {
                setData(props.children.faculty_employment_infos[key])
                if(props.children.faculty_employment_infos[key].endDate == "" || props.children.faculty_employment_infos[key].endDate == null) {
                    setData(currData => ({...currData, endDate: ''}))
                }
            }
        });
    }

    function handleInputChange(id, event) {
        setData({...currData, [id]: event.target.value});
    }

	return(
		<div>
            <br/>
			<div className ="alert alert-success" role="alert" id="employmentalert" style={{visibility:"hidden"}}></div>
            <div className = "table-container">
                <h3 className="table-container-text" align = "center"> Within UP Manila </h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Positions</th>
                            <th>Status</th>
                            <th>Category</th>
                            <th className="less-important-mobile">Start Date</th>
                            <th className="less-important-mobile">End Date</th>
                            { props.role == 5 && <th>Action</th> }
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
			</div>

			<div className="modal fade" id="editEmployment" tabIndex="-1" role="dialog" aria-labelledby="editEmploymentLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editEmploymentLabel">Update Employment Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className = "row pb-3">
								<div className = "form-group">
									<label htmlFor = "startDate"> Start Date </label>
									<input type = "date" className = "form-control" name = "startDate" defaultValue = { currData.startDate } onChange = {(e) => handleInputChange("startDate", e)} />
								</div>
                            </div>
                            <div className = "row pb-3">
								<div className = "form-group">
									<label htmlFor = "endDate"> End Date </label>
									<input type = "date" className = "form-control" name = "endDate" defaultValue = { currData.endDate } onChange = {(e) => handleInputChange("endDate", e)} />
								</div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick = {async () => {
                            $('#editEmployment').modal('toggle');
                            let alert = document.getElementById("employmentalert")
                            let res = await updateEmployment(currData, props.token, props.facultyId)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#employmentalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#employmentalert").slideUp(500);
                            });

                            Router.push('/admin/' + props.facultyId)
                        }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteEmployment" tabIndex="-1" role="dialog" aria-labelledby="deleteEmploymentLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteEmploymentLabel">Delete Employment Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to delete this employment information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            let alert = document.getElementById("employmentalert")
                            $('#deleteEmployment').modal('toggle');

                            let res = await deleteEmployment(empInfoId, props.token, props.facultyId)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#employmentalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#employmentalert").slideUp(500);
                            });
                            Router.push('/admin/' + props.facultyId, '/admin/' + props.facultyId)
                        }}>Yes, delete</button>
                    </div>
                </div>
            </div>
        </div>
	</div>
	)
}

export default EmploymentHistory