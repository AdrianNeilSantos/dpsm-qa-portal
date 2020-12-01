import Link from 'next/link'
import ResearchGrantForm from './research-grant-form'

function ResearchGrant(){
	return(
		<div>
			<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Research Name</th>
				<th>Author/s</th>
				<th>Granter</th>
				<th>Amount</th>
				<th>Projected Duration</th>
				<th>Start Date</th>
				<th>End Date</th>
				<th>Research Progress</th>
				<th>Proof</th>
				<th>Status</th>
			</tr>
			<tr>
				<td>COVID-19 vaccine</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>WHO</td>
				<td>Php100,000,000</td>
				<td>2019-11-20 to 2021-5-18</td>
				<td>2019-12-25</td>
				<td></td>
				<td>Ongoing</td>
				<td><a href ="#">Download proof</a></td>
				<td><a className="btn btn-info" data-toggle="modal" data-target="#ongoingstatus5">Ongoing</a></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>2017-05-26</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td><a className="btn btn-info" data-toggle="modal" data-target="#forVerifstatus5">For Verification</a></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>2010-09-06</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>	
	</div>
	<div>
		<ResearchGrantForm />
	</div>

	<div className="modal fade" id="ongoingstatus5" tabIndex="-1" role="dialog" aria-labelledby="ongoingLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ongoingLabel">Update Education Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "EndDate"> End Date </label>
                                    <input type = "date" className = "form-control" name = "EndDate" />
                                </div>
                            </div>
                            <div className = "form-row">
                                <div className = "form-group">
                                    <label htmlFor = "Proof"> Proof </label>
                                    <input type = "file" className = "form-control-file" name = "Proof" />
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
        
            <div className="modal fade" id="forVerifstatus5" tabIndex="-1" role="dialog" aria-labelledby="forVerifLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="forVerifLabel">Status</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <table className = "table table-striped table-sm">
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Date of Approval</th>
                            </tr>
                            <tr>
                                <td>Unit Head</td>
                                <td>Therese Basco-Uy</td>
                                <td>Approved</td>
                                <td>2020-11-08</td>
                            </tr>
                            <tr>
                                <td>Department Head</td>
                                <td>LOL Dunno</td>
                                <td>For Approval</td>
                                <td></td>
                            </tr>
                            
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>		


		</div>
	)
}

export default ResearchGrant