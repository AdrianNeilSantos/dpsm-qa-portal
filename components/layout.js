import Head from 'next/head'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import Content from './content'
import jwt from 'jsonwebtoken'
function Layout(props) {
    let approvalList
    if(props.approvalList) approvalList = props.approvalList
    return (
        <div className = "container-fluid">
            <Head>
                <title>DPSM-QA-PORTAL MOD</title>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
                <link rel="stylesheet" href= "/testStyle.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" hrsef="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
                {/* MATERIAL CDN */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </Head>
            <Header name={ props.name } role={props.role}/>
            <div className = "row" id = "layout_row">
                <Sidebar role = {props.role} approvalList={approvalList} facultyId = {props.facultyId} roleAssignment={props.roleAssignmentFlag} />
                    <div className="col" id = "layout_content">
                        { props.children }
                    </div>
	       </div>
        </div>
    )
}

export default Layout
