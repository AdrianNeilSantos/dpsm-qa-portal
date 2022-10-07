import Link from 'next/link'
import WorkExpForm from './work-exp-form'
import EmploymentHistory from './employment-history'
import EmploymentForm from './employment-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from "formik"

import updateWorkExp from '../../../services/faculty/basic-info/updateWorkExp'
import deleteWorkExp from '../../../services/faculty/basic-info/deleteWorkExp'

function WorkExperience(props){
    const name = props.name
    let deleteWork = 0
    let editWork = 0
    const [currData, setData] = React.useState({
        workExpId: 0,
        employerName: '',
        position:'',
        startDate: '',
        endDate: '',
        description: ''
    })
    let content 

    if(props.children != null) {
        content = Object.keys(props.children).map(key => {
            if(props.children[key].workExpId != null) {
                return (
                    <tr key = {props.children[key].workExpId}>
                        <td className="less-important-mobile">{props.children[key].employerName}</td>
                        <td>{props.children[key].position}</td>
                        <td className="less-important-mobile">{props.children[key].startDate}</td>
                        <td className="less-important-mobile">{props.children[key].endDate}{!props.children[key].endDate && <div>Present</div>}</td>
                        <td className="less-important-pc">{props.children[key].description}</td>
                        { props.editable &&
                            <td>
                                <div className = "btn-grp">
                                    <button type="submit" className="btn customButton-icon-only blue" data-bs-toggle="modal" data-bs-target="#seeDetailsWork" onClick={() => {
                                        setEdit(props.children[key].workExpId)
                                        setKey(editWork)
                                    }}>
                                        <span className="material-icons-sharp">visibility</span>
                                    </button>
                                    <button className="btn customButton-icon-only yellow" data-bs-toggle="modal"  data-bs-target="#editWorkExperience" onClick={() => {
                                        setEdit(props.children[key].workExpId)
                                        setKey(editWork)
                                    }}>
                                        <span class="material-icons-sharp">edit</span>
                                    </button>
                                    <button className="btn customButton-icon-only delete" data-bs-toggle="modal"  data-bs-target="#deleteWorkExperience" onClick={() => {
                                        setDelete(props.children[key].workExpId)
                                    }}>
                                        <span class="material-icons-sharp">delete</span>
                                    </button>
                                </div>
                            </td>
                        }
                    </tr>
                );  
            }
        });
    }
    else{
        content = <td colSpan = "6"><br/><p align = "center">No data available.</p></td>
    }

    function setEdit(id) {
        editWork = id
    }

    function setDelete(id) {
        deleteWork = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children[key].workExpId == x) {
                setData(props.children[key])
                if(props.children[key].endDate == "" || props.children[key].endDate == null) {
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
            <div className="center">
                <h2 align = "center" style={{display: "inline-block", verticalAlign: "bottom"}}> Work Experience </h2>
                {/* Add Button Trigger */}
                { props.editable && 
                <button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addEmploymentHistory" aria-expanded="false" aria-controls="addEmploymentHistory" style={{left: "1rem", position: "relative"}}>
                    <span className="material-icons-sharp">add</span>
                </button>
                }

                { props.role == 5 &&
                <button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addEmploymentForm" aria-expanded="false" aria-controls="addEmploymentForm" style={{left: "1rem", position: "relative"}}>
                    <span className="material-icons-sharp">add</span>
                </button>
                }
            </div>
            <br/>

            <NameDisplay unit = {props.unit} position={props.position}>{name}</NameDisplay>
            
            <br/>
            { props.editable &&
                <div className="card collapse" id="addEmploymentHistory">
                    <WorkExpForm token = { props.token }/>
                </div>
            }
            
            { props.role == 5 &&
                <div className="card collapse" id="addEmploymentForm">
                    <EmploymentForm token={props.token} facultyId={props.facultyId} positionsList={props.positionsList}/>
                </div>
            }
            

            <EmploymentHistory role={props.role} token={props.token} facultyId={props.facultyId}>{props.employment}</EmploymentHistory>
            <br/>
            <div className ="alert alert-success" role="alert" id="workexpalert" style={{visibility:"hidden"}}></div>
            <div className = "table-container">
                <h3 className="table-container-text"align = "center"> Outside UP Manila </h3>
                <table className="table table-hover">
                    <thead>
                        <tr key = "headers">
                            <th className="less-important-mobile">Employer</th>
                            <th>Position</th>
                            <th className="less-important-mobile">Start Date</th>
                            <th className="less-important-mobile">End Date</th>
                            <th className="less-important-pc">Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
            <br/><br/>

            {/* <!-- See More Modal --> */}
            <div className="modal fade" id="seeDetailsWork" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">View Education Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-details">
                            <h3>Employer: </h3>
                            <h4>{currData.employerName}</h4>
                            <br></br>
                            <h3>Position: </h3>
                            <h4>{currData.position}</h4>
                            <br></br>
                            <h3>Start Date: </h3>
                            <h4>{currData.startDate}</h4>
                            <br></br>
                            <h3>End Date: </h3>
                            <h4>{currData.endDate}</h4>
                            <br></br>
                            <h3>Description: </h3>
                            <h4>{currData.description}</h4>
                            <br></br>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="editWorkExperience" tabIndex="-1" role="dialog" aria-labelledby="editWorkExperienceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editWorkExperienceLabel">Update Work Experience Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className = "row pb-3">
                                <div className = "form-group">
                                    <label htmlFor = "EmployerWorkExperienceUpdate"> Employer </label>
                                    <input className = "form-control" type = "text" name = "EmployerWorkExperienceUpdate" placeholder = "Input name of employer" defaultValue = { currData.employerName } onChange = {(e) => handleInputChange("employerName", e)} />
                                </div>
                            </div>

                            <div className = "row pb-3">
                                <div className = "form-group">
                                    <label htmlFor = "PositionWorkExperienceUpdate"> Title/Position </label>
                                    <input className = "form-control" type = "text" name = "PositionWorkExperienceUpdate" placeholder = "Input position" defaultValue = { currData.position } onChange = {(e) => handleInputChange("position", e)}/>
                                </div>
                            </div>

                            <div className = "row pb-3">
                                <div className = "form-group">
                                    <label htmlFor = "StartDateWorkExperienceUpdate"> Start Date </label>
                                    <input type = "date" className = "form-control" name = "StartDateWorkExperienceUpdate" defaultValue = { currData.startDate } onChange = {(e) => handleInputChange("startDate", e)} />
                                </div>
                            </div>

                            <div className = "row pb-3">
                                <div className = "form-group">
                                    <label htmlFor = "EndDateWorkExperienceUpdate"> End Date </label>
                                    <input type = "date" className = "form-control" name = "EndDateWorkExperienceUpdate" defaultValue = { currData.endDate } onChange = {(e) => handleInputChange("endDate", e)} />
                                </div>
                            </div>

                            <div className = "row pb-3">
                                <div className = "form-group">
                                    <label htmlFor = "DescriptionWorkExperienceUpdate"> Description </label>
                                    <input className = "form-control" type = "text" name = "DescriptionWorkExperienceUpdate" placeholder = "Add Description" defaultValue = { currData.description } onChange = {(e) => handleInputChange("description", e)} />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick = {async () => {
                            $('#editWorkExperience').modal('toggle');
                            let alert = document.getElementById("workexpalert")
                            let res = await updateWorkExp(currData, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#workexpalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#workexpalert").slideUp(500);
                            });

                            Router.push('/faculty/basic-info')
                        }}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteWorkExperience" tabIndex="-1" role="dialog" aria-labelledby="deleteWorkExperienceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteWorkExperienceLabel">Delete Work Experience Information</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to delete this work experience information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                        <button type="button" className="btn btn-danger" onClick = {async () => {
                            $('#deleteWorkExperience').modal('toggle');
                            let alert = document.getElementById("workexpalert")
                            let res = await deleteWorkExp(deleteWork, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#workexpalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#workexpalert").slideUp(500);
                            });
                            
                            Router.push('/faculty/basic-info')
                        }}>Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
            <br/><br/>

            
        </div>

        
    )
}

export default WorkExperience
