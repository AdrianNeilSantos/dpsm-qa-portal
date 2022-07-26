import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'

function ForgotPassword(props){
	let forgotPasswordDetails = { upemail: "" }
	let message = ""

	return(
		// <div className = "d-flex justify-content-center" style = {{ backgroundImage: "url(../kbblur.jpg)" }}>
		// 	<Head>
		// 		<title>DPSM-QA-PORTAL</title>
		// 		<link rel="stylesheet" href= "/authentication.css" />
		// 		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
		// 		<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
		// 		<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>    
		// 	</Head>
		// <div className = "jumbotron" id = "logo">
		// 	<h3> DPSM QA PORTAL </h3>
		// 	<br />
		// 	<br />
		// 	<center><img src="/dpsm-seal.png" width="115" height="115" alt="DPSM-QA-Portal" /></center>
		// 	<br />
		// 	<br />
		// 	<br />
		// 	<br />
		// 	<br />
		// </div>
		// <div className = "jumbotron" id = "recovery-email">
		// 	<Formik
		// 		initialValues={forgotPasswordDetails}
		// 		onSubmit={async (values) => {
		// 		try {
		// 			const res = await axios.post(process.env.API_URL + "/user/forgot-password", {
		// 			upemail: `${values.upemail}`,
		// 			})

		// 			if(res.data.success) {
		// 				values.upemail=""
		// 				let alert = document.getElementById("alert")
		// 				message = res.data.message
		// 				alert.classList.remove("alert-danger")
		// 				alert.classList.add("alert-info")
		// 				alert.setAttribute("style", "visibility: visible");
		// 				window.setTimeout(function(){
		// 					Router.push('/login')
		// 				}, 3000);
		// 			} else {
		// 				let alert = document.getElementById("alert")
		// 				message = res.data.error
		// 				alert.setAttribute("style", "visibility: visible");
		// 			}
		// 		} catch (err) {
		// 			message = err.response.data.error
		// 			let alert = document.getElementById("alert")
		// 			alert.setAttribute("style", "visibility: visible");
		// 			$("#alert").fadeTo(5000, 500).slideUp(500, function(){
		// 				$("#alert").slideUp(500);
		// 			});
		// 			values.upemail=""
		// 			return err
		// 		}
		// 		}}
		// 		>
		// 		{({ values, errors, touched, isSubmitting }) => (
		// 		<Form action="">
		// 			<div className="alert alert-danger" role="alert" id="alert">
		// 			{message}
		// 			</div>

		// 			<p>Input the UP Mail account associated with <br />
		// 			your account for the DPSM QA Portal here. <br />
		// 			Clicking 'Submit' will send an email with <br />
		// 			a link directing you to a reset password page</p>

		// 			<br />

		// 			<label htmlFor="email">UP Email:</label>
		// 			<Field className = "form-control" type="email" id="upemail" name="upemail" />

		// 			<br />

		// 			<Link href = "/login"><a href = "#">Go back to Sign In</a></Link>

		// 			<br />
		// 			<br />
					
		// 			<button type = "submit" className = "btn btn-primary" disabled = {isSubmitting}>Submit</button>
		// 		</Form>
		// 		)}
		// 	</Formik>
		// </div>

	// 	<style jsx>{`
	// 	.d-flex{
	// 		min-height: 100%;
	// 		min-height: 100vh; 

	// 		display: flex;
	// 		align-items: center;
	// 	}
	// 	.jumbotron#recovery-email{
	// 		background-color:#600;
	// 	}
	// 	.jumbotron#logo{
	// 		background-color: #01942b;
	// 	}
	// 	label, p{
	// 		color:#fff;
	// 	}
	// 	#alert {
	// 		visibility: hidden;
	// 	}
	// `}</style>


	// </div>


		<div>
			<Head>
				<title>DPSM-QA-PORTAL</title>
				<link rel="stylesheet" href= "/authentication.css" />
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
				<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>    
			</Head>

			<div className = "row">
				<div className="col-md-6" id = "panel1">
					<div className="img">
						<img src="/logo.png" alt="Logo" style={{padding: "25%", height: "100%" }}></img>
					</div>
				</div>
			

				<div className="col-md-6">
					<div className="login" style={{padding: "0 0 0 24px"}}>
						<Link href = "/login">
							<a href="#" className="return">
								<h4><span className="material-icons-sharp">arrow_back_ios</span>  Return to Login</h4>
							</a>
						</Link>

						<div className="container">
							<div className = "img">
								<img className = "img-lock" src="/lock.png" id = "user" alt="Forgot Password"></img>
							</div>
							<br/><br/>
							<h2><b>FORGOT PASSWORD</b></h2>
							<br/>
							<h4>Input the UP Email account associated with  </h4>
							<h4>your account here in the UPM QA Portal.</h4>
							<br/>
							<h4>We will send you an email message containing  </h4>
							<h4>a link that will redirect you to a reset </h4>
							<h4>password page.</h4>    
							<br/>

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
