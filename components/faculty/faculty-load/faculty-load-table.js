import NameDisplay from '../../../components/name-display'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import FacultyLoadForm from './faculty-load-form'
import updateFacultyLoad from '../../../services/admin/updateFacultyLoad'
import deleteFacultyLoad from '../../../services/admin/deleteFacultyLoad'

function FacultyLoadTable(props) {
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
    const name = props.name
    let content 

    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
            if(props.children[key].recordId != null) {
                return (
                    <tr key = {props.children[key].recordId}>
                    <td>{props.children[key].subject}</td>
                    <td className="less-important-mobile">{props.children[key].section}</td>
                    <td className="less-important-mobile">{props.children[key].semester}</td>
                    <td className="less-important-mobile">{props.children[key].academicYear - 1 + ' - ' + props.children[key].academicYear}</td>
                    <td>
                            {
                                props.children[key].syllabus &&

                                <a
                                    className ="btn customButton-icon-only blue"
                                    href={process.env.UPLOADS_URL + props.children[key].syllabus}
                                    style = {{ color: 'white'}}
                                    target="_blank">
                                    <span className="material-icons-sharp">visibility</span>
                                </a>
                            }

                            {
                                props.children[key].syllabus && (props.editClass) &&
                                <a className="btn customButton-icon-only yellow"
                                style = {{ color: 'white'}}
                                 data-bs-toggle="modal" data-bs-target="#addSyllabus" onClick={() => {
                                    setEdit(props.children[key].recordId)
                                    setKey(editClass)
                                    
                                }}>
                                    <span className="material-icons-sharp">edit</span>
                                </a>
                            }

                            {
                                (props.editClass) && !props.children[key].syllabus &&
                                <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#addSyllabus" onClick={() => {
                                    setEdit(props.children[key].recordId)
                                    setKey(editClass)
                                }}>
                                    <span className="material-icons-sharp">edit</span>
                                </button>
                            }
                            {
                                !props.editClass && !props.children[key].syllabus &&
                                <div>None</div>
                            }
                    </td>

                    {props.role==5 && <td>
                            <button type="submit" className="btn customButton-icon-only blue" data-bs-toggle="modal" data-bs-target="#seeDetailsFacultyLoad" onClick={() => {
                                setEdit(props.children[key].recordId)
                                setKey(editClass)
                            }}>
                                <span className="material-icons-sharp">visibility</span>
                            </button>
                            <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editClass" onClick={() => {
                                setEdit(props.children[key].recordId)
                                setKey(editClass)
                            }}>
                                <span className="material-icons-sharp">edit</span>
                            </button>

                            <button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#deleteClass" onClick={() => {
                                setDelete(props.children[key].recordId)
                            }}>
                                <span className="material-icons-sharp">delete</span>
                            </button>

                    </td>}
                </tr>
                );
            }
        })
    }
    else{
        content =<td colSpan = "6"> <br/><p align = "center">No data available.</p></td>
    }

    function setEdit(id) {
        editClass = id
    }

    function setDelete(id) {
        deleteClass = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children[key].recordId == x) {
                setData(props.children[key])
                if(props.children[key].syllabus) {
                    setData(currData => ({...currData, syllabus: props.children[key].syllabus}))
                } else {
                    setData(currData => ({...currData, syllabus: 'None'}))
                }
            }
        });
    }

    return (
        <div>
            <div className="center">
            <h2 align = "center" style={{display: "inline-block"}}> Faculty Load </h2>
				{ props.role == 5 &&
					<button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addFacultyLoad" aria-expanded="false" aria-controls="addFacultyLoad" style={{left: "1rem", position: "relative"}}>
						<span className="material-icons-sharp">add</span>
					</button>
                }
            </div>

            <br></br>
            <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>
            <div className="alert alert-success" role="alert" id="loadalert" style={{visibility:"hidden"}}></div>
            
            { props.role==5 && 
                <div className="card collapse" id="addFacultyLoad">
                    <FacultyLoadForm token = { props.token } facultyId = { props.facultyId } role={ props.role } />
                </div>   
            }

            <div className = "table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th className="less-important-mobile">Section</th>
                            <th className="less-important-mobile">Semester</th>
                            <th className="less-important-mobile">Academic Year</th>
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
                            let form = document.getElementById('editClassForm')
                            let formData = new FormData(form)
                            formData.append('recordId', currData.recordId)

                            let alert = document.getElementById("loadalert")
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
        
            <div className="modal fade" id="deleteClass" tabIndex="-1" role="dialog" aria-labelledby="deleteClassLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteClassLabel">Delete Class Record</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p> Are you sure you want to delete this faculty load information? </p>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            $('#deleteClass').modal('toggle');
                            let alert = document.getElementById("loadalert")
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
                            
                            console.log(props)
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
                                        <label htmlFor = "syllabus"> Add/Edit Syllabus [Uploaded: {currData.syllabus}] </label>
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

                    {/* <!-- See More Modal--> */}
        <div className="modal fade" id="seeDetailsFacultyLoad" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">View Faculty Load Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-details">
                        <h3>Subject: </h3>
                        <h4>{currData.subject}</h4>
                        <br></br>
                        <h3>Section: </h3>
                        <h4>{currData.section}</h4>
                        <br></br>
                        <h3>Semester: </h3>
                        <h4>{currData.semester}</h4>
                        <br></br>
                        <h3>Academic Year: </h3>
                        <h4>{currData.academicYear}</h4>
                        <br></br>
                        <h3>Syllabus: </h3>
                        <h4>{currData.syllabus}</h4>
                        <br></br>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>

        </div>


    )
  }
  
  export default FacultyLoadTable
