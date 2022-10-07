import React from 'react'
import PublicationFormAuthor from './publication-form-author'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addPublication from '../../../services/faculty/accomplishments/addPublication'

class PublicationForm extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		let PublicationDetails = {
			title: "",
			citation: "",
			url: "",
			publicationDate: "",
			nonFacultyAuthors: ""
		}
		return(
			<Formik
				initialValues={PublicationDetails}
                onSubmit={async (values, {resetForm}) => {
                	let form = document.getElementById('pubForm')
                	let formData = new FormData(form)

					let alert = document.getElementById("publicationalert")
					let res = await addPublication(formData, this.props.token)
					
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
                	Router.push('/faculty/accomplishment')
                }}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form id = "pubForm">
                    	<h2 className='center'> Add Publication Form</h2>
                    	<hr />
						<h6>Required</h6>

						{/* 1st Row */}
						<div className = "row pb-3">
							<div className = "form-group col-md-6">
								<label htmlFor = "Publication[]" className = "required-label" style={{fontSize:"16px"}}> Publication </label>
								<Field className = "form-control" type = "text" name = "title" placeholder = "Input publication name/title" required />
							</div>
							<div className = "form-group col-md-6">
								<label htmlFor = "PublicationCitation[]" className = "required-label" style={{fontSize:"16px"}}> Citation </label>
								<Field className = "form-control" type = "text" name = "citation" placeholder = "Input full citation for publication" required />
							</div>
						</div>

						{/* 2nd Row */}
						<div className = "row pb-3">
							<PublicationFormAuthor faculty = {this.props.faculty} />
						</div>

						{/* 3rd Row */}
						<div className = "row pb-3">
							<div className = "form-group col-md-12">
								<label htmlFor = "PublicationAuthorNonDPSM[]" style={{fontSize:"16px"}}> Non-DPSM Co-Authors </label>
								<Field className = "form-control" type = "text" name = "nonFacultyAuthors" placeholder = "Input all authors outside DPSM (separate names with commas)" />
							</div>
						</div>

						{/* 4th Row */}
						<div className = "row pb-3">
							<div className = "form-group col-md-5"> 
								<label htmlFor = "PublicationURL[]" style={{fontSize:"16px"}}> URL </label>
								<Field className = "form-control" type = "text" name = "url" placeholder = "Input publication URL" />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "PublishDate[]" className = "required-label" style={{fontSize:"16px"}}> Date Published </label>
								<Field type = "date" className = "form-control" name = "publicationDate" required />
							</div>
							<div className = "form-group col-md-3">
	                            <label htmlFor = "PublicationProof[]" style={{fontSize:"16px"}}> Proof </label>
	                            <Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
	                        </div>
						</div>

						<br/>
						<div className="center">
							<button type = "submit" className = "btn customButton maroon" disabled = {isSubmitting}>
								<span className="material-icons-sharp">add</span> Submit
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

export default PublicationForm
