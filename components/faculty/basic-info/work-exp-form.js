import React from 'react';
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addWorkExp from '../../../services/faculty/basic-info/addWorkExp'

class WorkExpForm extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let WorkDetails = {
			employerName: "",
			position: "",
			startDate: "",
			endDate: "",
			description: ""
		}
		return(
			<Formik
				initialValues={WorkDetails}
				onSubmit={async (values, {resetForm}) => {
					let alert = document.getElementById("workexpalert")
					let res = await addWorkExp(values, this.props.token)
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
					Router.push('/faculty/basic-info', '/faculty/basic-info')
				}}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form>
						<h2 className="center">Add Work Experience Form</h2>
						<hr />
						<h6>Required</h6>
						{/* 1st Row */}
						<div className = "row pb-3">
							<div className = "form-group col-md-6">
								<label htmlFor = "EmployerWorkExperience[]" className = "required-label" style={{fontSize:"16px"}}> Employer </label>
								<Field className = "form-control" type = "text" name = "employerName" placeholder = "Input name of employer" required />
							</div>
							<div className = "form-group col-md-6">
								<label htmlFor = "PositionWorkExperience[]" className = "required-label" style={{fontSize:"16px"}}> Title/Position </label>
								<Field className = "form-control" type = "text" name = "position" placeholder = "Input position" required />
							</div>
						</div>

						{/* 2nd Row */}
						<div className="row pb-3">
							<div className = "form-group col-md-12">
								<label htmlFor = "DescriptionWorkExperience[]" style={{fontSize:"16px"}}> Description </label>
								<Field className = "form-control" type = "text" name = "description" placeholder = "Add Description" />
							</div>
						</div>

						{/* 3rd Row */}
						<div className = "row pb-3">
							<div className = "form-group col-md-6">
								<label htmlFor = "StartDateWorkExperience[]" className = "required-label" style={{fontSize:"16px"}}> Start Date </label>
								<Field type = "date" className = "form-control" name = "startDate" required />
							</div>
							<div className = "form-group col-md-6">
								<label htmlFor = "EndDateWorkExperience[]" style={{fontSize:"16px"}}> End Date </label>
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

export default WorkExpForm;
