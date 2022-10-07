import Layout from '../../components/layout'
import { Formik, Form, Field } from "formik"
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"
import generateReports from '../../services/reports/generateReports'

function GenerateReports(props) {
	let errorMessage = ""

    return (
		<div>
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
			<br></br>
			<div className="header">
				<h1 className="center">Generate Reports</h1>
			</div>

			<div className="subheader">
				<p className="center">Select one or more categories to generate an Excel spreadsheet containing all faculty information pertaining to the selected categories.</p>
			</div>

			<div className = "card">
				<Formik
					initialValues={{reports: []}}
					onSubmit={async (values) => {
					try {
						if(values.reports.length > 0) {
							generateReports(props.token.user, values.reports, null)
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
								<label className="form-check-label" htmlFor="publicService">
										&nbsp;Public Service Accomplishments
								</label>
							</div>
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="publication" />
								<label className="form-check-label" htmlFor="publication">
										&nbsp;Publications
								</label>
							</div>
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="trainingSeminar" />
								<label className="form-check-label" htmlFor="trainingSeminar">
										&nbsp;Training/Seminars
								</label>
							</div>
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="researchGrant" />
								<label className="form-check-label" htmlFor="researchGrant">
										&nbsp;Research Grants
								</label>
							</div>
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="licensureExam" />
								<label className="form-check-label" htmlFor="licensureExam">
										&nbsp;Licensure Exams
								</label>
							</div>
							<div className = "form-check">
								<Field className="form-check-input" type="checkbox" name="reports" value="education" />
								<label className="form-check-label" htmlFor="education">
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
						{/*<Link href="/faculty"><input type="submit" className = "btn btn-primary" value="Login"></input></Link>*/}
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

    if (context.res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        }
        else {
            data = jwt.decode(token.user)
        }
    } 

    return { 
        props: {
            token: token && token,
            data: data
        }
    }
}
  
 export default GenerateReports