import { Divider } from '@material-ui/core';
import Link from 'next/link'

function Header(props) {
	let roleName = ""
	switch(props.role){
		case 1: 
			roleName = "Faculty"; 
			break;
		case 2: 
			roleName = "Unit Head"; 
			break;
		case 3: 
			roleName = "Department Chair"; 
			break;
		default: 
			roleName = "Admin Clerk"; 
			break;
	}
	
    return (
		// Topbar
		<div className="topbar">
			<div className="topbanner">
				<img src="/logo.png"/>
				<h2> QUALITY ASSURANCE PORTAL</h2>
			</div>
		</div>
    )
  }

  export default Header