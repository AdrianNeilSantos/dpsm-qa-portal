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
						<hr />
						<br />
						<div className = "form-row">
							<div className = "form-group col-md-3">
								<label htmlFor = "EmployerWorkExperience[]"> Employer </label>
								<Field className = "form-control" type = "text" name = "employerName" placeholder = "Input name of employer" />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "PositionWorkExperience[]"> Title/Position </label>
								<Field className = "form-control" type = "text" name = "position" placeholder = "Input position" />
							</div>
							<div className = "form-group col-md-6">
								<label htmlFor = "DescriptionWorkExperience[]"> Description </label>
								<Field className = "form-control" type = "text" name = "description" placeholder = "Add Description" />
							</div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-3">
								<label htmlFor = "StartDateWorkExperience[]"> Start Date </label>
								<Field type = "date" className = "form-control" name = "startDate" />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "EndDateWorkExperience[]"> End Date </label>
								<Field type = "date" className = "form-control" name = "endDate" />
							</div>
						</div>
						<br />
						<button
							type = "submit"
							className = "btn btn-primary col-md-12"
							disabled = {isSubmitting}
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		)
	}

}

export default WorkExpForm;
