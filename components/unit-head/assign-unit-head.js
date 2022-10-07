import Router from 'next/router'
import { Formik, Form, Field } from 'formik'
import updateUnitAssignment from '../../services/faculty/assignments/updateUnitAssignment'

function AssignUnitHead(props) { 
    let faculty

    if(props.children != null) { 
        faculty = Object.keys(props.facultyListInfo).map(key => {
            let selected = false
            if(props.facultyListInfo[key].faculty_personal_info) {
                if(props.facultyListInfo[key].facultyId == props.children.incomingUnitHead) {selected = true}
                return(
                    <option value={props.facultyListInfo[key].facultyId} selected={selected}>
                        {props.facultyListInfo[key].faculty_personal_info.lastName + ', ' + props.facultyListInfo[key].faculty_personal_info.firstName}
                    </option>
                )
            }
        })
    }

    return (
    <div>
		<h2 align = "center"> Unit Head Assignment </h2>
        <br/>
        <div>
            <p className='center' style={{fontSize:"16px"}}><b>Note:</b> Changing the value on the dropdown will automatically update the value of the incoming unit head <br/> and notify the department chair for possible approval</p>
            <div role="alert" id="assignalert" style={{visibility:"hidden"}}></div>
            <br/>
            <div className='card'>
                <table className = "table table-hover">
                    <thead>
                        <tr>
                            <th>Incoming Unit Head</th>
                            <th>Status</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr key = {props.children.unitId}>
                            <td>
                                <form>
                                    <select name="faculty" className = "form-control" style={{color: "var(--color-primary)", width: "40rem"}} id="faculty" onChange={async () => {
                                        let alert = document.getElementById("assignalert")
                                        let incomingUnitHead = document.getElementById('faculty').value                       
                                        let res = await updateUnitAssignment(incomingUnitHead, props.children.unitId, props.token)
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
                                        
                                        $("#assignalert").fadeTo(5000, 500).slideUp(500, function(){
                                            $("#assignalert").slideUp(500);
                                        });

                                        Router.push('/faculty/role-assignment', '/faculty/role-assignment')
                                    }}>
                                        <option value='0'>--SELECT FACULTY--</option>
                                        {faculty}
                                    </select>
                                </form>
                            </td>
                            <td style={{verticalAlign:"middle"}}>{props.children.approverRemarks ? 'Rejected' : 'Pending'}</td>
                            <td style={{verticalAlign:"middle"}}>{props.children.approverRemarks || 'None'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
  }
  
  export default AssignUnitHead