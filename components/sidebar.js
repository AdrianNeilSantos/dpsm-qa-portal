import Link from 'next/link'
import { useCookies } from "react-cookie";
import { useState } from 'react'
import { useRouter } from 'next/router'

function Sidebar(props) { 
    const router = useRouter()

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    function handleRemoveCookie() {
        removeCookie("user", {path:'/'});
    }

    let faculty = true
    let staff = true

    if(props.role == 1 || props.role == 2 || props.role == 3) {
        staff = false
        if(props.role == 2 || props.role == 3) {
            faculty = false
        } 
    }

    const [isActive, setActive] = useState("false")

    const handleToggle = () => {
    	setActive(!isActive)
    }

    return (
    //     <div id="sidebar">
	//     <div className = "alert alert-info col-12 d-md-none text-center" onClick = {handleToggle}> Main Menu </div>
    //         <div id = "menu" className = {isActive ? null : "d-none d-md-block"}>
    //             <div className="list-group col-12">
	// 		<a className = "list-group-item list-group-item-action list-group-item-secondary" data-toggle = "collapse" data-target = "#facultyMenu" aria-controls = "facultyMenu"> Faculty </a>
    //             <div id = "facultyMenu" className = "collapse show">
    //                 { !staff && !faculty && <Link href={{ pathname: "/faculty" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty" ?  "active"  : "inactive" }>Dashboard</a></Link> }
    //                 { !staff && <Link href={{ pathname: "/faculty/basic-info" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/basic-info" ?  "active"  : "inactive" }>Basic Information</a></Link> }
    //                 { !staff && <Link href={{ pathname: "/faculty/accomplishment" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/accomplishment" ?  "active"  : "inactive" }>Accomplishment</a></Link> }
    //                 { !staff && <Link href={{ pathname: "/faculty/faculty-load" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/faculty-load" ?  "active"  : "inactive" }>Faculty Load</a></Link> }
    //                 { !staff && !faculty && <Link href={{ pathname: "/faculty/view/all" }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/view/all" ?  "active"  : "inactive" }>Faculty List</a></Link> }
    //                 { !staff && !faculty && <Link href={{ pathname: "/faculty/approval" }}>
    //                     <a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/approval" ?  "active"  : "inactive" }> 
    //                         Pending Approvals &nbsp;{props.approvalList.facultyCount > 0 && <span className="badge badge-danger">{props.approvalList.facultyCount}</span>}
    //                     </a>
    //                 </Link> }
    //                 { staff && <Link href={{ pathname: "/admin" }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/admin" ?  "active"  : "inactive" }>Faculty List</a></Link> }
	// 	            { !staff && !faculty && props.roleAssignment && <Link href ={{ pathname: "/faculty/role-assignment" }}>
    //                     <a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" }>
    //                         Role Assignment &nbsp;<span className="badge badge-danger">!</span>
    //                     </a>
    //                 </Link> }
    //                 { !staff && !faculty && !props.roleAssignment && <Link href ={{ pathname: "/faculty/role-assignment" }}>
    //                     <a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" }>
    //                         Role Assignment
    //                     </a>
    //                 </Link> }
    //             </div>
    //             </div>
	// 	        <div className="list-group col-12">
    //                 <Link href="/login"><a className = "list-group-item list-group-item-action list-group-item-danger" onClick={handleRemoveCookie}>Log Out</a></Link>
    //             </div>

	// 	<style jsx>{`
	// 		#menu {
  	// 			background-color: #017823;
	// 		}
	// 		.list-group-item-success{
	// 			text-indent:20%;
	// 		}
	// 		#active{
	// 			background-color: #005919;
	// 			color: #fff;
	// 		}
	// 	`}</style>
    //         </div>
	// </div>			
    
        <aside>
            <div className="top">
                <div className ="close" id="close-btn">
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>

            <div className="sidebar">
            {/* Dashboard Group */}
                <button className="dropdown-btn"><span className="material-icons-sharp">grid_view</span>Dashboard
                    <i className="fa fa-caret-down"></i>
                </button>

                <div className="dropdown-container">
                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Accomplishment Count</h3>
                    </a>

                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Employment Status</h3>
                    </a>

                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Attained Degrees</h3>
                    </a>
                </div>

                {/* Basic Information Group */}

                <button className="dropdown-btn"><span className="material-icons-sharp">person</span>Basic Information
                    <i className="fa fa-caret-down"></i>
                </button>

                <div className="dropdown-container">
                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">person</span>
                        <h3>Personal Information</h3>
                    </a> 

                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Education</h3>
                    </a>
                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Work Experience</h3>
                    </a>    
                </div>

                {/* Accomplishment Group */}
                <button className="dropdown-btn"><span className="material-icons-sharp">emoji_events</span>Accomplishment
                    <i className="fa fa-caret-down"></i>
                </button>

                <div className="dropdown-container">
                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Public Service</h3>
                    </a>

                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Publications</h3>
                    </a>

                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Trainings and Seminars</h3>
                    </a>

                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Licensure Exams</h3>
                    </a>

                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>Research Grants</h3>
                    </a>
                </div>

                {/* Role Assignment Group */}
                <button className="dropdown-btn"><span className="material-icons-sharp">assignment_ind</span>Role Assignment
                    <i className="fa fa-caret-down"></i>
                </button>   

                <div className="dropdown-container">
                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>unitHeadAssignment</h3>
                    </a>

                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>adminClerkAssignment</h3>
                    </a>

                    <a href="#" className={isActive ? null : "active"}>
                        <span className="material-icons-sharp">assignment_ind</span>
                        <h3>deptChairAssignment</h3>
                    </a>   
                </div>

                {/* Others Group */}

                <a href="#" className={isActive ? null : "active"}>
                    <span className="material-icons-sharp">work</span>
                    <h3>Faculty Load</h3>
                </a>

                <a href="#" className={isActive ? null : "active"}>
                    <span className="material-icons-sharp">format_list_bulleted</span>
                    <h3>Faculty List</h3>
                </a>

                <a href="#" className={isActive ? null : "active"}>
                    <span className="material-icons-sharp">pending_actions</span>
                    <h3>Pending Approvals</h3>
                    <span className="approval-count">26</span>
                </a>

                <a href="#" className={isActive ? null : "active"}>
                    <span className="material-icons-sharp">assignment_ind</span>
                    <h3>homepage</h3>
                </a>

                <a href="#" className={isActive ? null : "active"}>
                    <span className="material-icons-sharp">assignment_ind</span>
                    <h3>signIn</h3>
                </a>

                <a href="#" className={isActive ? null : "active"}>
                    <span className="material-icons-sharp">assignment_ind</span>
                    <h3>passwordForgot</h3>
                </a>

                <a href="#" className={isActive ? null : "active"}>
                    <span className="material-icons-sharp">assignment_ind</span>
                    <h3>passwordChange</h3>
                </a>

                <a href="#" className={isActive ? null : "active"}>
                    <span className="material-icons-sharp">assignment_ind</span>
                    <h3>generateReports</h3>
                </a>

                <a href="#" className={isActive ? null : "active"}>
                    <span className="material-icons-sharp">assignment_ind</span>
                    <h3>downloadFacultyInfo</h3>
                </a>

                <Link href="/login">
                    <a onClick={handleRemoveCookie}>
                        <span className="material-icons-sharp">logout</span>
                        <h3>Logout</h3>
                    </a>
                </Link>

            </div>


        </aside>


    )
  }
  
  export default Sidebar
