import Layout from '../../components/layout'
import Publication from '../../components/faculty/accomplishments/publication'
import PublicServiceAccomplishment from '../../components/faculty/accomplishments/public-service-accomplishment'
import LicensureExam from '../../components/faculty/accomplishments/licensure-exam'
import TrainingSeminar from '../../components/faculty/accomplishments/training-seminar'
import ResearchGrant from '../../components/faculty/accomplishments/research-grant'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"

function Accomplishments(props) { 

    let psaRejected = false
    if(props.publicService != null) {
        props.publicService.every((e) => {
            if(e.status == 'Rejected') {
                psaRejected = true 
                return false
            }
            return true
        })    
    }

    let publicationRejected = false
    if(props.publications != null) {
        props.publications.forEach((e) => {
            if(e.status == 'Rejected') {
                publicationRejected = true 
                return false
            }
            return true
        })
    }

    let tsRejected = false
    if(props.trainingSeminar != null) {
        props.trainingSeminar.every((e) => {
            if(e.status == 'Rejected') {
                tsRejected = true 
                return false
            }
            return true
        })
    }

    let licensureRejected = false
    if(props.licensureExam != null) {
        props.licensureExam.every((e) => {
            if(e.status == 'Rejected') {
                licensureRejected = true 
                return false
            }
            return true
        })
    }

    let rgRejected = false
    if(props.researchGrant != null) {
        props.researchGrant.forEach((e) => {
            if(e.status == 'Rejected') {
                rgRejected = true 
                return false
            }
            return true
        })
    }

    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
            <nav>
                <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active nav-top" id="public-service-accomplishment-tab" data-bs-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">
                        <span className="material-icons-sharp">groups</span>
                        <h3>Public Service</h3>
                        &nbsp;
                        {psaRejected && <span className="badge badge-danger">!</span>}
                    </a>
                    <a className="nav-item nav-link nav-top" id="publication-tab" data-bs-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">
                        <span className="material-icons-sharp">article</span>
                        <h3>Publications</h3>
                        &nbsp;
                        {publicationRejected && <span className="badge badge-danger">!</span>}
                    </a>
                    <a className="nav-item nav-link nav-top" id="training-seminar-tab" data-bs-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">
                        <span className="material-icons-sharp">fitness_center</span>
                        <h3>Trainings & Seminars</h3>
                        &nbsp;
                        {tsRejected && <span className="badge badge-danger">!</span>}
                    </a>
                    <a className="nav-item nav-link nav-top" id="licensure-exam-tab" data-bs-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">
                        <span className="material-icons-sharp">contact_emergency</span>
                        <h3>Licensure Exams</h3> 
                        &nbsp;
                        {licensureRejected && <span className="badge badge-danger">!</span>}
                    </a>
                    <a className="nav-item nav-link nav-top" id="research-grant-tab" data-bs-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">
                        <span className="material-icons-sharp">find_in_page</span>
                        <h3>Research Grants</h3>
                        &nbsp;
                        {rgRejected && <span className="badge badge-danger">!</span>}
                    </a>
                </div>
            </nav>
		<br />
		<br />
        <div className="tab-content" id="nav-tabContent">
    	    <div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab">
                <PublicServiceAccomplishment name = { props.data.name } token = { props.token.user } unit = {props.data.unit} position={props.data.position} editable={true}>
                    { props.publicService }
                </PublicServiceAccomplishment>
            </div>
    	    <div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab">
                <Publication faculty = { props.faculty } name = { props.data.name } token = { props.token.user } unit = {props.data.unit} position={props.data.position} role={props.data.role} editable={true} facultyId={props.data.facultyId}>
                    { props.publications }
                </Publication>
            </div>
    	    <div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab">
                <TrainingSeminar name = { props.data.name } token = { props.token.user } unit = {props.data.unit} position={props.data.position} editable={true}>
                    { props.trainingSeminar }
                </TrainingSeminar>
            </div>
    	    <div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab">
                <LicensureExam name = { props.data.name } token = { props.token.user } unit = {props.data.unit} position={props.data.position} editable={true}>
                    { props.licensureExam }
                </LicensureExam>
            </div>
    	    <div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab">
                <ResearchGrant faculty = { props.faculty } name = { props.data.name } token = { props.token.user } unit = {props.data.unit} position={props.data.position} role={props.data.role} editable={true} facultyId={props.data.facultyId}>
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
    let facultyId = data.facultyId

    let url = process.env.API_URL + '/faculty/accomplishment/' + facultyId;
    let header = {
        headers: {
            'Authorization': 'Bearer ' + token.user
        }
    }

    const fac = await fetch(process.env.API_URL + '/faculty/basic-info/list/all?facultyId=' + facultyId, header)
    const faculty = await fac.json()

    const psa = await fetch(url + '/public-service', header)
    const publicService = await psa.json()

    const pub = await fetch(url + '/publication', header)
    const publications = await pub.json()

    const ts = await fetch(url + '/training-seminar', header)
    const trainingSeminar = await ts.json()

	const le = await fetch(url + '/licensure-exam', header)
    const licensureExam = await le.json()

	const rg = await fetch(url + '/research-grant', header)
    const researchGrant = await rg.json()

    let roleAssignmentFlag = false

    let approvalList
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

    return {
        props: {
            token: token && token,
            data: data,
            faculty: faculty.result,
            publicService: publicService.result,
            publications: publications.result,
            trainingSeminar: trainingSeminar.result,
            licensureExam: licensureExam.result,
            researchGrant: researchGrant.result,
            approvalList: approvalList,
            roleAssignmentFlag
        }
    }
}
  
export default Accomplishments
