import React from 'react';
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addEmployment from '../../../services/faculty/basic-info/addEmployment'

class EmploymentForm extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let WorkDetails = {
			employmentPositionId: "",
			startDate: "",
			endDate: ""
		}
        let positions = []

        if(this.props.positionsList) {
            this.props.positionsList.forEach(key => {
                positions.push(
                    <option value = {key.employmentPositionId}>{key.position}</option>    
                )
            });
        }

		return(
			<Formik
				initialValues={WorkDetails}
				onSubmit={async (values, {resetForm}) => {
					let alert = document.getElementById("workexpalert")
					let res = await addEmployment(values, this.props.token, this.props.facultyId)
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
					
					resetForm()
					Router.push('/admin/' + this.props.facultyId, '/admin/' + this.props.facultyId)
				}}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form>
                        <hr />
                        <br />
					<h6>Required</h6>
                        <div className = "form-row">
                            <div className = "form-group col-md-3">
                                <label htmlFor = "Position[]" className = "required-label"> Position </label>
                                <Field as = "select" className = "form-control" name = "employmentPositionId" id = "employmentPositionId" required>
                                    <option value="0" key = "0">-- SELECT POSITION --</option>
                                    {positions}
                                </Field>
                            </div>
							<div className = "form-group col-md-3">
                                <label htmlFor = "Status[]" className = "required-label"> Status </label>
                                <Field as = "select" className = "form-control" name = "status" id = "status" required>
                                    <option value="0">-- SELECT STATUS --</option>
                                    <option value="Full-time">Full-time</option>
									<option value="Part-time">Part-time</option>
									<option value="Lecturer">Lecturer</option>
                                </Field>
                            </div>
							<div className = "form-group col-md-3">
                                <label htmlFor = "Category[]" className = "required-label"> Category </label>
                                <Field as = "select" className = "form-control" name = "category" id = "category" required>
                                    <option value="0">-- SELECT CATEGORY --</option>
									<option value="Permanent">Permanent</option>
									<option value="Temporary">Temporary</option>
                                </Field>
                            </div>
                            <div className = "form-group col-md-3">
                                <label htmlFor = "StartDateEmployment[]"> Start Date *</label>
                                <Field type = "date" className = "form-control" name = "startDate" required />
                            </div>
                            <div className = "form-group col-md-3">
                                <label htmlFor = "EndDateEmployment[]"> End Date </label>
                                <Field type = "date" className = "form-control" name = "endDate" />
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

export default EmploymentForm;
