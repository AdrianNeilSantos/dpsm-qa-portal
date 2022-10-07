import Layout from '../../../components/layout'
import Education from '../../../components/faculty/basic-info/education'
import Publication from '../../../components/faculty/accomplishments/publication'
import PublicServiceAccomplishment from '../../../components/faculty/accomplishments/public-service-accomplishment'
import LicensureExam from '../../../components/faculty/accomplishments/licensure-exam'
import TrainingSeminar from '../../../components/faculty/accomplishments/training-seminar'
import ResearchGrant from '../../../components/faculty/accomplishments/research-grant'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../../helpers"

function Approval(props) {
    let educFlag = false
    let publicServiceFlag = false
    let publicationsFlag = false
    let tsFlag = false
    let licensureExamFlag = false
    let rgFlag = false

    if(props.education) educFlag = true
    if(props.publicService) publicServiceFlag = true
    if(props.publications && props.publications.length != 0) publicationsFlag = true
    if(props.trainingSeminar) tsFlag = true
    if(props.licensureExam) licensureExamFlag = true
    if(props.researchGrant && props.researchGrant.length != 0) rgFlag = true

    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                <button className="nav-item nav-link active nav-top" id="educ-tab" data-bs-toggle="tab" data-bs-target="#educ" href="#educ" role="tab" aria-controls="educ" aria-selected="false">
                    <span className="material-icons-sharp">school</span>
                    <h3>Education
                     &nbsp;
                    {educFlag && <span className="badge badge-danger">!</span>}
                    </h3>
                </button>
                <button className="nav-item nav-link nav-top" id="public-service-accomplishment-tab" data-bs-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">
                    <span className="material-icons-sharp">groups</span>
                    <h3>Public Service
                     &nbsp;
                    {publicServiceFlag && <span className="badge badge-danger">!</span>}
                    </h3>
                </button>
                <button className="nav-item nav-link nav-top" id="publication-tab" data-bs-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">
                    <span className="material-icons-sharp">article</span>
                    <h3>Publications
                     &nbsp;
                    {publicationsFlag && <span className="badge badge-danger">!</span>}
                    </h3>
                </button>
                <button className="nav-item nav-link nav-top" id="training-seminar-tab" data-bs-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">
                    <span className="material-icons-sharp">fitness_center</span>
                    <h3>Training/Seminars
                     &nbsp;
                    {tsFlag && <span className="badge badge-danger">!</span>}
                    </h3>
                </button>
                <button className="nav-item nav-link nav-top" id="licensure-exam-tab" data-bs-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">
                    <span className="material-icons-sharp">contact_emergency</span>
                    <h3>Licensure Exams
                     &nbsp;
                    {licensureExamFlag && <span className="badge badge-danger">!</span>}
                    </h3>
                </button>
                <button className="nav-item nav-link nav-top" id="research-grant-tab" data-bs-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">
                    <span className="material-icons-sharp">find_in_page</span>
                    <h3>Research Grants
                     &nbsp;
                    {rgFlag && <span className="badge badge-danger">!</span>}
                    </h3>
                </button>
            </div>
            </nav>
		<br />
		<br />
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="educ" role="tabpanel" aria-labelledby="educ-tab">
                <Education name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} approver={true} facultyId={props.pathFacultyId}>{ props.education }</Education>
            </div>
    	    <div className="tab-pane fade" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab">
                <PublicServiceAccomplishment name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} approver={true} facultyId={props.pathFacultyId}>
                    { props.publicService }
                </PublicServiceAccomplishment>
            </div>
    	    <div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab">
                <Publication faculty = { props.faculty } name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} approver={true} facultyId={props.pathFacultyId} role={props.data.role}>
                    { props.publications }
                </Publication>
            </div>
    	    <div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab">
                <TrainingSeminar name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} approver={true} facultyId={props.pathFacultyId}>
                    { props.trainingSeminar }
                </TrainingSeminar>
            </div>
    	    <div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab">
                <LicensureExam name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} approver={true} facultyId={props.pathFacultyId}>
                    { props.licensureExam }
                </LicensureExam>
            </div>
    	    <div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab">
                <ResearchGrant faculty = { props.faculty } name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} approver={true} facultyId={props.pathFacultyId}>
                    { props.researchGrant }
                </ResearchGrant>
            </div>
        </div>
        </Layout>
    )
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
    
    if(context.params.facultyId != userFacultyId && (data.role == 2 || data.role == 3) ) {
        facultyId = context.params.facultyId
        if(data.role == 2) status += 'Pending'
        else if(data.role == 3) status += 'Verified'
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

    const personal = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId, header)
    const personalInfo = await personal.json()
    let name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName

    const educ = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId + '/education' + status, header)
    let education = await educ.json()

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
            pathFacultyId: context.params.facultyId,
            faculty: faculty.result,
            personalInfo: personalInfo.result,
            education: education.result,
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
  
export default Approval