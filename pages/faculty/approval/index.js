import Layout from '../../../components/layout'
import Link from 'next/link'
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { parseCookies, isExpired } from "../../../helpers"
import Faculty from "../../../components/faculty/facultyList"

function FacultyList(props) {
    return (
        <Layout userId={props.data.userId} facultyId={props.data.facultyId} role={props.data.role} name={props.data.name} approvalList={props.approvalList} roleAssignmentFlag={props.roleAssignmentFlag}>
			<br />
			<h2 align="center">Faculty with Pending Approval</h2>
			<Faculty path="approval">{props.approvalList.rows}</Faculty>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)
    let data
    let personalInfo
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
        
            let header = {
                headers: {
                    'Authorization': 'Bearer ' + token.user
                }
            }
            
            const personal = await fetch(process.env.API_URL + '/faculty/basic-info/' + facultyId, header)
            personalInfo = await personal.json()

            if(data.role == 2 || data.role == 3) {
                let approvalURL = process.env.API_URL + '/faculty/approval/' + facultyId
                let roleAssignmentURL = process.env.API_URL + '/faculty/basic-info/unit/assignment'
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
            } else {
				return {
					redirect: {
						destination: '/faculty',
						permanent: true,
					},
				}
			}
        }
    } 

    return {
        props: {
            token: token && token,
            data,
            personalInfo: personalInfo.result,
            approvalList: approvalList.result,
            roleAssignmentFlag
        }
	}
}
  
  export default FacultyList
