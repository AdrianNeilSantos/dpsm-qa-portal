import Link from 'next/link'
import WorkExpForm from './work-exp-form'
import EmploymentHistory from './employment-history'

function WorkExperience(props){
    const name = props.children[props.children.length-1].lastName + ', ' + props.children[props.children.length-1].firstName + ' ' + props.children[props.children.length-1].middleName
	const len = props.children.length - 2;
	let content = Object.keys(props.children).map(key => {
		if(key < len) {
			return (
				<tr key = {props.children.[key].workExpId}>
					<td>{props.children[key].employerName}</td>
					<td>{props.children[key].position}</td>
					<td>{props.children[key].startDate}</td>
					<td>{props.children[key].endDate}</td>
					<td>{props.children[key].description}</td>
					<td></td>
					<td></td>
					<td>
                        <div className = "btn-grp">
                            <a className="btn btn-info" data-toggle="modal" data-target="#editWorkExperience">Edit</a>
                            <a className="btn btn-danger" data-toggle="modal" data-target="#deleteWorkExperience">Delete</a>
                        </div>
                    </td>
				</tr>
			);	
		}
	});
	return(
		<div>
            <h3 align = "center"> Work Experience: <u>{name}</u> </h3>
            <br />
			<h5 align = "center"> Within UP Manila </h5>
			<EmploymentHistory>{props.children[len]}</EmploymentHistory>
			<br />
			<h5 align = "center"> Outside UP Manila </h5>
			<table className = "table table-striped table-sm">
			<tbody>
				<tr key = "headers">
					<th>Employer</th>
					<th>Position</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Description</th>
					<th>Proof</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
				{content}
			</tbody>
			</table>
			<div>
				<WorkExpForm />
			</div>

			<div className="modal fade" id="editWorkExperience" tabIndex="-1" role="dialog" aria-labelledby="editWorkExperienceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editWorkExperienceLabel">Update Work Experience Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "EmployerWorkExperienceUpdate"> Employer </label>
					<input className = "form-control" type = "text" name = "EmployerWorkExperienceUpdate" placeholder = "Input name of employer" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "PositionWorkExperienceUpdate"> Title/Position </label>
					<input className = "form-control" type = "text" name = "PositionWorkExperienceUpdate" placeholder = "Input position" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "StartDateWorkExperienceUpdate"> Start Date </label>
					<input type = "date" className = "form-control" name = "StartDateWorkExperienceUpdate" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "EndDateWorkExperienceUpdate"> End Date </label>
					<input type = "date" className = "form-control" name = "EndDateWorkExperienceUpdate" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "DescriptionWorkExperienceUpdate"> Description </label>
					<input className = "form-control" type = "text" name = "DescriptionWorkExperienceUpdate" placeholder = "Add Description" />
				</div>
                    	    </div>
			    <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "ProofWorkExperienceUpdate"> Proof </label>
                            		<input type = "file" className = "form-control-file" name = "ProofWorkExperienceUpdate" />
                        	</div>
                    	    </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteWorkExperience" tabIndex="-1" role="dialog" aria-labelledby="deleteWorkExperienceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteWorkExperienceLabel">Delete Work Experience Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this work experience information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
			<button type="button" className="btn btn-danger">Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
		
		</div>
	)
}

export default WorkExperience
