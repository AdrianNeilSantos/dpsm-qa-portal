// import Fetch from 'isomorphic-unfetch'
import Layout from '../../components/layout'
import PersonalInfo from '../../components/faculty/basic-info/personal-info'
import Education from '../../components/faculty/basic-info/education'
import EmploymentHistory from '../../components/faculty/basic-info/employment-history'
import WorkExperience from '../../components/faculty/basic-info/work-experience'
import jwt from 'jsonwebtoken'

function BasicInfo(props) {
    return (
        <Layout>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</a>
                {/* <a className="nav-item nav-link" id="emp-history-tab" data-toggle="tab" href="#emp-history" role="tab" aria-controls="emp-history" aria-selected="false">Employment History</a> */}
                <a className="nav-item nav-link" id="educ-tab" data-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">Education</a>
                <a className="nav-item nav-link" id="work-exp-tab" data-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">Work Experience</a>
            </div>
            </nav>
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                <PersonalInfo>{ props.personalInfo }</PersonalInfo>
            </div>
            {/* <div className="tab-pane fade" id="emp-history" role="tabpanel" aria-labelledby="emp-history-tab"><EmploymentHistory /></div> */}
            <div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab">
                <Education>{ props.education }</Education>
            </div>
           <div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab">
                <WorkExperience>{ props.workExperience }</WorkExperience>
            </div>
            </div>
	<style jsx>{`
		a.nav-item:focus{
			background-color:#78b6c2;
		}
		a.nav-item:hover{
			background-color:#78b6c2;
		}
		a.active{
			background-color:#78b6c2;
		}
	`}</style>
        </Layout>
    )
  }

BasicInfo.getInitialProps = async () => {
    // let url = 'https://sp-api-test.alun.app/api/';
    let url = 'http://localhost:3001/api/'
    const res = await fetch(url + 'login',
    {
        body: JSON.stringify({"upemail": "jpcristobal1@upm.edu.ph", "password": "password"}),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    })
    
    const access = await res.json()
    let token = access.result.token
    let facultyId = 0;
    if (token) {
        const json = jwt.decode(token)
        facultyId = json.facultyId
    } else {
        console.log(access.result.message)
    }
    // url = 'https://sp-api-test.alun.app/api/faculty/basic-info/' + facultyId;
    url = 'http://localhost:3001/api/faculty/basic-info/' + facultyId;
    let header = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    const personal = await fetch(url, header)
    const personalInfo = await personal.json()

    const employ = await fetch(url + '/employment', header)
    const employment = await employ.json()

    const educ = await fetch(url + '/education', header)
    const education = await educ.json()

    const work = await fetch(url + '/work-exp', header)
    const workExperience = await work.json()

    education.result.push(personalInfo.result)
    workExperience.result.push(employment.result)
    workExperience.result.push(personalInfo.result)

    return { 
        personalInfo: personalInfo.result,
        education: education.result,
        workExperience: workExperience.result
    }
}

//   BasicInfo.getInitialProps = async () => {
//       let url = 'https://sp-api-test.alun.app/api/faculty/9'
//       let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNjA1MzM5MjI4LCJleHAiOjE2MDUzNDI4Mjh9.deoiQ1EyQW0LDkKAY_T-lgjiehjeZ2KnsEGlkD2oP4A'
//       const response = await fetch(url, {
//           headers: {
//               'Authorization': 'Bearer ' + token
//           }
//       })
//       const personalInfo = await response.json()

//       return { 
//           personalInfo: personalInfo.result
//         }
//   }
  

  export default BasicInfo
