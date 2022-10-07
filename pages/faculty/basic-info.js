import Layout from '../../components/layout'
import PersonalInfo from '../../components/faculty/basic-info/personal-info'
import Education from '../../components/faculty/basic-info/education'
import EmploymentHistory from '../../components/faculty/basic-info/employment-history'
import WorkExperience from '../../components/faculty/basic-info/work-experience'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"

function BasicInfo(props) { 
    let educRejected = false
    if(props.education != null) {
        props.education.every((e) => {
            if(e.status == 'Rejected') {
                educRejected = true 
                return false
            }
            return true
        })    
    }
    
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag} >
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active nav-top" id="personal-info-tab" data-bs-toggle="tab" data-bs-target="#personal-info" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">
                    <span className="material-icons-sharp">contact_page</span>
                    <h3>Personal Information</h3>
                </a>
                <a className="nav-item nav-link nav-top" id="educ-tab" data-bs-toggle="tab" data-bs-target="#educ" href="#educ" role="tab" aria-controls="educ" aria-selected="false">
                    <span className="material-icons-sharp">school</span>
                    <h3>Education</h3> &nbsp;
                    {educRejected && <span className="badge badge-danger">!</span>}
                </a>
                <a className="nav-item nav-link nav-top" id="work-exp-tab" data-bs-toggle="tab" data-bs-target="#work-exp" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">
                    <span className="material-icons-sharp">work_history</span>
                    <h3>Work Experience</h3>
                </a>
            </div>
            </nav>
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                <PersonalInfo token={props.token.user} unit={props.unit} position={props.position} role={props.data.role} editable={true} email={props.data.upemail} hasDisabledFields={true}>{props.personalInfo}</PersonalInfo>
            </div>
            <div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab">
                <Education name={props.name} token={props.token.user} unit={props.unit} position={props.position} role={props.data.role} editable={true}>{props.education}</Education>
            </div>
           <div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab">
                <WorkExperience name={props.name} token={props.token.user} unit={props.unit} position={props.position} employment={props.employment} role={props.data.role} editable={true}>{props.workExperience}</WorkExperience>
            </div>
            </div>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)

    let personalInfo
    let name
    let employment
    let education
    let workExperience
    let data
    let unit
    let position
    let approvalList
    let roleAssignmentFlag = false

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
            
            let url = process.env.API_URL + '/faculty/basic-info/' + facultyId;
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
        
            const personal = await fetch(url, header)
            personalInfo = await personal.json()
            name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName

            const employ = await fetch(url + '/employment', header)
            employment = await employ.json()
            
            unit = employment.result.faculty_unit.unit.unit
            position = employment.result.faculty_employment_infos[0].faculty_employment_position.position
            
            const educ = await fetch(url + '/education', header)
            education = await educ.json()
        
            const work = await fetch(url + '/work-exp', header)
            workExperience = await work.json()

            let approvalURL = process.env.API_URL + '/faculty/approval/' + facultyId
            let roleAssignmentURL = process.env.API_URL + '/faculty/basic-info/unit/assignment'
            if(data.role == 2 || data.role == 3) {
                if(data.role == 2) {
                    approvalURL += '?unitId=' + data.unitId
                    roleAssignmentURL += '?unitId=' + data.unitId
                }

                const approval = await fetch(approvalURL, header)
                approvalList = await approval.json()
                approvalList = approvalList.result

                const roleAssignments = await fetch(roleAssignmentURL, header)
                let roleAssignmentList = await roleAssignments.json()
                roleAssignmentList = roleAssignmentList.result
                if(data.role == 2) {
                    if(roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true
                } else if(data.role == 3 && roleAssignmentList) {
                    roleAssignmentFlag = true 
                }
            } else if(data.role == 1) {
				approvalList = null
			}
        }
    } 

    return { 
        props: {
            token: token && token,
            data: data,
            name,
            unit,
            position,
            personalInfo: personalInfo.result,
            education: education.result,
            workExperience: workExperience.result,
            employment: employment.result,
            approvalList: approvalList,
            roleAssignmentFlag
        }
    }
}

export default BasicInfo
