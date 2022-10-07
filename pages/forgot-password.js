import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'

function ForgotPassword(props){
	let forgotPasswordDetails = { upemail: "" }
	let message = ""

	return(
		<div>
			<Head>
				<title>UPM QA Portal</title>
				<link rel="stylesheet" href= "/authentication.css" />
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
				<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>    
			</Head>

			{/* Ensures that content will only show if CSS is fully loaded */}
			<div id="loadOverlay" style={{backgroundColor: "#333", position: "absolute", top: "0px", left: "0px", width: "100%" , height: "100%", zIndex: "2000"}}></div>
			
			{/* Main Container */}
			<div className = "row">
				{/* Left Side : Images */}
				<div className="col-md-6" id = "panel1">
					<div className="img">
						<img src="/logo.png" alt="Logo" style={{padding: "25%", height: "100%" }}></img>
					</div>
				</div>
			
				{/* Right Side : main content */}
				<div className="col-md-6">
					<div className="login" style={{padding: "0 0 0 24px"}}>
						<br/>
						<Link href = "/login">
							<a href="#" className="btn" style={{color: "#800020"}}>
								<span className="material-icons-sharp" style={{marginTop:"1rem"}}>arrow_back_ios</span>
							</a>
						</Link>

						<div className="container">
							<div className = "img" style={{marginTop: "-1rem"}}>
								<img className = "img-lock" src="/lock.png" id = "user" alt="Forgot Password"></img>
							</div>

							<br/><br/>
							<h2><b>FORGOT PASSWORD</b></h2>
							<br/>
							<h4> An e-mail message will be sent to your UP Mail  </h4>
							<h4> shortly. It will contain a link that will redirect </h4>
							<h4> you to a reset password page. </h4>  

							{/* Forms */}
							<div className="login-form" id = "recovery-email">
								<Formik
									initialValues={forgotPasswordDetails}
									onSubmit={async (values) => {
									try {
										const res = await axios.post(process.env.API_URL + "/user/forgot-password", {
										upemail: `${values.upemail}`,
										})

										if(res.data.success) {
											values.upemail=""
											let alert = document.getElementById("alert")
											message = res.data.message
											alert.classList.remove("alert-danger")
											alert.classList.add("alert-info")
											alert.setAttribute("style", "visibility: visible");
											window.setTimeout(function(){
												Router.push('/login')
											}, 3000);
										} else {
											let alert = document.getElementById("alert")
											message = res.data.error
											alert.setAttribute("style", "visibility: visible");
										}
									} catch (err) {
										message = err.response.data.error
										let alert = document.getElementById("alert")
										alert.setAttribute("style", "visibility: visible");
										$("#alert").fadeTo(5000, 500).slideUp(500, function(){
											$("#alert").slideUp(500);
										});
										values.upemail=""
										return err
									}
									}}
									>
									{({ values, errors, touched, isSubmitting }) => (
									<Form action="">
										<div className="alert alert-danger" role="alert" id="alert">
										{message}
										</div>

										<Field type="email" placeholder="UP Mail" id="upemail" name="upemail"/>
										<br/><br/>
										<button type="submit" className = "test" disabled = {isSubmitting}>Submit</button>
										
									</Form>
									)}
								</Formik>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default ForgotPassword