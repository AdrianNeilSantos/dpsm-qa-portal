import React from 'react'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addLicensure from '../../../services/faculty/accomplishments/addLicensure'

class LicensureExamForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			duplicateForms: []
		}
	}
	
	render(){
        let LicensureDetails = {
            examName: "",
            examDate: "",
            licenseNumber: "",
            rank: "",
            proof: ""
        }
		return(
            <Formik
                initialValues={LicensureDetails}
                onSubmit={async (values, {resetForm}) => {
                    let form = document.getElementById('licenseForm')
                    let formData = new FormData(form)

                    let alert = document.getElementById("licensureexamalert")
                    let res = await addLicensure(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    $("#licensureexamalert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#licensureexamalert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/accomplishment')                    
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "licenseForm">
                        <h2 className="center">Add Licensure Exam Form</h2>
                        <hr />
			            <h6>Required</h6>
                        <div className = "row pb-3">
                            <div className = "form-group col-md-6">
                                <label htmlFor = "LicensureExam[]" className = "required-label" style={{fontSize:"16px"}}> Licensure Exam </label>
                                <Field className = "form-control" type = "text" name = "examName" placeholder = "Input licensure exam" required />
                            </div>
                            <div className = "form-group col-md-6">
                                <label htmlFor = "LicenseNumber[]" className = "required-label" style={{fontSize:"16px"}}> License Number </label>
                                <Field className = "form-control" type = "text" name = "licenseNumber" placeholder = "Input licensure number" required />
                            </div>
                        </div>
                        <div className="row pb-3">
                            <div className = "form-group col-md-4">
                                <label htmlFor = "LicensureExamDate[]" className = "required-label" style={{fontSize:"16px"}}> Date </label>
                                <Field type = "date" className = "form-control" name = "examDate" required />
                            </div>
                            <div className = "form-group col-md-4">
                                <label htmlFor = "LicensureExamRank[]" style={{fontSize:"16px"}}> Rank </label>
                                <Field className = "form-control" type = "text" name = "rank" placeholder = "Input rank" />
                            </div>

                            <div className = "form-group col-md-4">
                                <label htmlFor = "LicensureExamProof[]" style={{fontSize:"16px"}}> Proof </label> <br/>
                                <Field type = "file" className = "form-control-file" name = "proof" />
                            </div>
                        </div>
                        <br />
                        <div className="center">
                            <button
                                type = "submit"
                                className = "btn customButton maroon"
                                disabled = {isSubmitting}
                            >
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

export default LicensureExamForm
