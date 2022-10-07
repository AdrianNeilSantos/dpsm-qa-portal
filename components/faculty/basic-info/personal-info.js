import Link from 'next/link'
import { MenuItem } from '@material-ui/core'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'
import NameDisplay from '../../../components/name-display'
import { parseCookies } from "../../../helpers"

import updateFaculty from '../../../services/faculty/basic-info/updateFaculty'
import addFaculty from '../../../services/admin/addFaculty'

function PersonalInfo(props) { console.log(props.hasDisabledFields);
    let FacultyDetails
    let name
    let dependents
    let res
    let positions = []
    if(props.children != null) {
        FacultyDetails = {
            firstName: props.children.firstName,
            lastName: props.children.lastName,
            middleName: props.children.middleName,
            gender: props.children.gender,
            dateOfBirth: props.children.dateOfBirth,
            placeOfBirth: props.children.placeOfBirth,
            permanentAddress: props.children.permanentAddress,
            presentAddress: props.children.presentAddress,
            mobile: props.children.mobile,
            landline: props.children.landline,
            email: props.children.email,
            upemail: props.email,
            civilStatus: props.children.civilStatus,
            religion: props.children.religion,
            emergencyContactPerson: props.children.emergencyContactPerson,
            emergencyContactNumber: props.children.emergencyContactNumber,
            suffix: props.children.suffix || '',
            faculty_dependents: props.children.faculty_dependents,
            philosophy: props.children.teachingPhilosophy
        }
        name = props.children.lastName + ', ' + props.children.firstName
        dependents = Object.keys(props.children.faculty_dependents).map(key => {
            return (
                <div className = "row pb-3">
                    <div className = "form-group col-md-4 required"> 
                        <label className = "control-label" htmlFor = "Dependent"> Name of Dependent </label>
                        <input className = "form-control" type = "text" name = "name" defaultValue = { props.children.faculty_dependents[key].name } disabled={!props.editable} required />

                    </div>
                    <div className = "form-group col-md-4 required">
                        <label className = "control-label" htmlFor = "DependentDateOfBirth"> Date of Birth </label>
                        <input className = "form-control" type = "date" name = "birthDate" defaultValue = { props.children.faculty_dependents[key].birthDate } disabled={!props.editable} required />
                    </div>

                    <div className = "form-group col-md-4 required">
                        <label className = "control-label" htmlFor = "DependentRelationship[]"> Relationship to User </label>
                        <input className = "form-control" type = "text" name = "relationship" defaultValue = { props.children.faculty_dependents[key].relationship } disabled={!props.editable} required />
                    </div>
                </div>
            );
        });
    } else {
        FacultyDetails = {
            clerk: '',
            firstName: '',
            lastName: '',
            middleName: '',
            gender: 'Male',
            dateOfBirth: '',
            placeOfBirth: '',
            permanentAddress: '',
            presentAddress: '',
            mobile: '',
            landline: '',
            email: '',
            civilStatus: 'single',
            religion: '',
            emergencyContactPerson: '',
            emergencyContactNumber: '',
            suffix: '',
            faculty_dependents: '',
            upemail: '',
            unit: '1',
            employmentPosition: '1',
            startDate: '',
            philosophy: '',
            status: 'Full-time',
            category: 'Permanent'
        }

        props.positions.forEach(key => {
            positions.push(
                <option value = {key.employmentPositionId}>{key.position}</option>    
            )
        });
    }

    return (
    <div style={{background:"var(--color-background"}}>
        <div className='card' >
            <h2 align = "center"> Personal Information </h2>
            <NameDisplay unit = {props.unit} position={props.position}>{name}</NameDisplay>
		    <Formik
                initialValues={FacultyDetails}
                onSubmit={async (values, token) => {
                    if (props.role == 5) {
                        res = await addFaculty(values, props.token)
                    } else {
                        res = await updateFaculty(values, props.token)                       
                    }

                    let alert = document.getElementById("alert")

                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        values.message = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) values.message = res.error[0].message
                        else values.message = res.message
                    }
                    
                    alert.setAttribute("style", "visibility: visible");
                    $("#alert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#alert").slideUp(500);
                    });
                    if (props.role == 5) {                    
                        Router.push('/admin/faculty')
                        if(res.success == true) {
                            window.setTimeout(function(){
                                window.location.href = "/admin";
                            }, 3000);
                        }
                    }
                    else {
                        Router.push('/faculty/basic-info') 
                    }
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form>
                        <div role="alert" id="alert">
                            {values.message}
                        </div>
                        {props.editable && <h6>Required</h6>}
                        <br />

                        {/* 1st Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-3 required">
                                    <label className = "control-label" htmlFor = "FirstName" style={{fontSize:"16px"}}> First Name </label>
                                    <Field className = "form-control" type = "text" name = "firstName" defaultValue = { FacultyDetails.firstName } disabled={!props.editable} required />
                            </div>
                            <div className = "form-group col-md-3">
                                <label className = "control-label" htmlFor = "MiddleName" style={{fontSize:"16px"}}> Middle Name </label>
                                <Field className = "form-control"  type = "text" name = "middleName" defaultValue = { FacultyDetails.middleName } disabled={!props.editable} />
                            </div>
                            <div className = "form-group col-md-3 required">
                                <label className = "control-label" htmlFor = "LastName" style={{fontSize:"16px"}}> Last Name </label>
                                <Field className = "form-control" type = "text" name = "lastName" defaultValue = { FacultyDetails.lastName } disabled={!props.editable} required />
                            </div>
                            <div className = "form-group col-md-3">
                                <label className = "control-label" htmlFor = "Suffix" style={{fontSize:"16px"}}> Suffix </label>
                                <Field className = "form-control" placeholder=" - " type = "text" name = "suffix" defaultValue = { FacultyDetails.suffix } disabled={!props.editable} />
                            </div>
                        </div>

                        {/* 2nd Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-4 required">
                                <label className = "control-label" htmlFor = "Sex" style={{fontSize:"16px"}}> Sex </label>
                                <Field as = "select" className = "form-control" style={{height:"2.45rem"}} name = "gender" defaultValue = { FacultyDetails.gender } disabled={props.hasDisabledFields} required>
                                    <option value = "Male">Male</option>
                                    <option value = "Female">Female</option>
                                </Field>
                            </div>
                            <div className = "form-group col-md-4 required">
                                <label className = "control-label" htmlFor = "DateOfBirth" style={{fontSize:"16px"}}> Date of Birth </label>
                                <Field className = "form-control" type = "date" name = "dateOfBirth" defaultValue = { FacultyDetails.dateOfBirth } disabled={props.hasDisabledFields} required />
                            </div>
                            <div className = "form-group col-md-4 required">
                                <label className = "control-label" htmlFor = "PlaceOfBirth" style={{fontSize:"16px"}}> Place of Birth </label>
                                <Field className = "form-control" type = "text" name = "placeOfBirth" defaultValue = { FacultyDetails.placeOfBirth } disabled={props.hasDisabledFields} required />
                            </div>
                        </div>

                        {/* 3rd Row */}
                        <div className = "row pb-3">
                            <div className = "form-group required">
                                <label className = "control-label" htmlFor = "PresentAddress" style={{fontSize:"16px"}}> Present Address </label>
                                <Field className = "form-control" type = "text" name = "presentAddress" defaultValue = { FacultyDetails.presentAddress } disabled={!props.editable} required />
                            </div>
                        </div>

                        {/* 4th Row */}
                        <div className = "row pb-3">
                            <div className = "form-group required">
                                <label className = "control-label" htmlFor = "PermanentAddress" style={{fontSize:"16px"}}> Permanent Address </label>
                                <Field className = "form-control" type = "text" name = "permanentAddress" defaultValue = { FacultyDetails.permanentAddress } disabled={!props.editable} required />
                            </div>
                        </div>

                        {/* 5th Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-3 required">
                                <label className = "control-label" htmlFor = "ContactNumber" style={{fontSize:"16px"}}> Mobile Number </label>
                                <Field className = "form-control" type = "tel" placeholder = "09#########" name = "mobile" pattern = "[0]{1}[9]{1}[0-9]{9}" defaultValue = { FacultyDetails.mobile } disabled={!props.editable} required />
                            </div>
                            <div className = "form-group col-md-3">
                                <label className = "control-label" htmlFor = "ContactNumber" style={{fontSize:"16px"}}> Landline Number </label>
                                <Field className = "form-control" type = "tel" placeholder = "Enter 10 Digits" name = "landline" pattern = "[0-9]{10}" defaultValue = { FacultyDetails.landline } disabled={!props.editable} />
                            </div>
                            <div className = "form-group col-md-3 required">
                                <label className = "control-label" htmlFor ="CivilStatus" style={{fontSize:"16px"}}> Civil Status </label>
                                <Field as = "select" id = "form-select" className = "form-control" style={{height:"2.45rem"}} name = "civilStatus" defaultValue = { FacultyDetails.civilStatus } disabled={!props.editable} required>
                                    <option value = "single">Single</option>
                                    <option value = "married">Married</option>
                                    <option value = "separated">Separated</option>
                                    <option value = "divorced">Divorced</option>
                                    <option value = "widowed">Widowed</option>
                                </Field>
                            </div>
                            <div className = "form-group col-md-3">
                                    <label className = "control-label" htmlFor = "Religion" style={{fontSize:"16px"}}> Religion </label>
                                    <Field className = "form-control" type = "text" name = "religion" defaultValue = { FacultyDetails.religion } disabled={!props.editable} />
                            </div>
                        </div>

                        {/* 6th Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-6 required">
                                <label className = "control-label" htmlFor = "EmailAddressAlt" style={{fontSize:"16px"}}> Personal E-mail Address </label>
                                <Field className = "form-control" type = "email" name = "email" defaultValue = { FacultyDetails.email } disabled={!props.editable} />
                            </div>
                            <div className = "form-group col-md-6">
                                <label className = "control-label" htmlFor = "UPEmail" style={{fontSize:"16px"}}> UP E-mail </label>
                                <Field className = "form-control" type = "email" name = "upemail" defaultValue = { FacultyDetails.email } disabled="true" />
                            </div>
                        </div>

                        {/* 7th Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-6 required">
                                <label className = "control-label" htmlFor = "EmergencyContact" style={{fontSize:"16px"}}> Emergency Contact </label>
                                <Field className = "form-control" type = "text" name = "emergencyContactPerson" defaultValue = { FacultyDetails.emergencyContactPerson } disabled={!props.editable} required />
                            </div>
                            <div className = "form-group col-md-6 required">
                                <label className = "control-label" htmlFor = "EmergencyContactNumber" style={{fontSize:"16px"}}> Emergency Contact Number </label>
                                <Field className = "form-control" type = "tel" name = "emergencyContactNumber" pattern = "[0]{1}[9]{1}[0-9]{9}" defaultValue = { FacultyDetails.emergencyContactNumber } disabled={!props.editable} required />
                            </div>
                        </div>

                        {/* 8th Row */}
                        <div className = "row pb-3">
                            <div className = "form-group col-md-12 required">
                                <label className = "control-label" htmlFor = "philosophy" style={{fontSize:"16px"}}> Teaching Philosophy </label>
                                <Field className = "form-control" component = "textarea" rows = {5} name = "philosophy" defaultValue = { FacultyDetails.philosophy } disabled={!props.editable} required />
                            </div>
                        </div>
                        <br/>
                        
                        { props.role==5 &&
                            <div>
                                <hr/>
                                <br/><h2>Employment Info</h2><br/>
                                {/* 1st Row */}
                                <div className = "row pb-3">
                                    <div className = "form-group col-md-4 required">
                                        <label className = "control-label" htmlFor = "EmailAddressAlt" style={{fontSize:"16px"}}> UP E-mail </label>
                                        <Field className = "form-control" type = "email" name = "upemail" defaultValue = { FacultyDetails.email } required />
                                    </div>
                                    <div className = "form-group col-md-4 required">
                                        <label className = "control-label" htmlFor ="Unit" style={{fontSize:"16px"}}> Unit </label>
                                        <Field as = "select" className = "form-control" style={{height:"2.45rem"}} name = "unit" defaultValue = { FacultyDetails.unit } required>
                                            <option value = "1">Chemistry Unit</option>
                                            <option value = "2">Mathematical and Computing Sciences Unit</option>
                                            <option value = "3">Physics and Geology Unit</option>
                                        </Field>
                                    </div>
                                    <div className = "form-group col-md-4 required">
                                        <label className = "control-label" htmlFor ="Status" style={{fontSize:"16px"}}> Status </label>
                                        <Field as = "select" className = "form-control" style={{height:"2.45rem"}} name = "status" defaultValue = { FacultyDetails.status } required>
                                            <option value = "Full-time">Full-time</option>
                                            <option value = "Part-time">Part-time</option>
                                            <option value = "Lecturer">Lecturer</option>
                                        </Field>
                                    </div>
                                </div>

                                {/* 2nd Row */}
                                <div className='row pb-3'>
                                    <div className = "form-group col-md-4 required">
                                        <label className = "control-label" htmlFor ="Category" style={{fontSize:"16px"}}> Category </label>
                                        <Field as = "select" className = "form-control" style={{height:"2.45rem"}} name = "category" defaultValue = { FacultyDetails.category } required>
                                            <option value = "Permanent">Permanent</option>
                                            <option value = "Temporary">Temporary</option>
                                        </Field>
                                    </div>
                                    <div className = "form-group col-md-4 required">
                                        <label className = "control-label" htmlFor = "EmploymentPosition" style={{fontSize:"16px"}}> Employment Position </label>
                                        <Field as = "select" className = "form-control" style={{height:"2.45rem"}} name = "employmentPosition" defaultValue = { FacultyDetails.employmentPosition } required>
                                            {positions}
                                        </Field>
                                    </div>
                                    <div className = "form-group col-md-4 required">
                                        <label className = "control-label" htmlFor = "StartDate" style={{fontSize:"16px"}}> Start Date </label>
                                        <Field className = "form-control" type = "date" name = "startDate" defaultValue = { FacultyDetails.StartDate } required /> 
                                    </div>
                                </div>
                                <br/>
                            </div>
                        }

                    { props.editable && props.role!=5 && 
                        <div className="center">
                            <button type = "submit" className = "customButton maroon" disabled = {isSubmitting}> 
                                <span className="material-icons-sharp">update</span>
                                Update 
                            </button> 
                        </div>

                    }
                    { props.role==5 && 
                        <div className="center">
                            <button type = "submit" className = "customButton maroon" disabled = {isSubmitting}> 
                                <span className="material-icons-sharp">person_add</span>
                                Add Faculty 
                            </button> 
                        </div>

                    }
                </Form>
            )}
        </Formik>
        <style jsx>{`
            .form-group.required .control-label:after{
                content: "*";
                color: #f00;
            }
            h6:before{
                content: "* ";
                color: #f00;
            }
            #alert {
                visibility: hidden;
            }
        `}</style>
        </div>  
        <br/><br/>
    </div>     
    )
}

export default PersonalInfo
