import Link from 'next/link'
import { MenuItem } from '@material-ui/core'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'
import PersonalInfoDependents from './personal-info-dependents'
import NameDisplay from '../../../components/name-display'
import { parseCookies } from "../../../helpers"

import updateFaculty from '../../../services/faculty/basic-info/updateFaculty'
import addFaculty from '../../../services/admin/addFaculty'

function PersonalInfo(props) {
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
            civilStatus: props.children.civilStatus,
            religion: props.children.religion,
            emergencyContactPerson: props.children.emergencyContactPerson,
            emergencyContactNumber: props.children.emergencyContactNumber,
            suffix: props.children.suffix,
            faculty_dependents: props.children.faculty_dependents,
            philosophy: props.children.teachingPhilosophy
        }
        name = props.children.lastName + ', ' + props.children.firstName
        dependents = Object.keys(props.children.faculty_dependents).map(key => {
            return (
                <div className = "form-row">
                    <div className = "form-group col-md-4 required"> 
                        <label className = "control-label" htmlFor = "Dependent"> Name of Dependent </label>
                        <input className = "form-control" type = "text" name = "name" defaultValue = { props.children.faculty_dependents[key].name } disabled={!props.facultyFlag && !props.clerkFlag} required />
                    </div>
                    <div className = "form-group col-md-4 required">
                        <label className = "control-label" htmlFor = "DependentDateOfBirth"> Date of Birth </label>
                        <input className = "form-control" type = "date" name = "birthDate" defaultValue = { props.children.faculty_dependents[key].birthDate } disabled={!props.facultyFlag && !props.clerkFlag} required />
                    </div>
                    <div className = "form-group col-md-4 required">
                        <label className = "control-label" htmlFor = "DependentRelationship[]"> Relationship to User </label>
                        <input className = "form-control" type = "text" name = "relationship" defaultValue = { props.children.faculty_dependents[key].relationship } disabled={!props.facultyFlag && !props.clerkFlag} required />
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
            philosophy: ''
        }

        props.positions.forEach(key => {
            positions.push(
                <option value = {key.employmentPositionId}>{key.position}</option>    
            )
        });
    }

    return (
        <div>
        <h2 align = "center"> Personal Information </h2>
        <NameDisplay unit = {props.unit} position={props.position} employmentType={props.employmentType}>{name}</NameDisplay>
		<Formik
            initialValues={FacultyDetails}
            onSubmit={async (values, token) => {
                if (props.clerkFlag) {
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
                if (props.clerkFlag) {                    
                    Router.push('/admin/faculty')
                    if(res.success == true) {
                        window.setTimeout(function(){
                            window.location.href = "/admin";
                        }, 5000);
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
                    {props.facultyFlag && <h6>Required</h6>}
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-3 required">
                            <label className = "control-label" htmlFor = "FirstName"> First Name </label>
                            <Field className = "form-control" type = "text" name = "firstName" defaultValue = { FacultyDetails.firstName } disabled={!props.clerkFlag} required />
                        </div>
                        <div className = "form-group col-md-3">
                            <label htmlFor = "MiddleName"> Middle Name </label>
                            <Field className = "form-control" type = "text" name = "middleName" defaultValue = { FacultyDetails.middleName } disabled={!props.facultyFlag && !props.clerkFlag} />
                        </div>
                        <div className = "form-group col-md-3 required">
                            <label className = "control-label" htmlFor = "LastName"> Last Name </label>
                            <Field className = "form-control" type = "text" name = "lastName" defaultValue = { FacultyDetails.lastName } disabled={!props.facultyFlag && !props.clerkFlag} required />
                        </div>
                        <div className = "form-group col-md-3">
                            <label className = "control-label" htmlFor = "Suffix"> Suffix </label>
                            <Field className = "form-control" type = "text" name = "suffix" defaultValue = { FacultyDetails.suffix } disabled={!props.facultyFlag && !props.clerkFlag} />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "Sex"> Sex (at birth) </label>
                            <Field as = "select" className = "form-control" name = "gender" defaultValue = { FacultyDetails.gender } disabled={!props.clerkFlag} required>
                                <option value = "Male">Male</option>
                                <option value = "Female">Female</option>
                            </Field>
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "DateOfBirth"> Date of Birth </label>
                            <Field className = "form-control" type = "date" name = "dateOfBirth" defaultValue = { FacultyDetails.dateOfBirth } disabled={!props.clerkFlag} required />
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "PlaceOfBirth"> Place of Birth </label>
                            <Field className = "form-control" type = "text" name = "placeOfBirth" defaultValue = { FacultyDetails.placeOfBirth } disabled={!props.clerkFlag} required />
                        </div>
                    </div>
                    <br />
                    <div className = "form-group required">
                        <label className = "control-label" htmlFor = "PresentAddress"> Present Address </label>
                        <Field className = "form-control" type = "text" name = "presentAddress" defaultValue = { FacultyDetails.presentAddress } disabled={!props.facultyFlag && !props.clerkFlag} required />
                    </div>
                    <div className = "form-group required">
                        <label className = "control-label" htmlFor = "PermanentAddress"> Permanent Address </label>
                        <Field className = "form-control" type = "text" name = "permanentAddress" defaultValue = { FacultyDetails.permanentAddress } disabled={!props.facultyFlag && !props.clerkFlag} required />
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor ="CivilStatus"> Civil Status </label>
                            <Field as = "select" className = "form-control" name = "civilStatus" defaultValue = { FacultyDetails.civilStatus } disabled={!props.facultyFlag && !props.clerkFlag} required>
                                <option value = "single">Single</option>
                                <option value = "married">Married</option>
                                <option value = "separated">Separated (Legally)</option>
                                <option value = "divorced">Divorced</option>
                                <option value = "widowed">Widowed</option>
                            </Field>
                        </div>
                        <div className = "form-group col-md-6">
                                <label htmlFor = "Religion"> Religion </label>
                                <Field className = "form-control" type = "text" name = "religion" defaultValue = { FacultyDetails.religion } disabled={!props.facultyFlag && !props.clerkFlag} />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-4">
                            <label className = "control-label" htmlFor = "ContactNumber"> Contact Number (Landline) </label>
                            <Field className = "form-control" type = "tel" name = "landline" pattern = "[0-9]{8}" defaultValue = { FacultyDetails.landline } disabled={!props.facultyFlag && !props.clerkFlag} />
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "ContactNumber"> Contact Number (Mobile) </label>
                            <Field className = "form-control" type = "tel" name = "mobile" pattern = "[0]{1}[9]{1}[0-9]{9}" defaultValue = { FacultyDetails.mobile } disabled={!props.facultyFlag && !props.clerkFlag} required />
                        </div>
                        <div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "EmailAddressAlt"> Personal E-mail Address </label>
                            <Field className = "form-control" type = "email" name = "email" defaultValue = { FacultyDetails.email } disabled={!props.facultyFlag && !props.clerkFlag} />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor = "EmergencyContact"> Emergency Contact </label>
                            <Field className = "form-control" type = "text" name = "emergencyContactPerson" defaultValue = { FacultyDetails.emergencyContactPerson } disabled={!props.facultyFlag && !props.clerkFlag} required />
                        </div>
                        <div className = "form-group col-md-6 required">
                            <label className = "control-label" htmlFor = "EmergencyContactNumber"> Emergency Contact Number </label>
                            <Field className = "form-control" type = "tel" name = "emergencyContactNumber" pattern = "[0]{1}[9]{1}[0-9]{9}" defaultValue = { FacultyDetails.emergencyContactNumber } disabled={!props.facultyFlag && !props.clerkFlag} required />
                        </div>
                    </div>
                    <div className = "form-row">
                        <div className = "form-group col-md-12 required">
                            <label className = "control-label" htmlFor = "philosophy"> Teaching Philosophy </label>
                            <Field className = "form-control" component = "textarea" rows = {5} name = "philosophy" defaultValue = { FacultyDetails.philosophy } disabled={!props.facultyFlag && !props.clerkFlag} required />
                        </div>
                    </div>
                    {/*<h5 align = "center"> Dependents </h5>*/}
                    {/*{dependents}*/}
                    <br />
                    
                    { props.clerkFlag &&
                        <div>
                            <hr/>
                            <h5>Employment Info</h5>
                            <div className = "form-row">
                                <div className = "form-group col-md-3 required">
                                    <label className = "control-label" htmlFor = "EmailAddressAlt"> UP E-mail </label>
                                    <Field className = "form-control" type = "email" name = "upemail" defaultValue = { FacultyDetails.email } required />
                                </div>
                                <div className = "form-group col-md-3 required">
                                    <label className = "control-label" htmlFor ="Unit"> Unit </label>
                                    <Field as = "select" className = "form-control" name = "unit" defaultValue = { FacultyDetails.unit } required>
                                        <option value = "1">Chemistry Unit</option>
                                        <option value = "2">Mathematical and Computing Sciences Unit</option>
                                        <option value = "3">Physics and Geology Unit</option>
                                    </Field>
                                </div>
                                <div className = "form-group col-md-3 required">
                                    <label className = "control-label" htmlFor = "EmploymentPosition"> Employment Position </label>
                                    <Field as = "select" className = "form-control" name = "employmentPosition" defaultValue = { FacultyDetails.employmentPosition } required>
                                        {positions}
                                    </Field>
                                </div>
                                <div className = "form-group col-md-3 required">
                                    <label className = "control-label" htmlFor = "StartDate"> Start Date </label>
                                    <Field className = "form-control" type = "date" name = "startDate" defaultValue = { FacultyDetails.StartDate } required />
                                </div>
                            </div>
                        </div>
                    }

                    { props.facultyFlag && <button type = "submit" className = "btn btn-primary" disabled = {isSubmitting}> Update </button> }
                    { props.clerkFlag && <button type = "submit" className = "btn btn-primary" disabled = {isSubmitting}> Add Faculty </button> }
                    {/*{ props.facultyFlag && <PersonalInfoDependents /> }*/}
                    <br />
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
    )
}

export default PersonalInfo
