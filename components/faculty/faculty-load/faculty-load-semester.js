import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import updateFacultyLoad from '../../../services/admin/updateFacultyLoad'
import deleteFacultyLoad from '../../../services/admin/deleteFacultyLoad'

function FacultyLoadSemester(props) {
    let year = []
    let currYear = new Date().getFullYear()
    for(let i = currYear; i >= 1970; i--) {
        year.push(i)
    }
    
    let options = Object.keys(year).map((i) => {
        return(
            <option value={year[i]}>{year[i]-1}-{year[i]}</option>
        )
    })
	let deleteClass = 0
	let editClass = 0

    const [currData, setData] = React.useState({
        recordId: 0,
        subject: '',
        section: '',
        semester: '',
        academicYear: '',
        syllabus: ''
    })

    let ctr = 0

	let content 
    if(props.records !=null) {
        content = Object.keys(props.records).map(key => {
    		ctr++
    		return (
    			<tr key = {props.records[key].recordId}>
    				<td>{props.records[key].subject}</td>
    				<td>{props.records[key].section}</td>
                    <td>{props.records[key].semester}</td>
                    <td>{props.records[key].academicYear}</td>
    				<td>
    					{
    						props.records[key].syllabus &&
                            <div className = "btn-grp">
                                <a
                                    className ="btn btn-info"
                                    href={process.env.UPLOADS_URL + props.records[key].syllabus}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    View
                                </a>
                                {(props.role==1 || props.role==2 || props.role==3) && 
                                    <a className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#addSyllabus" onClick={() => {
                                        setEdit(props.records[key].recordId)
                                        setKey(editClass)
                                    }}>Edit</a>
                                }
                            </div>
    					}
    					{
    						(props.role==1 || props.role==2 || props.role==3) && !props.records[key].syllabus &&
    						<a className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#addSyllabus" onClick={() => {
                            	setEdit(props.records[key].recordId)
                                setKey(editClass)
                            }}>Add Syllabus</a>
    					}
                        {
                            props.role==5 && !props.records[key].syllabus &&
                            <div>None</div>
                        }
    				</td>
    				{props.role==5 && <td>
    					<div className = "btn-group">
                            <a className="btn btn-info" data-bs-toggle="modal" data-bs-target="#editClass" onClick={() => {
                            	setEdit(props.records[key].recordId)
                                setKey(editClass)
                            }}>Edit</a>
                            <a className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteClass" onClick={() => {
                                setDelete(props.records[key].recordId)
                            }}>Delete</a>
                        </div>
    				</td>}
    			</tr>
    		)
    	});
    } else {
        content = <td colSpan = "9"><br/><p align = "center">No data available.</p></td>
    }

    function setDelete(id) {
        deleteClass = id
    }

    function setEdit(id) {
        editClass = id
    }
    
    function setKey(x) {
        Object.keys(props.records).map(key => {
            if(props.records[key].recordId == x) {
                setData(props.records[key])
                console.log(currData)
            }
        });
    }

	return(
		<div>
			<div className = "table-responsive">
			<table className = "table table-sm">
				<thead>
					<tr>
						<th>Subject</th>
						<th>Section</th>
                        <th>Semester</th>
                        <th>Academic Year</th>
						<th>Syllabus</th>
						{props.role==5 && <th>Action</th>}
					</tr>
				</thead>
				<tbody>
					{content}
				</tbody>
			</table>
			</div>

			<div className="modal fade" id="editClass" tabIndex="-1" role="dialog" aria-labelledby="editClassLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editClassLabel">Update Class Record</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let alert = document.getElementById("loadalert")
                            
                            let form = document.getElementById('editClassForm')
                            let formData = new FormData(form)
                            formData.append('recordId', currData.recordId)
                            let res = await updateFacultyLoad(formData, props.token, props.facultyId)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#loadalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#loadalert").slideUp(500);
                            });
                            Router.push('/admin/' + props.facultyId, '/admin/' + props.facultyId)
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "editClassForm">
                            <div className="modal-body">
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "subject"> Subject </label>
                                        <Field className = "form-control" type = "text" name = "subject" id = "subject" placeholder = "Input subject" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "section"> Section </label>
                                        <Field className = "form-control" type = "text" name = "section" id= "section" placeholder = "Input section" />
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "semester"> Semester </label>
                                        <Field as = "select" className = "form-control" name = "semester" id = "semester" required>
                                            <option value = "1st">1st Semester</option>
                                            <option value = "2nd">2nd Semester</option>
                                            <option value = "Midyear">Mid-Year</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "Year"> Academic Year </label>
                                        <Field as = "select" className = "form-control" name = "academicYear" id = "academicYear" required>
                                            {options}
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#editClass').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addSyllabus" tabIndex="-1" role="dialog" aria-labelledby="addSyllabusLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addSyllabusLabel">Update Class Records</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={currData}
                        onSubmit={async (values) => {
                            let alert = document.getElementById("loadalert")
                            
                            let form = document.getElementById('addSyllForm')
                            let formData = new FormData(form)
                            formData.append('recordId', currData.recordId)
                            
                            let res = await updateFacultyLoad(formData, props.token, props.facultyId)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#loadalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#loadalert").slideUp(500);
                            });
                            Router.push('/faculty/faculty-load', '/faculty/faculty-load')
                        }}
                    >
                    {({ values, errors, touched, isSubmitting }) => (
                        <Form id = "addSyllForm">
                            <div className="modal-body">
                                <div className = "row pb-3">
                                    <div className = "form-group">
                                        <label htmlFor = "syllabus"> Add Syllabus </label>
                                        <Field type = "file" className = "form-control-file" name = "syllabus" id = "syllabus" value={undefined} />
                                        <Field type = "hidden" className = "form-control" name = "subject" />
                                        <Field type = "hidden" className = "form-control" name = "section" />
                                        <Field type = "hidden" className = "form-control" name = "setResults" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                    $('#addSyllabus').modal('toggle');
                                }}>Save changes</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
            </div>

			<div className="modal fade" id="deleteClass" tabIndex="-1" role="dialog" aria-labelledby="deleteClassLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteClassLabel">Delete Class Record Information</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p> Are you sure you want to delete this class record? </p>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick ={async () => {
                            let alert = document.getElementById("loadalert")
                            $('#deleteClass').modal('toggle');

                            let res = await deleteFacultyLoad(deleteClass, props.token, props.facultyId)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            
                            $("#loadalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#loadalert").slideUp(500);
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

export default FacultyLoadSemester
