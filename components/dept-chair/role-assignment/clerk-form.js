import React from 'react'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import addClerk from '../../../services/faculty/assignments/addClerk'

class ClerkForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let ClerkDetails = {
            name: "",
            upemail: ""
        }

        return(
            <Formik
                initialValues={ClerkDetails}
                onSubmit={async (values, {resetForm}) => {
                    let alert = document.getElementById("clerkalert")

                    let form = document.getElementById('clerkForm')
                    let formData = new FormData(form)

                    let res = await addClerk(formData, this.props.token)
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
                    $("#clerkalert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#clerkalert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/role-assignment')
                }}
            >

                {({ values, errors, touched, isSubmitting }) => (
                    <div className='card'>
                        {/* Form: Add Admin Clerk Form */}
                        <Form id = "clerkForm">
                            <h2 className="center"> Add Admin Clerk Form </h2>
                            <hr />
                            <h6>Required</h6>
                            <div className = "row pb-3">
                                {/* Field: Name */}
                                <div className="col-md-6">
                                    <div className = "form-group">
                                        <label htmlFor = "ClerkName[]" className = "required-label" style={{fontSize:"16px"}}> Name </label>
                                        <input className = "form-control" type = "text" name = "name" placeholder = "Input name" required />
                                    </div>
                                </div>
                                {/* End of Name */}
                                <br />
                                {/* Field: UP Mail Address */}
                                <div className="col-md-6">
                                    <div className = "form-group">
                                        <label htmlFor = "ClerkEmail[]" className = "required-label" style={{fontSize:"16px"}}> UP Email Address </label>
                                        <input className = "form-control" type = "email" name = "upemail" placeholder = "Input UP Email" required />
                                    </div>
                                </div>
                                {/* End of UP Mail */}
                            </div>
                            <br/>
                            {/* Add Clerk Button */}
                            <div className = "row pb-3">
                                <button type = "submit" className = "btn customButton green" style={{margin:"auto"}} disabled = {isSubmitting}>
                                    <span className="material-icons-sharp">person_add</span> Add Clerk
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
                                }`
                            }</style>
                        </Form>
                    </div>
                )}
                
            </Formik>
        )
    }
}

export default ClerkForm
