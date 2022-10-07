import Router from 'next/router'
import approveUnitHead from '../../../services/faculty/assignments/approveUnitHead'

function ApproveUnitHead(props) {
    let content
    let currentUser = 0
    let incomingUser = 0
    let unitId = 0

    if(props.children != null) {       
        content = Object.keys(props.children).map(key => {
            let currentUnitHead = props.children[key].currentUnitHead.faculty_personal_info.lastName + ', ' + props.children[key].currentUnitHead.faculty_personal_info.firstName
            let incomingUnitHead = props.children[key].faculty_personal_info.lastName + ', ' + props.children[key].faculty_personal_info.firstName
            return(
                // Table Entries
                <tr key = {props.children[key].unitId}>
                    <td className="less-important-mobile">{props.children[key].unit}</td>
                    <td className="less-important-mobile">{currentUnitHead}</td>
                    <td>{incomingUnitHead}</td>
                    <td>
                        <button className="btn customButton-icon-only green" style={{marginRight: "0.5rem"}} data-bs-toggle="modal" data-bs-target="#approveUnitHead" onClick={() => {
                            setApprove(props.children[key].currentUnitHead.faculty_personal_info.user.userId, props.children[key].faculty_personal_info.user.userId, props.children[key].unitId)
                        }}><span className="material-icons-sharp">check</span></button>
                        <button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#rejectUnitHead" onClick={() => {
                            setApprove(props.children[key].currentUnitHead.faculty_personal_info.user.userId, props.children[key].faculty_personal_info.user.userId, props.children[key].unitId)
                        }}><span className="material-icons-sharp">delete</span></button>
                    </td>
                </tr>
            )
        })
        
    } else {
        content = <tr><td colSpan = "4"><br/><p align = "center">No data available.</p></td></tr>
    }

    function setApprove(current, incoming, unit) {
        currentUser = current
        incomingUser = incoming
        unitId = unit
    }

    return (
        <div className='table-container'>
		    <h2 align = "center"> Unit Head Assignment </h2>
            <div className="alert alert-success" role="alert" id="assignalert" style={{visibility:"hidden"}}></div>
            <table className="table table-hover">
                {/* Table Headers */}
                <thead>
                    <tr>
                        <th className="less-important-mobile">Unit</th>
                        <th className="less-important-mobile">Current Unit Head</th>
                        <th>Incoming Unit Head</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
	
            {/* Modal for Approving unit head */}
            <div className="modal fade" id="approveUnitHead" tabIndex="-1" role="dialog" aria-labelledby="approveUnitHeadLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="approveUnitHeadLabel">Approve Unit Head Change</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p> Are you sure you want to approve the change in Unit Head Role? </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't approve</button>
                            <button type="button" className="btn btn-danger" onClick = {async () => {
                                let alert = document.getElementById("assignalert")
                                $('#approveUnitHead').modal('toggle');
                                
                                let res = await approveUnitHead(currentUser, incomingUser, unitId, false, props.token)
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
                            }}>Yes, approve</button>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* Modal for rejecting unit head */}
            <div className="modal fade" id="rejectUnitHead" tabIndex="-1" role="dialog" aria-labelledby="rejectUnitHeadLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectUnitHeadLabel">Reject Unit Head Change</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to reject this change in unit head? </p>
                        <div className = "row pb-3">
                            <div className = "form-group">
                                <label htmlFor = "approverRemarks"> Reason/Remarks for Rejection </label>
                                <input className = "form-control" type = "text" name = "approverRemarks" id = "approverRemarks" placeholder = "Input remarks" required />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't reject</button>
                            <button type="button" className="btn btn-danger" onClick = {async () => {
                                let alert = document.getElementById("assignalert")
                                $('#rejectUnitHead').modal('toggle');

                                let remarks = document.getElementById('approverRemarks').value
                                
                                let res = await approveUnitHead(currentUser, incomingUser, unitId, remarks, props.token)
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
                            }}>Yes, reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default ApproveUnitHead