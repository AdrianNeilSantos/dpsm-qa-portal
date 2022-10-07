import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'

function ResetPassword(props){
    let validated

    if(props.verified) {
        let resetPasswordDetails = { password: "" }
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
                {/* Left Side : with images */}
                <div className="col-md-6" id="panel1">
                    <div className="img">
                        <img src="/logo.png" className="logopic" style={{padding: "25%", height: "100%" }}></img>
                    </div>
                </div>

                {/* Right Side : main content */}
                <div className = "col-md-6" id = "reset-password">
                    <div className="login" style={{padding: "0 0 0 24px"}}>
						<br/>
                        <Link href = "/login">
                            <a href="#" className="btn" style={{color: "#800020"}}>
                                <span className="material-icons-sharp" style={{marginTop:"1rem"}}>arrow_back_ios</span>
                            </a>
                        </Link>

                        <div className="container">
                            <div className = "img" style={{marginTop: "-2rem"}}>
                                <img className = "img-lock" src="/reset.png" id = "user" alt="Forgot Password"></img>
                            </div>

                            {/* Forms */}
                            <div className="reset-form">
                                <Formik
                                    initialValues={resetPasswordDetails}
                                    onSubmit={async (values) => {
                                    try {
                                        if(!validated) e.preventDefault()
                                        else {
                                            const res = await axios.post(`${process.env.API_URL}/user/forgot-password/${props.userId}/${props.token}`, {
                                                password: `${values.password1}`,
                                            })
                        
                                            if(res.data.success) {
                                                values.password1 = ""
                                                values.password2 = ""
                                                    
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
                                        }
                                    } catch (err) {
                                        message = err.response.data.error.message
                                        let alert = document.getElementById("alert")
                                        alert.setAttribute("style", "visibility: visible");
                                        $("#alert").fadeTo(5000, 500).slideUp(500, function(){
                                            $("#alert").slideUp(500);
                                        });
                                            
                                        values.password1 = ""
                                        values.password2 = ""

                                        return err
                                    }
                                    }}
                                    >
                                    {({ values, errors, touched, isSubmitting }) => (
                                    <Form action="">

                                        <br/>
							            <h2><b>RESET PASSWORD</b></h2>

                                        <div className="alert alert-danger" role="alert" id="alert">
                                        {message}
                                        </div>

                                        <h4>Enter and confirm your new password </h4>
                                        <h4>for your UPM QA Portal account. </h4>    
                                        <br/>                   

                                        <Field className = "form-control" placeholder="New Password" type="password" id="password1" name="password1" />
                                        <Field className = "form-control" placeholder="Confirm New Password" type="password" id="password2" name="password2" onChange={async () => {
                                            let alert = document.getElementById("alert")

                                            const newPassword = document.getElementById('password1').value
                                            const confirmPassword = document.getElementById('password2').value
                        
                                            if(newPassword != confirmPassword) {
                                                alert.className = "alert alert-danger"
                                                alert.style = "visibility: visible"
                                                alert.innerHTML = 'The passwords do not match'
                        
                                                validated = false
                        
                                            } else {
                                                alert.style = "visibility: hidden"
                                                validated = true
                                            }
                                        }} />
                                        <br/><br/><br/> 
                                        <button type = "submit" className = "test" disabled = {isSubmitting}>Submit</button>
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
    } else {
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

                <div className = "row">
                    {/* Left Side : with images */}
                    <div className="col-md-6" id="panel1">
                        <div className="img">
                            <img src="/logo.png" className="logopic" style={{padding: "25%", height: "100%" }}></img>
                        </div>
                    </div>

                    {/* Right Side : main content */}
                    <div className = "col-md-6">
                        <div className="container" style={{height:"100%"}}>

                            <br/><br/><br/><br/><br/>
                            <img className = "img-lock" src="/error.png" id = "user" alt="Forgot Password"></img>
                            <br/><br/>

                            <h2><b>INVALID PASSWORD RESET LINK</b></h2>
                            <h4>Your link has expired.</h4>
                            
                            <div className="login" style={{padding: "0 0 0 24px"}}>
                            <br/><br/>
                                <Link href = "/login">
                                    <button href="#" className="test">
                                        RETURN TO SIGN IN
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
	
}

export async function getServerSideProps(context) {
	let userId = context.params.slug[0]
    let token = context.params.slug[1]

    const verify = await fetch(`${process.env.API_URL}/user/forgot-password/${userId}/${token}`)
    const verification = await verify.json()
    let verified

    if(verification.success == true) verified = true
    else verified = false

    return {
        props: {
            verified,
            userId,
            token
        }
    }
}

export default ResetPassword
