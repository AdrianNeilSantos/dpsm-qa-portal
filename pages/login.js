import Link from 'next/link'
import Head from 'next/head'
import { Formik, Form, Field } from "formik"
import axios from "axios"
import Router from 'next/router'
import jwt from 'jsonwebtoken'
import { useCookies } from "react-cookie"


function Login() {
  let loginDetails = {
    username: "",
    password: "",
  }
  let errorMessage = ""

  const [cookie, setCookie] = useCookies(["user"])
  
  return (
  <div>
    <Head>
      <title>UPM QA Portal</title>
      <link rel="stylesheet" href= "/authentication.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
      <link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
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

        {/* Right Side : main login content*/}
        <div className="col-md-6">
            <div className="login">
              <div className="container">
                <div className="img">
                  <img src="/user.png" id="user" alt="user" style={{margin: "auto", marginBottom: "10px", width: "140px", height: "140px"}}/>
                </div>
                
                <br/>
                <h2><b>QUALITY ASSURANCE PORTAL</b></h2>
                <h4>University of the Philippines Manila</h4>
                <div id="login">

                <Formik
                  initialValues={loginDetails}
                  onSubmit={async (values) => {
                  try {
                    
                    let token = null
                    const tokenRes = await axios.post(process.env.API_URL + "/login", {
                      upemail: `${values.username}`,
                      password: `${values.password}`
                    })

                      if(tokenRes.data.success) {
                      setCookie("user", tokenRes.data.result.token, {
                        path: "/",
                        maxAge: 3600, // Expires after 1hr
                        sameSite: true,
                      })
                      token = jwt.decode(tokenRes.data.result.token)
                      let role = token.role
                      if(role == 1) { // faculty 
                        Router.push('/faculty/basic-info')
                      } else if (role == 2 || role == 3) { // unit head or dept. chair
                        Router.push('/faculty')
                      } else if(role == 5) { //admin
                        Router.push('/admin')
                      }
                    } else {
                      window.alert('something wrong')
                    }
                  } catch (err) {
                    console.error(err.response.data.errors[0].message)
                    errorMessage = err.response.data.errors[0].message
                    let alert = document.getElementById("alert")
                    alert.setAttribute("style", "visibility: visible");
                    values.username=""
                    values.password=""
                    return err
                  }
                }}
              >{({ values, errors, touched, isSubmitting }) => (
                  
                <div className="login-form">
                  <Form action="">
                    
                    <div className="alert alert-danger" role="alert" id="alert" >
                      {errorMessage}
                    </div>

                    <Field type="email" placeholder="UP Mail" id="username" name="username"/>
                    <Field type="password" placeholder="Password" id="password" name="password" />
                    
                    <br/><br/>

                    <div className="forget-pass">
                      <Link href = "/forgot-password"><a href = "#">Forgot Password?</a></Link>
                    </div>
                    <br/>

                    <button className="test" type="submit" disabled={isSubmitting}>Login</button>
                  </Form>
                </div>

              )}
                </Formik>
                </div>
              </div>
            </div>
        </div>
    </div>




    <style jsx>{`
      #panel1{
        background-image: '/upm.jpg';
        background-size: cover; 
        background-color: #800020;
        }
      `}</style>


  </div>
  )
}
  
export default Login