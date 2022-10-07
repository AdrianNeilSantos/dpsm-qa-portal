import Router from 'next/router'
import comparePassword from '../services/faculty/change-password/comparePassword'
import updatePassword from '../services/faculty/change-password/updatePassword'
import { useCookies } from "react-cookie";

function ChangePassword(props) { 
    let validated
    
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    return (
        <div className="card" style={{marginTop:"2rem"}}>
            <h2 className="center"> Change Password Form</h2>
            <div role="alert" id="changepassalert" style={{visibility:"hidden", height:"1.5rem", marginBottom:"-2rem"}}></div>
            <form className="row g-3 p-3">
                <div className="d-grid gap-2 col-12 d-md-block">
                    <div className = "form-group row p-3">
                        <label htmlFor="old-password" className = "required-label" style={{fontSize: "18px"}}>Current Password:</label>
                        <input className = "form-control" type="password" id="old-password" name="old-password" placeholder='Current Password' required onBlur={async () => {
                            let alert = document.getElementById("changepassalert")

                            const oldPassword = document.getElementById('old-password').value
                            let res = await comparePassword(oldPassword, props.children.userId, props.token)

                            if(res.success == true) {
                                alert.style = "visibility: hidden"
                                setValidate(true)
                            } else {
                                alert.className = "alert alert-danger"
                                alert.style = "visibility: visible"
                                alert.innerHTML = 'The current password is incorrect'

                                setValidate(false)
                            }
                        }} />
                    </div>


                    <div className = "form-group row p-3">
                        <label htmlFor="new-password" className = "required-label" style={{fontSize: "18px"}}>New Password:</label>
                        <input className = "form-control" type="password" id="new-password" name="new-password" placeholder='New Password' required />
                    </div>

                    <div className = "form-group row p-3">
                        <label htmlFor="confirm-new-password" className = "required-label" style={{fontSize: "18px"}}>Confirm New Password:</label>
                        <input className = "form-control" type="password" id="confirm-new-password" name="confirm-new-password" placeholder='Confirm Password' required onChange={async () => {
                            let alert = document.getElementById("changepassalert")
                                
                            const newPassword = document.getElementById('new-password').value
                            const confirmPassword = document.getElementById('confirm-new-password').value

                            if(newPassword != confirmPassword) {
                                alert.className = "alert alert-danger"
                                alert.style = "visibility: visible"
                                alert.innerHTML = 'The passwords do not match'

                                setValidate(false)

                            } else {
                                alert.style = "visibility: hidden"
                                setValidate(true)
                            }
                        }} />
                    </div>
                    <br/>
                    <div className="text-end row p-1">
                        <button type="button" className = "customButton green" style={{margin: "auto", width:"25%"}} onClick = {async (e) => {
                                    let alert = document.getElementById("changepassalert")
                                    
                                    if(!validated) e.preventDefault()
                                    else {
                                        const newPassword = document.getElementById('new-password').value
                                        let res = await updatePassword(newPassword, props.children.userId, props.token)

                                        if(res.success == true) { 
                                            alert.className ="alert alert-success"
                                            alert.style = "visibility: visible"
                                            alert.innerHTML = res.message
            
                                            $("#changepassalert").fadeTo(5000, 500).slideUp(500, function(){
                                                $("#changepassalert").slideUp(500);
                                                removeCookie("user", {path:'/'});
                                                Router.push('/login', '/login')
                                            });
                                        } else { 
                                            alert.className = "alert alert-danger"
                                            alert.style = "visibility: visible"
                                            if(res.error) alert.innerHTML = res.error[0].message
                                            else alert.innerHTML = res.message
                                        }
                                    }
                                    
                                }}><span className="material-icons-sharp">check_circle</span>Change Password</button>
                    </div>
                </div>
            </form>
            <style jsx>{`
		        label.required-label:after{
			        content: " *";
			        color: #f00;
		        }
		        h6:before{
			        content: "* ";
			        color: #f00;
		        }`       
            }</style>
        </div>
    )
    
    function setValidate(bool) {
        validated = bool
    }
  }

  export default ChangePassword
