import React from 'react'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addTraining from '../../../services/faculty/accomplishments/addTraining'

class TrainingSeminarForm extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
        let TrainingDetails = {
            title: "",
            role: "",
            dateFrom: "",
            dateTo: "",
            venue: "",
            proof: ""
        }
		return(
            <Formik
                initialValues={TrainingDetails}
                onSubmit={async (values, {resetForm}) => {
                    let form = document.getElementById('tsForm')
                    let formData = new FormData(form)

                    let alert = document.getElementById("trainingseminaralert")
                    let res = await addTraining(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#trainingseminaralert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/accomplishment')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
        			<Form id = "tsForm">
                        <h2 className="center">Add Training/Seminar Form</h2>
                        <hr />
			            <h6>Required</h6>
                        {/* 1st Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-6">
                                <label htmlFor = "TrainingSeminar[]" className = "required-label" style={{fontSize:"16px"}} > Name of Training/Seminar </label>
                                <Field className = "form-control" type = "text" name = "title" id = "title" placeholder = "Input name of Training/Seminar" required />
                            </div>
                            <div className = "form-group col-md-6">
                                <label htmlFor = "TrainingSeminarRole[]" className = "required-label" style={{fontSize:"16px"}}> Role</label>
                                <Field className = "form-control" type = "text" name = "role" id = "role" placeholder = "Input role in training/seminar" required />
                            </div>
                        </div>

                        {/* 2nd Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-4">
                                <label htmlFor = "TrainingSeminarVenue[]" className = "required-label" style={{fontSize:"16px"}}> Venue </label>
                                <Field className = "form-control" type = "text" name = "venue" id = "venue" placeholder = "Input venue" required />
                            </div>
                            <div className = "form-group col-md-4">
                                <label htmlFor = "TrainingSeminarStartDate[]" className = "required-label" style={{fontSize:"16px"}}> Start Date </label>
                                <Field type = "date" className = "form-control" name = "dateFrom" id = "dateFrom" required />
                            </div>
                            <div className = "form-group col-md-4">
                                <label htmlFor = "TrainingSeminarEndDate[]" style={{fontSize:"16px"}}> End Date </label>
                                <Field type = "date" className = "form-control" name = "dateTo" id = "dateTo" />
                            </div>
                        </div>

                        {/* 3rd Row */}
                        <div className="row pb-3">
                            <div className = "form-group col-md-8">
                                <label htmlFor = "TrainingSeminarRemarks[]" style={{fontSize:"16px"}}> Remarks </label>
                                <Field className = "form-control" type = "text" name = "remarks" id = "remarks" placeholder = "Input remarks" />
                            </div>
                            <div className = "form-group col-md-4">
                                <label htmlFor = "TrainingSeminarProof[]" style={{fontSize:"16px"}}> Proof </label> <br/>
                                <Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
                            </div>
                        </div>
                        <br />
                        <div className="center">
                            <button type = "submit" className = "btn customButton maroon" disabled = {isSubmitting}>
                                <span className="material-icons-sharp">add</span> 
                                Submit
                            </button>
                        </div>
                        
                    <style jsx>{`
                        label.required-label:after{
                            content: "*";
                            color: #f00;
                        }
                        h6:before{
                            content: "* ";
                            color: #f00;
                        }
                    `}</style>
                    </Form>
                )}
		
            </Formik>                        
		)
	}
}

export default TrainingSeminarForm
