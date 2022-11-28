import React from 'react'
import ResearchGrantFormAuthor from './research-grant-form-author'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addResearch from '../../../services/faculty/accomplishments/addResearch'

class ResearchGrantForm extends React.Component{

	constructor(props){
		super(props)
	}
	
	render(){
		let ResearchDetails = {
			researchName: "",
			granter: "",
			amount: "",
			projectedStart: "",
			projectedEnd: "",
			actualStart: "",
			actualEnd: "",
			researchProgress: "",
			nonFacultyResearchers: ""
		}
		return(
			<Formik
				initialValues={ResearchDetails}
                onSubmit={async (values, {resetForm}) => {
                	let form = document.getElementById('resForm')
                	let formData = new FormData(form)

                	let alert = document.getElementById("researchalert")
					let res = await addResearch(formData, this.props.token)
					
					if(res.success == true) { 
						alert.className ="alert alert-success"
						alert.style = "visibility: visible"
						alert.innerHTML = res.message
					} else {
						alert.className = "alert alert-danger"
						if(res.error) values.message = res.error[0].message
						else values.message = res.message
					}
					
					$("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
						$("#publicationalert").slideUp(500);
					});

                	resetForm()
                	Router.push('/faculty/accomplishments/research-grant')
                }}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form id = "resForm">
						<h2 className="center">Add Research Grant Form</h2>
						<hr />
						<h6>Required</h6>
						{/* 1st Row */}
						<div className = "row pb-3">
							<div className = "form-group col-md-12">
								<label htmlFor = "Research[]" className = "required-label" style={{fontSize:"16px"}}> Research Project </label>
								<Field className = "form-control" type = "text" name = "researchName" placeholder = "Input research name" required />
							</div>
						</div>

						{/* 2nd Row */}
						<div className = "row pb-3">
							<div className = "form-group col-md-4"> 
								<label htmlFor = "ResearchSponsor[]" className = "required-label" style={{fontSize:"16px"}}> Sponsor </label>
								<Field className = "form-control" type = "text" name = "granter" placeholder = "Input sponsor" required />
							</div>
							<div className = "form-group col-md-4"> 
								<label htmlFor = "ResearchAmount[]" className = "required-label" style={{fontSize:"16px"}}> Amount </label>
								<Field className = "form-control" type = "text" name = "amount" placeholder = "Input amount" required />
							</div>
							<div className = "form-group col-md-4">
	                            <label htmlFor = "ResearchProof[]" style={{fontSize:"16px"}}> Proof </label><br/>
	                            <Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
	                       	</div>
						</div>

						{/* 3rd Row */}
						<div className="row pb-3">
							<div className="form-group col-md-8">
								<ResearchGrantFormAuthor faculty = {this.props.faculty}/>
							</div>
							<div className = "form-group col-md-4"> 
								<label htmlFor = "ResearchProgress[]" className = "required-label" style={{fontSize:"16px"}}> Research Progress </label>
								<Field as = "select" className = "form-control" style={{height: "2.45rem"}} name = "researchProgress" required>
	                                <option value = "Ongoing">Ongoing</option>
	                                <option value = "Completed">Completed</option>
	                            </Field>
							</div>
						</div>

						{/* 4th Row */}
						<div className = "row pb-3">
							<div className = "form-group col-md-12">
								<label htmlFor = "ResearchAuthorNonDPSM[]" style={{fontSize:"16px"}}> Non-DPSM Researchers </label>
								<Field className = "form-control" type = "text" name = "nonFacultyResearchers" placeholder = "Input all authors outside DPSM (separate names with commas)" />
							</div>
						</div>

						{/* 5th Row  */}
						<div className = "row pb-3">
							<div className = "form-group col-md-3">
								<label htmlFor = "ResearchProjectedStartDate[]" className = "required-label" style={{fontSize:"16px"}}> Projected Start </label>
								<Field type = "date" className = "form-control" name = "projectedStart" required />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "ResearchProjectedEndDate[]" className = "required-label" style={{fontSize:"16px"}}> Projected End </label>
								<Field type = "date" className = "form-control" name = "projectedEnd" required />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "ResearchStartDate[]" className = "required-label" style={{fontSize:"16px"}}> Actual Start </label>
								<Field type = "date" className = "form-control" name = "actualStart" required />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "ResearchEndDate[]" style={{fontSize:"16px"}}> Actual End </label>
								<Field type = "date" className = "form-control" name = "actualEnd" />
							</div>
						</div>
						<br/>
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

export default ResearchGrantForm
