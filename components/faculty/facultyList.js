import Link from 'next/link'
import React from 'react'
import Router from 'next/router'

import updateUser from '../../services/admin/updateUser'

function FacultyList(props){ 
	let chem
	let mcsu
	let physgeo
	let user = 0
	const [currData, setData] = React.useState({
		userId: 0,
        status: '',
        remarks: '',
		facultyName: ''
    })

	let activeRemarksStyle
	let inactiveRemarksStyle 
	
	function handleInputChange(id, event) {
		if(id == 'status') setData({...currData, [id]: event.target.value, ['remarks']: ''});
		else setData({...currData, [id]: event.target.value});
	}

	if(currData.status == 'Inactive') {
		activeRemarksStyle = 'none'
		inactiveRemarksStyle = 'block'; 
	 } else {
		activeRemarksStyle = 'block'
		inactiveRemarksStyle = 'none'
	 } 
	
	if(props.children != null) {
		let path
		if(props.path == "approval") path = '/faculty/approval/'
		else if(props.path == 'admin') path = '/admin/'
		else if(props.path == 'info') path = '/faculty/view/'
		
		chem = Object.keys(props.children).map(key => {
			if (props.children[key].unitId == 1) { 
				let faculty = props.children[key].faculty_units
				let facultyList = Object.keys(faculty).map((index) => {
					let surname = faculty[index].faculty_personal_info.lastName
					let firstName = faculty[index].faculty_personal_info.firstName
					let facultyId = faculty[index].facultyId
					let forApprovalCount = faculty[index].forApprovalCount
					let statusClass
					
					let lastUpdated
					if(faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0]

					if(props.path != 'approval') {
						statusClass = 'disabled btn '
						faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass +='btn-warning' : statusClass += 'btn-danger'
					}
					
					return (
						<tr>
							<td>
								<div className = "list-group">
									<a href = {`${path + encodeURIComponent(facultyId)}`} className = "list-group-item list-group-item-action list-group-item-light" forApproval={faculty[index].faculty_personal_info}>
										{surname}, {firstName} 
										&nbsp; <span className="badge badge-danger">{forApprovalCount}</span>
										{ props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})` }
									</a>	
								</div>
							</td>

							{
								props.path != 'approval' &&
								<td className="less-important-mobile"><span className={statusClass}>{faculty[index].faculty_personal_info.user.status}</span></td>
							}
							{
								props.path != 'approval' &&
								<td className="less-important-mobile">{faculty[index].faculty_personal_info.user.remarks || 'None'}</td>
							}
							{
								props.role == 5 &&
								<td>
									<button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#editStatus" onClick={() => {
										setEdit(faculty[index].faculty_personal_info.user.userId)
										setKey(user)
									}}>
										<span className="material-icons-sharp">edit</span>
									</button>
								</td>
							}
						</tr>
					)
				})

				return (
					<div>
						{/* Table Title */}
						<h3 className="table-container-text" align = "center"> {props.children[key].unit} </h3>
						<div className="table-container">
							<table className="table table-hover">
								<thead>
									<tr>
										<th className="table-name">Name</th>
										{
										props.path != 'approval' &&
										<th className="less-important-mobile">Status</th>
										}
										{
										props.path != 'approval' &&
										<th className="less-important-mobile">Remarks</th>
										}
										{
											props.role == 5 &&
											<th>Action</th>
										}
									</tr>
								</thead>
								<tbody>
									{/* tbody starts here */}
									{facultyList}
								</tbody>
							</table>
						</div>
					</div>
				); 
			}
        });

		mcsu = Object.keys(props.children).map(key => {
			if (props.children[key].unitId == 2) { 
				let faculty = props.children[key].faculty_units
				let facultyList = Object.keys(faculty).map((index) => {
					let surname = faculty[index].faculty_personal_info.lastName
					let firstName = faculty[index].faculty_personal_info.firstName
					let facultyId = faculty[index].facultyId
					let forApprovalCount = faculty[index].forApprovalCount
					let statusClass
					
					let lastUpdated
					if(faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0]

					if(props.path != 'approval') {
						statusClass = 'disabled btn '
						faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass +='btn-warning' : statusClass += 'btn-danger'
					}
					return (
						<tr>
							<td>
								<div className = "list-group">
									<a href = {`${path + encodeURIComponent(facultyId)}`} className = "list-group-item list-group-item-action list-group-item-light">
										{surname}, {firstName} 
										&nbsp; <span className="badge badge-danger">{forApprovalCount}</span>
										{ props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})` }
									</a>	
								</div>
							</td>
							{
								props.path != 'approval' &&
								<td className="less-important-mobile"><span className={statusClass}>{faculty[index].faculty_personal_info.user.status}</span></td>
							}
							{
								props.path != 'approval' &&
								<td className="less-important-mobile">{faculty[index].faculty_personal_info.user.remarks || 'None'}</td>
							}
							{
								props.role == 5 &&
								<td>
									<button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#editStatus" onClick={() => {
										setEdit(faculty[index].faculty_personal_info.user.userId)
										setKey(user)
									}}>
									<span className="material-icons-sharp">edit</span>
									</button>
								</td>
							}
						</tr>
					)
				})

				return (
					<div>
						<br/><br/>
						<h3 className="table-container-text" align = "center"> {props.children[key].unit} </h3>
						<div className = "table-container">
							<table className="table table-hover">
								<thead>
									<tr>
										<th className="table-name">Name</th>
										{
										props.path != 'approval' &&
										<th className="less-important-mobile">Status</th>
										}
										{
										props.path != 'approval' &&
										<th className="less-important-mobile">Remarks</th>
										}
										{
											props.role == 5 &&
											<th>Action</th>
										}
									</tr>
								</thead>
								<tbody>
									{facultyList}
								</tbody>
							</table>
						</div>
					</div>
				); 
			}
        });

		physgeo = Object.keys(props.children).map(key => {
			if (props.children[key].unitId == 3) { 
				let faculty = props.children[key].faculty_units
				let facultyList = Object.keys(faculty).map((index) => {
					let surname = faculty[index].faculty_personal_info.lastName
					let firstName = faculty[index].faculty_personal_info.firstName
					let facultyId = faculty[index].facultyId
					let forApprovalCount = faculty[index].forApprovalCount
					let statusClass
					
					let lastUpdated
					if(faculty[index].faculty_personal_info.faculty_update) lastUpdated = faculty[index].faculty_personal_info.faculty_update.updatedAt.split('T')[0]

					if(props.path != 'approval') {
						statusClass = 'disabled btn '
						faculty[index].faculty_personal_info.user.status == 'Active' ? statusClass +='btn-warning' : statusClass += 'btn-danger'
					}
					return (
						<tr>
							<td>
								<div className = "list-group">
									<a href = {`${path + encodeURIComponent(facultyId)}`} className = "list-group-item list-group-item-action list-group-item-light">
										{surname}, {firstName} 
										&nbsp; <span className="badge badge-danger">{forApprovalCount}</span>
										{ props.path == 'info' && props.role == 3 && lastUpdated && ` (Last Updated: ${lastUpdated})` }
									</a>	
								</div>
							</td>
							{
								props.path != 'approval' &&
								<td className="less-important-mobile"><span className={statusClass}>{faculty[index].faculty_personal_info.user.status}</span></td>
							}
							{
								props.path != 'approval' &&
								<td className="less-important-mobile">{faculty[index].faculty_personal_info.user.remarks || 'None'}</td>
							}
							{
								props.role == 5 &&
								<td>
									<button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#editStatus" onClick={() => {
										setEdit(faculty[index].faculty_personal_info.user.userId)
										setKey(user)
									}}>
										<span className="material-icons-sharp">edit</span>
									</button>
								</td>
							}
						</tr>
					)
				})

				return (
					<div>
						<br/><br/>
						<h3 className="table-container-text" align = "center"> {props.children[key].unit} </h3>
						<div className = "table-container">
							<table className="table table-hover">
								<thead>
									<tr>
										<th className="table-name">Name</th>
										{
										props.path != 'approval' &&
										<th className="less-important-mobile">Status</th>
										}
										{
										props.path != 'approval' &&
										<th className="less-important-mobile">Remarks</th>
										}
										{
											props.role == 5 &&
											<th>Action</th>
										}
									</tr>
								</thead>
								<tbody>
									{facultyList}
								</tbody>
							</table>
						</div>
					</div>
				); 
			}
        });

		function setEdit(id) {
			user = id
		}

		async function setKey(x) {
			await Object.keys(props.children).map(async key => {
				let faculty = props.children[key].faculty_units
				await Object.keys(faculty).map(async index => {
					if(faculty[index].faculty_personal_info.user.userId == x) { 
						
						await setData({
							userId: x,
							status: faculty[index].faculty_personal_info.user.status,
							remarks: faculty[index].faculty_personal_info.user.remarks,
							facultyName: faculty[index].faculty_personal_info.lastName + ', ' + faculty[index].faculty_personal_info.firstName
						})
					}
				})
			});
			
		}
    } 
    else{ 
        return(<p align = "center">No approvals needed.</p>)
    }

	return(
		<div>
			<div className ="alert alert-success" role="alert" id="facultyStatusalert" style={{visibility:"hidden"}}></div>
			{chem}
			{mcsu}
			{physgeo}

			<div className="modal fade" id="editStatus" tabIndex="-1" role="dialog" aria-labelledby="editStatus" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editStatus">Update Faculty Status - {currData.facultyName}</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className = "row pb-3">
                            	<div className = "form-group">
									<label htmlFor = "Status"> Status </label>
									<select className = "form-control" name="Status" id="Status" value = { currData.status } onChange = {(e) => handleInputChange("status", e)}>
										<option value="Active" key = "active">Active</option>
										<option value="Inactive" key = "inactive">Inactive</option>
									</select>
								</div>
							</div>
							
							<div className = "row pb-3" id="activeremarksrow" style={{display: activeRemarksStyle}}>
								<div className = "form-group">
									<label htmlFor = "Remarks"> Remarks </label>
									<select className = "form-control" name="Remarks" id="Remarks" value = { currData.remarks || ''} onChange = {(e) => handleInputChange("remarks", e)}>
										<option value="">-- SELECT REMARKS --</option>
										<option value="On Leave">On Leave</option>
									</select>
								</div>
							</div>

							<div className = "row pb-3" id="inactiveremarksrow" style={{display: inactiveRemarksStyle}}>
								<div className = "form-group">
									<label htmlFor = "Remarks"> Remarks </label>
									<select className = "form-control" name="Remarks" id="Remarks" value = { currData.remarks || ''} onChange = {(e) => handleInputChange("remarks", e)}>
										<option value="">-- SELECT REMARKS --</option>
										<option value="Retired">Retired</option>
										<option value="Resigned">Resigned</option>
									</select>
								</div>
							</div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick = {async () => {
                            $('#editStatus').modal('toggle');
                            let alert = document.getElementById("facultyStatusalert")
                            let res = await updateUser(currData, props.token)
                            if(res.success == true) { 
                                alert.className ="alert alert-success"
                                alert.style = "visibility: visible"
                                alert.innerHTML = res.message
                            } else {
                                alert.className = "alert alert-danger"
                                if(res.error) alert.innerHTML = res.error[0].message
                                else alert.innerHTML = res.message
                            }
                            $("#facultyStatusalert").fadeTo(5000, 500).slideUp(500, function(){
                                $("#facultyStatusalert").slideUp(500);
                            });

                            Router.push('/admin')
                        }}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
			<br/>
		</div>
	)
}

export default FacultyList
