import React from 'react'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import addEducation from '../../../services/faculty/basic-info/addEducation'

class EducationForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let EducationDetails = {
            institutionSchool: "",
            degreeType: "",
            degreeCert: "",
            majorSpecialization: "",
            startDate: "",
            endDate: "",
            proof: ""
        }

        return(
            <Formik
                initialValues={EducationDetails}
                onSubmit={async (values, {resetForm}) => {
                    let alert = document.getElementById("educalert")

                    let form = document.getElementById('educForm')
                    let formData = new FormData(form)

                    let res = await addEducation(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    
                    alert.setAttribute("style", "visibility: visible");
                    $("#educalert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#educalert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/basic-info')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "educForm">
                        <h2 className='center'>Add Education Form</h2>
                        <hr/>
                        <h6>Required</h6>

                        {/* 1st Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-12">
                                <label htmlFor = "SchoolEducationalHistory[]" className = "required-label" style={{fontSize:"16px"}}> Institution </label>
                                <Field className = "form-control" type = "text" name = "institutionSchool" id ="institutionSchool" placeholder = "Input name of Institution or School" required />
                            </div>
                        </div>

                        {/* 2nd Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-2 required">
                                <label className = "control-label" htmlFor ="DegreeType" class = "required-label" style={{fontSize:"16px"}}> Degree Type </label>
                                    <Field as = "select" className = "form-control" style={{height:"2.45rem"}} name = "degreeType" id = "degreeType" required>
                                        <option value = "AA">AA</option>
                                        <option value = "AS">AS</option>
                                        <option value = "BA">BA</option>
                                        <option value = "BS">BS</option>
                                        <option value = "MA">MA</option>
                                        <option value = "MS">MS</option>
                                        <option value = "MD">MD</option>
                                        <option value = "PhD">PhD</option>
                                        <option value = "DEng">DEng</option>
                                        <option value = "DrPH">DrPH</option>
                                    </Field>
                            </div>
                            <div className = "form-group col-md-5">
                                <label htmlFor = "DegreeEducationalHistory[]" className = "required-label" style={{fontSize:"16px"}}> Degree/Certification </label>
                                <Field className = "form-control" type = "text" name = "degreeCert" id = "degreeCert" placeholder = "Input degree" required />
                            </div>

                            <div className = "form-group col-md-5">
                                <label htmlFor = "MajorEducationalHistory[]" style={{fontSize:"16px"}}> Major/Specialization </label>
                                <Field className = "form-control" type = "text" name = "majorSpecialization" id = "majorSpecialization" placeholder = "Input major" />
                            </div>
                        </div>

                        {/* 3rd Row */}
                         <div className = "row pb-3">
                                <div className = "form-group col-md-4">
                                    <label htmlFor = "StartDateEducationalHistory[]" className = "required-label" style={{fontSize:"16px"}}> Start Date </label>
                                    <Field type = "date" className = "form-control" name = "startDate" id = "startDate" required />
                                </div>
                                <div className = "form-group col-md-4">
                                    <label htmlFor = "EndDateEducationalHistory[]" style={{fontSize:"16px"}}> End Date </label>
                                    <Field type = "date" className = "form-control" name = "endDate" id = "endDate" />
                                </div>
                                <div className = "form-group col-md-4">
                                    <label htmlFor = "ProofEducationalHistory[]" style={{fontSize:"16px"}}> Proof: </label><br/>
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

export default EducationForm
