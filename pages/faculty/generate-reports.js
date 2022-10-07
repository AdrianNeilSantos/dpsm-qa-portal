import Layout from '../../components/layout'
import { Formik, Form, Field } from "formik"
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"
import generateReports from '../../services/reports/generateReports'

function GenerateReports(props) {
	let errorMessage = ""

    return (
		<div>
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag} >
            <br></br>
            <div className="header">
                <h1 align = "center"> Generate Reports</h1>
            </div>
			
            <div className="subheader">
                <p className="center"> Select one or more categories to generate an Excel spreadsheet containing all faculty information pertaining to those categories </p>
            </div>
			
			<div className = "card">
				<Formik
					initialValues={{reports: []}}
					onSubmit={async (values) => {
					try {
						if(values.reports.length > 0) {
							if (props.data.role == 3) {
								generateReports(props.token.user, values.reports, null)
								
							} else if (props.data.role == 2) {
								generateReports(props.token.user, values.reports, props.data.unitId)
							}
							values.reports = []
						}
						else {
							let alert = document.getElementById("alert")
							alert.setAttribute("style", "visibility: visible");
							errorMessage = "Please select at least one accomplishment type"
						}
					} catch (err) {
						console.error(err.response.data.errors[0].message)
						errorMessage = err.response.data.errors[0].message
						let alert = document.getElementById("alert")
						alert.setAttribute("style", "visibility: visible");
						return err
					}
					}}
				>
					{({ values, errors, touched, isSubmitting }) => (
					<Form action="" className="form-box">
						<div className="alert alert-danger" role="alert" id="alert">
							{errorMessage}
						</div>
						<div role="group" aria-labelledby="checkbox-group">
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="publicService" />
								<label className="form-check-label" for="publicService">
										&nbsp;Public Service Accomplishments
								</label>
							</div>
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="publication" />
								<label className="form-check-label" for="publication">
										&nbsp;Publications
								</label>
							</div>
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="trainingSeminar" />
								<label className="form-check-label" for="trainingSeminar">
										&nbsp;Training/Seminars
								</label>
							</div>
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="researchGrant" />
								<label className="form-check-label" for="researchGrant">
										&nbsp;Research Grants
								</label>
							</div>
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="licensureExam" />
								<label className="form-check-label" for="licensureExam">
										&nbsp;Licensure Exams
								</label>
							</div>
                            <div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="education" />
								<label className="form-check-label" for="education">
										&nbsp;Education
								</label>
							</div>
						</div>
							
						<br />

                        <div className="center">
                            <button type = "submit" className = "btn customButton blue" disabled = {isSubmitting}>
                            <span className="material-icons-sharp">get_app</span>
                                Get Reports
                            </button>
                        </div>

					</Form>
					)}
				</Formik>
			</div>
        </Layout>

		<style jsx>{`
		.d-flex{
			min-height: 100%;
			min-height: 100vh; 

			display: flex;
			align-items: center;
		}
		#alert {
		visibility: hidden;
		}
		`}</style>
		</div>
    )
  }

export async function getServerSideProps(context) { 
    const token = parseCookies(context.req)
    let data
    let personalInfo
    let approvalList
    let accompList
    let empList
    let educList
    let roleAssignmentFlag = false
    let queryList

    if (context.res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        } else {
            data = jwt.decode(token.user)
        
            let facultyId = data.facultyId
        
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
            
            const personal = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId, header)
            personalInfo = await personal.json()

            let approvalURL = process.env.API_URL + '/faculty/approval/' + facultyId
            let accompURL = process.env.API_URL + '/faculty/reports/accomplishment'
            let empURL = process.env.API_URL + '/faculty/reports/employment'
            let educURL = process.env.API_URL + '/faculty/reports/education'
            let roleAssignmentURL = process.env.API_URL + '/faculty/basic-info/unit/assignment'
            
            if(data.role == 2 || data.role == 3) {
                if(data.role == 2) {
                    approvalURL += '?unitId=' + data.unitId
                    roleAssignmentURL += '?unitId=' + data.unitId

                    accompURL += '?unitId=' + data.unitId
                    empURL += '?unitId=' + data.unitId
                    educURL += '?unitId=' + data.unitId
                } else if(data.role == 3) {
                    if(context.query.accomplishment == 1) {
                        accompURL += '?'
                        if(context.query.unitId && context.query.unitId != 0) accompURL += 'unitId=' + context.query.unitId
                    } else if(context.query.employment == 1) {
                        empURL += '?'
                        if(context.query.unitId) empURL += 'unitId=' + context.query.unitId
                    } else if(context.query.degree == 1) {
                        educURL += '?'
                        if(context.query.unitId) educURL += 'unitId=' + context.query.unitId
                    }
                }

                if(context.query.accomplishment == 1) {
                    if(context.query.startDate) accompURL += '&startDate=' + context.query.startDate
                    if(context.query.endDate) accompURL += '&endDate=' + context.query.endDate
                } else if(context.query.employment == 1) {
                    if(context.query.startDate) empURL += '&startDate=' + context.query.startDate
                    if(context.query.endDate) empURL += '&endDate=' + context.query.endDate
                } else if(context.query.degree == 1) {
                    if(context.query.startDate) educURL += '&startDate=' + context.query.startDate
                    if(context.query.endDate) educURL += '&endDate=' + context.query.endDate
                }
                
                const approval = await fetch(approvalURL, header)
                approvalList = await approval.json()
                approvalList = approvalList.result

                const accompReports = await fetch(accompURL, header)
                accompList = await accompReports.json()
                accompList = accompList.result

                const empReports = await fetch(empURL, header)
                empList = await empReports.json()
                empList = empList.result

                const educReports = await fetch(educURL, header)
                educList = await educReports.json()
                educList = educList.result

                const roleAssignments = await fetch(roleAssignmentURL, header)
                let roleAssignmentList = await roleAssignments.json()
                roleAssignmentList = roleAssignmentList.result

                if(data.role == 2) {
                    if(roleAssignmentList && roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true
                } else if(data.role == 3 && roleAssignmentList) {
                    roleAssignmentFlag = true 
                }
            } else if(data.role == 1) { 
                return {
                    redirect: {
                        destination: '/faculty/basic-info',
                        permanent: true,
                    },
                }
            }
        }
    } 

    return { 
        props: {
            token: token && token,
            data: data,
            approvalList: approvalList
        }
    }
}
  
 export default GenerateReports