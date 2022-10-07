import Layout from '../../../components/layout'
import PersonalInfo from '../../../components/faculty/basic-info/personal-info'
import Education from '../../../components/faculty/basic-info/education'
import WorkExperience from '../../../components/faculty/basic-info/work-experience'
import Publication from '../../../components/faculty/accomplishments/publication'
import PublicServiceAccomplishment from '../../../components/faculty/accomplishments/public-service-accomplishment'
import LicensureExam from '../../../components/faculty/accomplishments/licensure-exam'
import TrainingSeminar from '../../../components/faculty/accomplishments/training-seminar'
import ResearchGrant from '../../../components/faculty/accomplishments/research-grant'
import FacultyLoader from '../../../components/faculty/faculty-load/faculty-load-table'

import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../../helpers"

function ViewFaculty(props) {
    if(props.role == 1) {
        return (
            <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
                <nav>
                <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-main" role="tablist">
                    <a className="nav-item nav-link activ nav-top" id="basic-info-tab" data-bs-toggle="tab" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true">
                        <span className="material-icons-sharp">person</span>
                        <h3>Basic Information</h3>
                    </a>
                    <a className="nav-item nav-link nav-top" id="accomplishments-tab" data-bs-toggle="tab" href="#accomplishments" role="tab" aria-controls="accomplishments" aria-selected="false">
                        <span className="material-icons-sharp">emoji_events</span>
                        <h3>Accomplishment</h3>
                    </a>
                    <a className="nav-item nav-link nav-top" id="SET-tab" data-bs-toggle="tab" href="#SET" role="tab" aria-controls="SET" aria-selected="false">
                        <span className="material-icons-sharp">work</span>
                        <h3>Faculty Load</h3>
                    </a>
                </div>
                <div className="tab-content" id="nav-tabContent-main">
                    <div className="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="basic-info-tab">
                        <nav>
                               <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-basic-info" role="tablist">
                                <a className="nav-item nav-link active nav-top" id="personal-info-tab" data-bs-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">
                                    <span className="material-icons-sharp">contact_page</span>
                                    <h3>Personal Information</h3>
                                </a>
                                <a className="nav-item nav-link nav-top" id="educ-tab" data-bs-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">
                                    <span className="material-icons-sharp">school</span>
                                    <h3>Education</h3>
                                </a>
                                <a className="nav-item nav-link nav-top" id="work-exp-tab" data-bs-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">
                                    <span className="material-icons-sharp">work_history</span>
                                    <h3>Work Experience</h3>
                                </a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent-basic-info">
                            <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                                <PersonalInfo token = { props.token.user } unit = {props.unit} position={props.position} hasDisabledFields={true}>{ props.personalInfo }</PersonalInfo>
                            </div>
                            <div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab">
                                <Education name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} role={props.data.role}>{ props.education }</Education>
                            </div>
                            <div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab">
                                <WorkExperience name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employment = { props.employment }>{ props.workExperience }</WorkExperience>
                            </div>
                        </div>
                    </div>
                </div>
    
                </nav>
        <style jsx>{`
		a.nav-item{
			color:#000;
		}
           	#nav-tab-main a.nav-item:focus{
			background-color:#78b6c2;
		}
		#nav-tab-main a.nav-item:hover{
			background-color:#78b6c2;
		}
		#nav-tab-main a.nav-item .active{
			background-color:#78b6c2;
		}
		a.nav-item{
			background-color: #aaa;
		}
		#nav-tabContent-main a.nav-item{
			background-color: #78b6c2;
		}
		#nav-tabContent-main a.nav-item .active{
			background-color: #5486b8;
		}
		#nav-tabContent-main a.nav-item:focus{
			background-color:#5486b8;
		}
		#nav-tabContent-main a.nav-item:hover{
			background-color:#5486b8;
		}
		.tab-pane.active
		{
			background-color: #fff;
		}
        `}</style>
            </Layout>
        )
    } else {
        return (
            <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
                <nav>
                <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-main" role="tablist">
                    <a className="nav-item nav-link active nav-top" id="basic-info-tab" data-bs-toggle="tab" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true">
                        <span className="material-icons-sharp">person</span>
                        <h3>Basic Information</h3>
                    </a>
                    <a className="nav-item nav-link nav-top" id="accomplishments-tab" data-bs-toggle="tab" href="#accomplishments" role="tab" aria-controls="accomplishments" aria-selected="false">
                        <span className="material-icons-sharp">emoji_events</span>
                        <h3>Accomplishment</h3>
                    </a>
                    <a className="nav-item nav-link nav-top" id="SET-tab" data-bs-toggle="tab" href="#SET" role="tab" aria-controls="SET" aria-selected="false">
                        <span className="material-icons-sharp">work</span>
                        <h3>Faculty Load</h3>
                    </a>
                </div>
                <div className="tab-content" id="nav-tabContent-main">
                    <div className="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="basic-info-tab">
                        <nav>
                               <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-basic-info" role="tablist">
                               <a className="nav-item nav-link active nav-top" id="personal-info-tab" data-bs-toggle="tab" data-bs-target="#personal-info" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">
                                    <span className="material-icons-sharp">contact_page</span>
                                    <h3>Personal Information</h3>
                                </a>
                                <a className="nav-item nav-link nav-top" id="educ-tab" data-bs-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">
                                    <span className="material-icons-sharp">school</span>
                                    <h3>Education</h3>
                                </a>
                                <a className="nav-item nav-link nav-top" id="work-exp-tab" data-bs-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">
                                    <span className="material-icons-sharp">work_history</span>
                                    <h3>Work Experience</h3>
                                </a>
                            </div>
                            <br/><br/>
                        </nav>
                        <div className="tab-content" id="nav-tabContent-basic-info">
                            <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                                <PersonalInfo token = { props.token.user } unit = {props.unit} position={props.position} hasDisabledFields={true}>{ props.personalInfo }</PersonalInfo>
                            </div>
                            <div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab">
                                <Education name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position}>{ props.education }</Education>
                            </div>
                            <div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab">
                                <WorkExperience name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employment = { props.employment }>{ props.workExperience }</WorkExperience>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="accomplishments" role="tabpanel" aria-labelledby="accomplishments-tab">
                        <nav>
                            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-accomplishment" role="tablist">
                                <a className="nav-item nav-link active nav-top" id="public-service-accomplishment-tab" data-bs-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">
                                    <span className="material-icons-sharp">groups</span>
                                    <h3>Public Service</h3>
                                </a>
                                <a className="nav-item nav-link nav-top" id="publication-tab" data-bs-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">
                                    <span className="material-icons-sharp">article</span>
                                    <h3>Publications</h3>
                                </a>
                                <a className="nav-item nav-link nav-top" id="training-seminar-tab" data-bs-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">
                                    <span className="material-icons-sharp">fitness_center</span>
                                    <h3>Trainings & Seminars</h3>
                                </a>
                                <a className="nav-item nav-link nav-top" id="licensure-exam-tab" data-bs-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">
                                    <span className="material-icons-sharp">contact_emergency</span>
                                    <h3>Licensure Exams</h3> 
                                </a>
                                <a className="nav-item nav-link nav-top" id="research-grant-tab" data-bs-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">
                                    <span className="material-icons-sharp">find_in_page</span>
                                    <h3>Research Grants</h3>
                                </a>
                            </div>
                            <br/><br/>
                        </nav>
                        <div className="tab-content" id="nav-tabContent-accomplishment">
                            <div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab">
                                <PublicServiceAccomplishment name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position}>{ props.publicService }</PublicServiceAccomplishment>
                            </div>
                            <div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab">
                                <Publication faculty = { props.faculty } name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyId={props.pathFacultyId} role={props.data.role} >{ props.publications }</Publication></div>
                            <div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab">
                                <TrainingSeminar name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position}>{ props.trainingSeminar }</TrainingSeminar>
                            </div>
                            <div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab">
                                <LicensureExam name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position}>{ props.licensureExam }</LicensureExam>
                            </div>
                            <div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab">
                                <ResearchGrant faculty = { props.faculty } name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyId={props.pathFacultyId} role={props.data.role}>{ props.researchGrant }</ResearchGrant>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="SET" role="tabpanel" aria-labelledby="SET-tab">
                        <br/><br/>
                        <FacultyLoader name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyId={props.pathFacultyId} role={props.data.role} editClass = {false}>{ props.facultyLoad }</FacultyLoader>
                    </div>
                    
                </div>
    
                </nav>
            </Layout>
        )
    }
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    if (context.res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        }
    } 
    let data = jwt.decode(token.user)
    
    let userFacultyId = data.facultyId
    let facultyId
    let status = '?status='
    let facultyLoad

    if(context.params.facultyId != userFacultyId && (data.role == 2 || data.role == 3) ) {
        facultyId = context.params.facultyId
    } else {
        return {
            redirect: {
                destination: '/faculty',
                permanent: true,
            },
        }
    }

    let url = process.env.API_URL + '/faculty/accomplishment/' + facultyId;
    let header = {
        headers: {
            'Authorization': 'Bearer ' + token.user
        }
    }

    const employment = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId + '/employment', header)
    const employmentInfo = await employment.json()
    let unit = employmentInfo.result.faculty_unit.unit.unit
    let position = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.position

    const load = await fetch(process.env.API_URL + '/faculty/load/' + facultyId, header)
    facultyLoad = await load.json()

    const personal = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId, header)
    const personalInfo = await personal.json()
    let name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName

    const educ = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId + '/education' + status, header)
    let education = await educ.json()

    const work = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId + '/work-exp', header)
    let workExperience = await work.json()

    const fac = await fetch(process.env.API_URL + '/faculty/basic-info/list/all?facultyId=' + facultyId, header)
    const faculty = await fac.json()

    const psa = await fetch(url + '/public-service' + status, header)
    const publicService = await psa.json()

    const pub = await fetch(url + '/publication' + status, header)
    const publications = await pub.json()

    const ts = await fetch(url + '/training-seminar' + status, header)
    const trainingSeminar = await ts.json()

	const le = await fetch(url + '/licensure-exam' + status, header)
    const licensureExam = await le.json()

	const rg = await fetch(url + '/research-grant' + status, header)
    const researchGrant = await rg.json()

    let approvalList
    let approvalURL = process.env.API_URL + '/faculty/approval/' + userFacultyId

    let roleAssignmentFlag = false
    let roleAssignmentURL = process.env.API_URL + '/faculty/basic-info/unit/assignment'
    if(data.role == 2 || data.role == 3) {
        if(data.role == 2) {
            approvalURL += '?unitId=' + data.unitId
            roleAssignmentURL += '?unitId=' + data.unitId
        }

        const approval = await fetch(approvalURL, header)
        approvalList = await approval.json()

        const roleAssignments = await fetch(roleAssignmentURL, header)
        let roleAssignmentList = await roleAssignments.json()
        roleAssignmentList = roleAssignmentList.result
        if(data.role == 2) {
            if(roleAssignmentList.approverRemarks != null) roleAssignmentFlag = true
        } else if(data.role == 3 && roleAssignmentList) {
            roleAssignmentFlag = true 
        }
    }

    return {
        props: {
            token: token && token,
            data: data,
            name,
            unit,
            position,
            facultyLoad: facultyLoad.result,
            pathFacultyId: context.params.facultyId,
            faculty: faculty.result,
            personalInfo: personalInfo.result,
            education: education.result,
            employment: employmentInfo.result,
            workExperience: workExperience.result,
            publicService: publicService.result,
            publications: publications.result,
            trainingSeminar: trainingSeminar.result,
            licensureExam: licensureExam.result,
            researchGrant: researchGrant.result,
            approvalList: approvalList.result,
            roleAssignmentFlag
        }
    }
}
  
export default ViewFaculty
