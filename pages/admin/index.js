import Layout from '../../components/layout'
import Link from 'next/link'
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../helpers"
import Faculty from "../../components/faculty/facultyList"

function FacultyList(props) {
    return (
            <div>
                <Layout userId={props.data.userId} role={props.data.role} name={props.data.name}>
                    <br />
                    <h2 style={{display: "inline-block"}}>List of Faculty</h2>
                    <Link href = "/admin/faculty">
                        <button type="button" className="btn customButton-icon-only maroon" style={{marginLeft: "1rem", marginBottom: "1rem"}}>
                            <span className="material-icons-sharp">add</span>
                        </button>
                    </Link>
                    <Link href = "/admin/generate-reports">
                        <button type="button" className="btn customButton-icon-only yellow" style={{marginLeft: "1rem", marginBottom: "1rem"}}>
                            <span className="material-icons-sharp">download</span>
                        </button>
                    </Link>
                    <br />
                    <Faculty path="admin" role={props.data.role} token={props.token.user}>{props.facultyList}</Faculty>
                </Layout>
             </div>

    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    let data
    let facultyList

    if (context.res) {
        if (isExpired(token.user) || Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        } else {
            data = jwt.decode(token.user)
        
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
            
            const faculty = await fetch(process.env.API_URL + '/faculty/basic-info', header)
            facultyList = await faculty.json()

        }
    } 

    return {
        props: {
            token: token && token,
            data,
            facultyList: facultyList.result,
        }
	}
}
  
  export default FacultyList
