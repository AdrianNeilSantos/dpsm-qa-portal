import Layout from '../../components/layout'
import PersonalInfo from '../../components/faculty/basic-info/personal-info'
import Education from '../../components/faculty/basic-info/education'
import WorkExperience from '../../components/faculty/basic-info/work-experience'
import Publication from '../../components/faculty/accomplishments/publication'
import PublicServiceAccomplishment from '../../components/faculty/accomplishments/public-service-accomplishment'
import LicensureExam from '../../components/faculty/accomplishments/licensure-exam'
import TrainingSeminar from '../../components/faculty/accomplishments/training-seminar'
import ResearchGrant from '../../components/faculty/accomplishments/research-grant'
import FacultyLoader from '../../components/faculty/faculty-load/faculty-load-table'

import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"

function BasicInfo(props) {
    return (
        <Layout userId={props.data.userId} role={props.data.role} name={props.data.name}>
            <nav>
                <div className="nav nav-tabs nav-justified flex-column flex-md-row" id="nav-tab-main" role="tablist">
                    <a className="nav-item nav-link active nav-top" id="basic-info-tab" data-bs-toggle="tab" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true">
                        <span className="material-icons-sharp">person</span>
                        <h3>Basic Information</h3>
                    </a>
                    <a className="nav-item nav-link nav-top" id="accomplishments-tab" data-bs-toggle="tab" href="#accomplishments" role="tab" aria-controls="accomplishments" aria-selected="false">
                        <span className="material-icons-sharp">emoji_events</span>
                        <h3>Accomplishment</h3>
                    </a>
                    <a className="nav-item nav-link nav-top" id="faculty-load-tab" data-bs-toggle="tab" href="#faculty-load" role="tab" aria-controls="faculty-load" aria-selected="false">
                        <span className="material-icons-sharp">work</span>
                        <h3>Faculty Load</h3>
                    </a>
                </div>
                <div className="tab-content" id="nav-tabContent-main">
                    <div className="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="basic-info-tab">
                        <nav>
                            <div className="nav nav-tabs nav-justified flex-column flex-md-row" id="nav-tab-basic-info" role="tablist">
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
                                <WorkExperience name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employment = { props.employment } role={props.data.role} facultyId={props.pathFacultyId} positionsList={props.positionsList}>{ props.workExperience }</WorkExperience>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="accomplishments" role="tabpanel" aria-labelledby="accomplishments-tab">
                        <nav>
                            <div className="nav nav-tabs nav-justified flex-column flex-md-row" id="nav-tab-accomplishment" role="tablist">
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
                    <div className="tab-pane fade" id="faculty-load" role="tabpanel" aria-labelledby="faculty-load-tab">
                        <br/><br/>
                        <FacultyLoader name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyId={props.pathFacultyId} role={props.data.role} editClass = {false}>{ props.facultyLoad }</FacultyLoader>
                    </div>
                    <br/>
                </div>
            </nav>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)

    let personalInfo
    let name
    let unit
    let position
    let data
    let employmentInfo
    let education
    let workExperience
    let faculty
    let publicService
    let publications
    let trainingSeminar
    let licensureExam
    let researchGrant
    let positionsList
    let facultyLoad

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
            
            if(context.params.facultyId) {
                let facultyId = context.params.facultyId
                
                let url = process.env.API_URL + '/faculty/basic-info/' + facultyId;
                let header = {
                    headers: {
                        'Authorization': 'Bearer ' + token.user
                    }
                }
            
                const personal = await fetch(url, header)
                personalInfo = await personal.json()
                name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName

                const employment = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId + '/employment', header)
                employmentInfo = await employment.json()
                unit = employmentInfo.result.faculty_unit.unit.unit
                if(employmentInfo.result.faculty_employment_infos[0]) {
                    position = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.position
                }

                const load = await fetch(process.env.API_URL + '/faculty/load/' + facultyId, header)
                facultyLoad = await load.json()

                const educ = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId + '/education', header)
                education = await educ.json()

                const work = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId + '/work-exp', header)
                workExperience = await work.json()

                const fac = await fetch(process.env.API_URL + '/faculty/basic-info/list/all?facultyId=' + facultyId, header)
                faculty = await fac.json()

                const psa = await fetch(process.env.API_URL + '/faculty/accomplishment/' + facultyId + '/public-service', header)
                publicService = await psa.json()

                const pub = await fetch(process.env.API_URL + '/faculty/accomplishment/' + facultyId + '/publication', header)
                publications = await pub.json()

                const ts = await fetch(process.env.API_URL + '/faculty/accomplishment/' + facultyId + '/training-seminar', header)
                trainingSeminar = await ts.json()

                const le = await fetch(process.env.API_URL + '/faculty/accomplishment/' + facultyId + '/licensure-exam', header)
                licensureExam = await le.json()

                const rg = await fetch(process.env.API_URL + '/faculty/accomplishment/' + facultyId + '/research-grant', header)
                researchGrant = await rg.json()

                const positions = await fetch(process.env.API_URL + '/faculty/basic-info/employment/positions', header)
                positionsList = await positions.json()
                positionsList = positionsList.result
            } else {
                return {
                    redirect: {
                        destination: '/admin',
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
            name,
            personalInfo: personalInfo.result,
            unit,
            facultyLoad: facultyLoad.result,
            pathFacultyId: context.params.facultyId,
            faculty: faculty.result,
            position: position || null,
            education: education.result,
            employment: employmentInfo.result,
            workExperience: workExperience.result,
            publicService: publicService.result,
            publications: publications.result,
            trainingSeminar: trainingSeminar.result,
            licensureExam: licensureExam.result,
            researchGrant: researchGrant.result,
            pathFacultyId: context.params.facultyId,
            positionsList
        }
    }
}

export default BasicInfo
