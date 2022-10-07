import Link from 'next/link'
import PublicServiceAccomplishmentForm from './public-service-accomplishment-form'
import NameDisplay from '../../../components/name-display'
import Router from 'next/router'
import React from 'react'
import { Formik, Form, Field } from 'formik'

import downloadProof from '../../../services/faculty/downloadProof'
import deletePublicService from '../../../services/faculty/accomplishments/deletePublicService'
import updatePublicService from '../../../services/faculty/accomplishments/updatePublicService'
import approvePublicService from '../../../services/faculty/accomplishments/approvePublicService'
import { Backdrop } from '@material-ui/core'

function PublicServiceAccomplishment(props){
    const name = props.name
    let deletePS = 0
    let editPS = 0
    let approvePSA = 0

    const [currData, setData] = React.useState({
        publicServiceId: 0,
        position: '',
        organization:'',
        description: '',
        type: '',
        startDate: '',
        endDate: ''
    })
    let upm = null
    let pro = null
    let nat
    let wor
    if(props.children != null) {
        upm = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within UPM'){
                return(
                    <tr key = {props.children[key].publicServiceId}>
                        <td>{props.children[key].position}</td>
                        <td className="less-important-mobile">{props.children[key].organization}</td>
                        <td className="less-important-pc">{props.children[key].description}</td>
                        <td className="less-important-tablet">{props.children[key].startDate}</td>
                        <td className="less-important-pc">{props.children[key].endDate}</td>
                        <td className="less-important-tablet">
                            {
                                props.children[key].proof &&
                                <div className = "center">
                                    <button
                                        type="button"
                                        className="btn customButton-icon-only blue"
                                        onClick = {() => {
                                            let file = props.children[key].proof
                                            downloadProof(file, props.token)
                                        }}
                                    >
                                        <span className="material-icons-sharp">file_download</span>
                                    </button>
                                    <a
                                        className ="btn customButton-icon-only blue"
                                        href={process.env.UPLOADS_URL + props.children[key].proof}
                                        style = {{ color: 'white' }}
                                        target="_blank">
                                        <span className="material-icons-sharp">visibility</span>
                                    </a>
                                </div>
                            }
                            { 
                                !props.children[key].proof && 
                                <div>None</div>
                            }
                        </td>
                        <td className="less-important-mobile">{props.children[key].status}</td>
                        <td className="less-important-pc">{props.children[key].approverRemarks || 'None'}</td>
                       <td>
                            { props.editable &&
                                <div>
                                    <button type="submit" className="btn customButton-icon-only blue" data-bs-toggle="modal" data-bs-target="#seeDetailsPSAWithin" onClick={() => {
                                        setEdit(props.children[key].publicServiceId)
                                        setKey(editPS)
                                    }}>
                                        <span className="material-icons-sharp">visibility</span>
                                    </button>
                                    <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editPublicService" onClick={() => {
                                        setEdit(props.children[key].publicServiceId)
                                        setKey(editPS)
                                    }}>
                                        <span className="material-icons-sharp">edit</span>
                                    </button>
                                    <button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children[key].publicServiceId)
                                    }}>
                                        <span className="material-icons-sharp">delete</span>
                                    </button>
                                </div>
                            }
                            { props.approver &&
                                <div className="center">
                                    <button className="btn customButton-icon-only green" data-bs-toggle="modal" data-bs-target="#approvePublicService" onClick={() => {
                                        setApprove(props.children[key].publicServiceId)
                                    }}>
                                        <span className="material-icons-sharp">check</span>
                                    </button>
                                    <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#rejectPublicService" onClick={() => {
                                        setApprove(props.children[key].publicServiceId)
                                    }}>
                                        <span className="material-icons-sharp">close</span>
                                    </button>
                                </div>
                            }
                        </td>
                    </tr>
                );
            }
        });
        pro = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within Pro'){
                return(
                    <tr key = {props.children[key].publicServiceId}>
                        <td>{props.children[key].position}</td>
                        <td className="less-important-mobile">{props.children[key].organization}</td>
                        <td className="less-important-pc">{props.children[key].description}</td>
                        <td className="less-important-tablet">{props.children[key].startDate}</td>
                        <td className="less-important-pc">{props.children[key].endDate}</td>
                        <td className="less-important-tablet">
                        {
                            props.children[key].proof &&
                            <div className = "center">
                                <button
                                    type="button"
                                    className="btn customButton-icon-only blue"
                                    onClick = {() => {
                                        let file = props.children[key].proof
                                        downloadProof(file, props.token)
                                    }}
                                >
                                    <span className="material-icons-sharp">file_download</span>
                                </button>
                                <a
                                    className ="btn customButton-icon-only blue"
                                    href={process.env.UPLOADS_URL + props.children[key].proof}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    <span className="material-icons-sharp">visibility</span>
                                </a>
                            </div>
                        }
                        { 
                            !props.children[key].proof && 
                            <div>None</div>
                        }
                        </td>
                        <td className="less-important-mobile">{props.children[key].status}</td>
                        <td className="less-important-tablet">{props.children[key].approverRemarks || 'None'}</td>
                        <td>
                            { props.editable &&
                                <div>
                                    <button type="submit" className="btn customButton-icon-only blue" data-bs-toggle="modal" data-bs-target="#seeDetailsPSAProfession" onClick={() => {
                                        setEdit(props.children[key].publicServiceId)
                                        setKey(editPS)
                                    }}>
                                        <span className="material-icons-sharp">visibility</span>
                                    </button>
                                    <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editPublicService" onClick={() => {
                                        setEdit(props.children[key].publicServiceId)
                                        setKey(editPS)
                                    }}>
                                        <span className="material-icons-sharp">edit</span>
                                    </button>
                                    <button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#deletePublicService" onClick={() => {
                                        setDelete(props.children[key].publicServiceId)
                                    }}>
                                        <span className="material-icons-sharp">delete</span>
                                    </button>
                                </div>
                            }
                            { props.approver &&
                                <div className = "center">
                                    <button className="btn customButton-icon-only green" data-bs-toggle="modal" data-bs-target="#approvePublicService" onClick={() => {
                                        setApprove(props.children[key].publicServiceId)
                                    }}>
                                       <span className="material-icons-sharp">check</span>
                                    </button>
                                    <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#rejectPublicService" onClick={() => {
                                        setApprove(props.children[key].publicServiceId)
                                    }}>
                                       <span className="material-icons-sharp">close</span>
                                    </button>
                                </div>
                            }
                        </td>
                    </tr>
                );
            }
        });
        nat = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within Nat'){
                return(
                    <tr key = {props.children[key].publicServiceId}>
                        <td>{props.children[key].position}</td>
                        <td className="less-important-mobile">{props.children[key].organization}</td>
                        <td className="less-important-pc">{props.children[key].description}</td>
                        <td className="less-important-tablet">{props.children[key].startDate}</td>
                        <td className="less-important-pc">{props.children[key].endDate}</td>
                        <td className="less-important-tablet">
                        {
                            props.children[key].proof &&
                            <div className = "center">
                                <button
                                    type="button"
                                    className="btn customButton-icon-only blue"
                                    onClick = {() => {
                                        let file = props.children[key].proof
                                        downloadProof(file, props.token)
                                    }}
                                >
                                    <span className="material-icons-sharp">file_download</span>
                                </button>
                                <a
                                    className ="btn customButton-icon-only blue"
                                    href={process.env.UPLOADS_URL + props.children[key].proof}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    <span className="material-icons-sharp">visibility</span>
                                </a>
                            </div>
                        }
                        { 
                            !props.children[key].proof && 
                            <div>None</div>
                        }
                        </td>
                        <td className="less-important-mobile">{props.children[key].status}</td>
                        <td className="less-important-tablet">{props.children[key].approverRemarks || 'None'}</td>
                        <td>
                        { props.editable &&
                            <div>
                                <button type="submit" className="btn customButton-icon-only blue" data-bs-toggle="modal" data-bs-target="#seeDetailsPSANation" onClick={() => {
                                        setEdit(props.children[key].publicServiceId)
                                        setKey(editPS)
                                    }}>
                                        <span className="material-icons-sharp">visibility</span>
                                </button>
                                <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editPublicService" onClick={() => {
                                    setEdit(props.children[key].publicServiceId)
                                    setKey(editPS)
                                }}>
                                    <span className="material-icons-sharp">edit</span>
                                </button>
                                <button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#deletePublicService" onClick={() => {
                                    setDelete(props.children[key].publicServiceId)
                                }}>
                                    <span className="material-icons-sharp">delete</span>
                                </button>
                            </div>
                        }
                        { props.approver &&
                            <div className = "center">
                                <button className="btn customButton-icon-only green" data-bs-toggle="modal" data-bs-target="#approvePublicService" onClick={() => {
                                    setApprove(props.children[key].publicServiceId)
                                }}>
                                    <span className="material-icons-sharp">check</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#rejectPublicService" onClick={() => {
                                    setApprove(props.children[key].publicServiceId)
                                }}>
                                   <span className="material-icons-sharp">close</span>
                                </button>
                            </div>
                        }
                        </td>
                    </tr>
                );
            }
        });
        wor = Object.keys(props.children).map(key => {
            if (props.children[key].type == 'Within Wor'){
                return(
                    <tr key = {props.children[key].publicServiceId}>
                        <td>{props.children[key].position}</td>
                        <td className="less-important-mobile">{props.children[key].organization}</td>
                        <td className="less-important-pc">{props.children[key].description}</td>
                        <td className="less-important-tablet">{props.children[key].startDate}</td>
                        <td className="less-important-pc">{props.children[key].endDate}</td>
                        <td className="less-important-tablet">
                        {
                            props.children[key].proof &&
                            <div className = "center">
                                <button
                                    type="button"
                                    className="btn customButton-icon-only blue"
                                    onClick = {() => {
                                        let file = props.children[key].proof
                                        downloadProof(file, props.token)
                                    }}
                                >
                                    <span className="material-icons-sharp">file_download</span>
                                </button>
                                <a
                                    className ="btn customButton-icon-only blue"
                                    href={process.env.UPLOADS_URL + props.children[key].proof}
                                    style = {{ color: 'white' }}
                                    target="_blank">
                                    <span className="material-icons-sharp">visibility</span>
                                </a>
                            </div>
                        }
                        { 
                            !props.children[key].proof && 
                            <div>None</div>
                        }
                        </td>
                        <td className="less-important-mobile">{props.children[key].status}</td>
                        <td className="less-important-tablet">{props.children[key].approverRemarks || 'None'}</td>
                        <td>
                        { props.editable &&
                            <div>
                                <button type="submit" className="btn customButton-icon-only blue" data-bs-toggle="modal" data-bs-target="#seeDetailsPSAWorld" onClick={() => {
                                        setEdit(props.children[key].publicServiceId)
                                        setKey(editPS)
                                    }}>
                                        <span className="material-icons-sharp">visibility</span>
                                </button>
                                <button className="btn customButton-icon-only yellow" data-bs-toggle="modal" data-bs-target="#editPublicService" onClick={() => {
                                    setEdit(props.children[key].publicServiceId)
                                    setKey(editPS)
                                }}>
                                    <span className="material-icons-sharp">edit</span>
                                </button>
                                <button className="btn customButton-icon-only delete" data-bs-toggle="modal" data-bs-target="#deletePublicService" onClick={() => {
                                    setDelete(props.children[key].publicServiceId)
                                }}>
                                    <span className="material-icons-sharp">delete</span>
                                </button>
                            </div>
                        }
                        { props.approver &&
                            <div className = "center">
                                <button className="btn customButton-icon-only green" data-bs-toggle="modal" data-bs-target="#approvePublicService" onClick={() => {
                                    setApprove(props.children[key].publicServiceId)
                                }}>
                                    <span className="material-icons-sharp">check</span>
                                </button>
                                <button className="btn customButton-icon-only maroon" data-bs-toggle="modal" data-bs-target="#rejectPublicService" onClick={() => {
                                    setApprove(props.children[key].publicServiceId)
                                }}>
                                    <span className="material-icons-sharp">close</span>
                                </button>
                            </div>
                        }
                        </td>
                    </tr>
                );
            }
        });
    }

    function setEdit(id) {
        editPS = id
    }

    function setDelete(id) {
        deletePS = id
    }

    function setApprove(id) {
        approvePSA = id
    }

    function setKey(x) {
        Object.keys(props.children).map(key => {
            if(props.children[key].publicServiceId == x) {
                setData(props.children[key])
                if(props.children[key].endDate == "" || props.children[key].endDate == null) {
                    setData(currData => ({...currData, endDate: ''}))
                }
                if(props.children[key].proof) {
                    setData(currData => ({...currData, proof: props.children[key].proof}))
                } else {
                    setData(currData => ({...currData, proof: 'None'}))
                }
            }
        });
    }

	return(
	<div>
        <div className="center">
            <h2 align = "center" style={{display: "inline-block", verticalAlign: "bottom"}}> Public Service Accomplishments</h2>
            {/* Add Button Trigger */}
            { props.editable &&
                <button type="button" className="btn customButton-icon-only maroon" data-bs-toggle="collapse" data-bs-target="#addPublicService" aria-expanded="false" aria-controls="addPublicService" style={{left: "1rem", position: "relative"}}>
                    <span className="material-icons-sharp">add</span>
                </button>
            }
        </div>


        <br/>
        <NameDisplay unit = {props.unit} position={props.position}>{props.name}</NameDisplay>
        <div role="alert" id="publicservicealert" style={{visibility:"hidden"}}></div>
		
        <br/>
        { props.editable &&
                <div className="card collapse" id="addPublicService">
                    <PublicServiceAccomplishmentForm token = { props.token } />
                </div>  
        } 

        <br/>
        <div>
            <div className = "table-container">
                <h3 className="table-container-text" align = "center">Within UP Manila </h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Position/Role</th>
                            <th className="less-important-mobile">Organization</th>
                            <th className="less-important-pc">Description</th>
                            <th className="less-important-tablet">Start Date</th>
                            <th className="less-important-pc">End Date</th>
                            <th className="less-important-tablet">Proof</th>
                            <th className="less-important-mobile">Status</th>
                            <th className="less-important-pc">Approver Remarks</th>
                            { (props.editable || props.approver) && <th>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {upm ? upm : <td colSpan = "9"><br/><p align = "center">No data available.</p></td>} 
                    </tbody>
                </table>
            </div>
        </div>
            
        <div>
		<br />
        <div className = "table-container">
            <h3 className="table-container-text" align = "center"> Contributions to Profession </h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Position/Role</th>
                        <th className="less-important-mobile">Organization</th>
                        <th className="less-important-pc">Description</th>
                        <th className="less-important-tablet">Start Date</th>
                        <th className="less-important-pc">End Date</th>
                        <th className="less-important-tablet">Proof</th>
                        <th className="less-important-mobile">Status</th>
                        <th className="less-important-tablet">Approver Remarks</th>
                        { (props.editable || props.approver) && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>

                    {pro ? pro : <td colSpan = "9"><br/><p align = "center">No data available.</p></td>}
                </tbody>
            </table>
        </div>
		<br />
		
        <div className = "table-container">
            <h3 className="table-container-text" align = "center"> Contributions to the Nation </h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Position/Role</th>
                        <th className="less-important-mobile">Organization</th>
                        <th className="less-important-pc">Description</th>
                        <th className="less-important-tablet">Start Date</th>
                        <th className="less-important-pc">End Date</th>
                        <th className="less-important-tablet">Proof</th>
                        <th className="less-important-mobile">Status</th>
                        <th className="less-important-tablet">Approver Remarks</th>
                        { (props.editable || props.approver) && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {nat ? nat : <td colSpan = "9"><br/><p align = "center">No data available.</p></td>}
                </tbody>
            </table>
        </div>
		<br />


		
	<div className = "table-container">
        <h3 className="table-container-text" align = "center"> Contributions to the World </h3>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Position/Role</th>
                    <th className="less-important-mobile">Organization</th>
                    <th className="less-important-pc">Description</th>
                    <th className="less-important-tablet">Start Date</th>
                    <th className="less-important-pc">End Date</th>
                    <th className="less-important-tablet">Proof</th>
                    <th className="less-important-mobile">Status</th>
                    <th className="less-important-tablet">Approver Remarks</th>
                    { (props.editable || props.approver) && <th>Action</th>}
                </tr>
            </thead>
            <tbody>
                {wor ? wor : <td colSpan = "9"><br/><p align = "center">No data available.</p></td>}
            </tbody>
        </table>
	</div>
            </div>
            <br/><br/>



            <br/>


        {/* <!-- See More Modal Within UP Manila--> */}
        <div className="modal fade" id="seeDetailsPSAWithin" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">View Public Service Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-details">
                        <h3>Position: </h3>
                        <h4>{currData.position}</h4>
                        <br></br>
                        <h3>Organization: </h3>
                        <h4>{currData.organization}</h4>
                        <br></br>
                        <h3>Description: </h3>
                        <h4>{currData.description}</h4>
                        <br></br>
                        <h3>Type: </h3>
                        <h4>{currData.type}</h4>
                        <br></br>
                        <h3>Start Date: </h3>
                        <h4>{currData.startDate}</h4>
                        <br></br>
                        <h3>End Date: </h3>
                        <h4>{currData.endDate}</h4>
                        <br></br>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>

        {/* <!-- See More Modal to Profession--> */}
        <div className="modal fade" id="seeDetailsPSAProfession" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">View Public Service Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-details">
                        <h3>Position: </h3>
                        <h4>{currData.position}</h4>
                        <br></br>
                        <h3>Organization: </h3>
                        <h4>{currData.organization}</h4>
                        <br></br>
                        <h3>Description: </h3>
                        <h4>{currData.description}</h4>
                        <br></br>
                        <h3>Type: </h3>
                        <h4>{currData.type}</h4>
                        <br></br>
                        <h3>Start Date: </h3>
                        <h4>{currData.startDate}</h4>
                        <br></br>
                        <h3>End Date: </h3>
                        <h4>{currData.endDate}</h4>
                        <br></br>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>

        {/* <!-- See More Modal to Profession--> */}
        <div className="modal fade" id="seeDetailsPSANation" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">View Public Service Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-details">
                        <h3>Position: </h3>
                        <h4>{currData.position}</h4>
                        <br></br>
                        <h3>Organization: </h3>
                        <h4>{currData.organization}</h4>
                        <br></br>
                        <h3>Description: </h3>
                        <h4>{currData.description}</h4>
                        <br></br>
                        <h3>Type: </h3>
                        <h4>{currData.type}</h4>
                        <br></br>
                        <h3>Start Date: </h3>
                        <h4>{currData.startDate}</h4>
                        <br></br>
                        <h3>End Date: </h3>
                        <h4>{currData.endDate}</h4>
                        <br></br>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>

        {/* <!-- See More Modal to World--> */}
        <div className="modal fade" id="seeDetailsPSAWorld" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">View Public Service Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-details">
                        <h3>Position: </h3>
                        <h4>{currData.position}</h4>
                        <br></br>
                        <h3>Organization: </h3>
                        <h4>{currData.organization}</h4>
                        <br></br>
                        <h3>Description: </h3>
                        <h4>{currData.description}</h4>
                        <br></br>
                        <h3>Type: </h3>
                        <h4>{currData.type}</h4>
                        <br></br>
                        <h3>Start Date: </h3>
                        <h4>{currData.startDate}</h4>
                        <br></br>
                        <h3>End Date: </h3>
                        <h4>{currData.endDate}</h4>
                        <br></br>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>


		<div className="modal fade" id="editPublicService" tabIndex="-1" role="dialog" aria-labelledby="editPublicServiceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="editPublicServiceLabel">Update Public Service Accomplishment Info</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={currData}
                    onSubmit={async (values) => {
                        let form = document.getElementById('editPSForm')
                        let formData = new FormData(form)
                        formData.append('publicServiceId', currData.publicServiceId)
                        formData.append('type', currData.type)
                        let alert = document.getElementById("publicservicealert")
                        let res = await updatePublicService(formData, props.token)
                        if(res.success == true) { 
                            alert.className ="alert alert-success"
                            alert.style = "visibility: visible"
                            alert.innerHTML = res.message
                        } else {
                            alert.className = "alert alert-danger"
                            if(res.error) alert.innerHTML = res.error[0].message
                            else alert.innerHTML = res.message
                        }
                        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#publicservicealert").slideUp(500);
                        });

                        Router.push('/faculty/accomplishment')
                    }}
                >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "editPSForm">
                        <div className="modal-body">
                            <div className = "row pb-3">
                            <div className = "form-group">
                                <label htmlFor = "PublicServicePositionUpdate"> Position/Role </label>
                                <Field className = "form-control" type = "text" name = "position" id = "position" placeholder = "Input position/role" />
                            </div>
                            </div>
                            <div className = "row pb-3">
                            <div className = "form-group">
                                <label htmlFor = "PublicServiceOrganizationUpdate"> Organization </label>
                                <Field className = "form-control" type = "text" name = "organization" id = "organization" placeholder = "Input organization" />
                            </div>
                            </div>
                            <div className = "row pb-3">
                            <div className = "form-group">
                                <label htmlFor = "PublicServiceAccomplishmentStartDateUpdate"> Start Date </label>
                                <Field type = "date" className = "form-control" name = "startDate" id = "startDate" />
                            </div>
                            </div>
                            <div className = "row pb-3">
                            <div className = "form-group">
                                <label htmlFor = "PublicServiceAccomplishmentEndDateUpdate"> End Date </label>
                                <Field type = "date" className = "form-control" name = "endDate" id = "endDate" />
                            </div>
                            </div>
                            <div className = "row pb-3">
                            <div className = "form-group col-md-12">
                                <label htmlFor = "PublicServiceAccomplishmentDescriptionUpdate"> Description </label>
                                <Field className = "form-control" type = "text" name = "description" id = "description" placeholder = "Input description" />
                            </div>
                            </div>
                            <div className = "row pb-3">
                            <div className = "form-group">
                                <label htmlFor = "PublicServiceAccomplishmentProofUpdate"> Add/Edit Proof [Uploaded: {currData.proof}] </label>
                                <Field type = "file" className = "form-control-file" name = "proof" id = "proof" value={undefined} />
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                $('#editPublicService').modal('hide');
                            }}>Save changes</button>
                        </div>
                    </Form>
                )}
                </Formik>
                </div>
            </div>
        </div>
        
        <div className="modal fade" id="deletePublicService" tabIndex="-1" role="dialog" aria-labelledby="deletePublicServiceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="deletePublicServiceLabel">Delete Public Service Accomplishment Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p> Are you sure you want to delete this public service accomplishment information? </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't delete</button>
                    <button type="button" className="btn btn-danger" onClick = {async () => {
                        $('#deletePublicService').modal('toggle');
                        let alert = document.getElementById("publicservicealert")
                        let res = await deletePublicService(deletePS, props.token)
                        if(res.success == true) { 
                            alert.className ="alert alert-success"
                            alert.style = "visibility: visible"
                            alert.innerHTML = res.message
                        
                        } else {
                            alert.className = "alert alert-danger"
                            if(res.error) alert.innerHTML = res.error[0].message
                            else alert.innerHTML = res.message
                        }
                        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#publicservicealert").slideUp(500);
                        }
                            
                        );

                        Router.push('/faculty/accomplishment')
                        
                    }}>Yes, delete</button>
                </div>
                </div>
            </div>
    
    </div>

        <div className="modal fade" id="approvePublicService" tabIndex="-1" role="dialog" aria-labelledby="approvePublicServiceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="approvePublicServiceLabel">Approve Public Service Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p> Are you sure you want to approve this public service information? </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No, don't approve</button>
                    <button type="button" className="btn btn-danger" onClick = {async () => {
                        let alert = document.getElementById("publicservicealert")
                        $('#approvePublicService').modal('toggle');
                        
                        let formData = new FormData()
                        formData.append('publicServiceId', approvePSA)
                        
                        let res = await approvePublicService(formData, true, props.facultyId, props.token)
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
                        
                        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#publicservicealert").slideUp(500);
                        });
                        Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                    }}>Yes, approve</button>
                </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="rejectPublicService" tabIndex="-1" role="dialog" aria-labelledby="rejectPublicServiceLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="rejectPublicServiceLabel">Reject Public Service Information</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={currData}
                    onSubmit={async (values) => {
                        let alert = document.getElementById("publicservicealert")
                        $('#rejectPublicService').modal('toggle');
                        
                        let form = document.getElementById('rejectPublicServiceForm')
                        let formData = new FormData(form)
                        formData.append('publicServiceId', approvePSA)
                        
                        let res = await approvePublicService(formData, false, props.facultyId, props.token)
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
                        
                        $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function(){
                            $("#publicservicealert").slideUp(500);
                        });
                        Router.push('/faculty/approval/' + props.facultyId, '/faculty/approval/' + props.facultyId)
                    }}
                >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "rejectPublicServiceForm">
                        <div className="modal-body">
                            <div className = "row pb-3">
                                <div className = "form-group">
                                    <label htmlFor = "RejectionRemarks"> Reason/Remarks for Rejection </label>
                                    <Field className = "form-control" type = "text" name = "approverRemarks" placeholder = "Input remarks" required />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" disabled = {isSubmitting} onClick = {() => {
                                $('#rejectPublicService').modal('toggle');
                            }}>Save changes</button>
                        </div>
                    </Form>
                )}
                </Formik>
                </div>
            </div>
        </div>
        <br/><br/>
    </div>
    )
}

export default PublicServiceAccomplishment
