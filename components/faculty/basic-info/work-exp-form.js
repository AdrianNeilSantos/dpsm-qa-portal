import React from 'react';
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addWorkExp from '../../../services/faculty/basic-info/addWorkExp'

class WorkExpForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			duplicateForms: []
		}
	}

	clone(){
		this.state.duplicateForms.push(<div><hr /><div className = "form-row">
				<div className = "form-group col-md-3">
					<label htmlFor = "EmployerWorkExperience[]"> Employer </label>
					<input className = "form-control" type = "text" name = "EmployerWorkExperience[]" placeholder = "Input name of employer" />
				</div>
				<div className = "form-group col-md-3">
					<label htmlFor = "PositionWorkExperience[]"> Title/Position </label>
					<input className = "form-control" type = "text" name = "PositionWorkExperience[]" placeholder = "Input position" />
				</div>
				<div className = "form-group col-md-6">
					<label htmlFor = "DescriptionWorkExperience[]"> Description </label>
					<input className = "form-control" type = "text" name = "DescriptionWorkExperience[]" placeholder = "Add Description" />
				</div>
				
			</div>
			<div className = "form-row">
				<div className = "form-group col-md-3">
					<label htmlFor = "StartDateWorkExperience[]"> Start Date </label>
					<input type = "date" className = "form-control" name = "StartDateWorkExperience[]" />
				</div>
				<div className = "form-group col-md-3">
					<label htmlFor = "EndDateWorkExperience[]"> End Date </label>
					<input type = "date" className = "form-control" name = "EndDateWorkExperience[]" />
				</div>
			</div>
				<style jsx>{`
			hr{
				border: 1px solid black;
			}
		`}</style>
			</div>)
		this.setState({
			
		})
	}
	remove(){
		this.state.duplicateForms.pop()
		this.setState({
			
		})
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
						<div className = "form-row">
							<div className = "col-auto">
								<button type = "button" className = "btn btn-primary" id = "AddWorkExperience" onClick = {() => this.clone()}> Add Work Experience </button>
							</div>
							<div className = "col-auto">
								<button type = "button" className = "btn btn-danger" id = "RemoveWorkExperience" onClick = {() => this.remove()}> Remove a Row </button>
							</div>
						</div>
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
						<div id = "WorkExperience">
							{this.state.duplicateForms}
						</div>
						<br />
						<button
							type = "submit"
							className = "btn btn-primary"
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
