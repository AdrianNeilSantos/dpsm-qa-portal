import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function approveLicense(formData, approveFlag, facultyId, token) {
	let cookieData = jwt.decode(token)
    
	let status
	if(approveFlag) {
		if(cookieData.role == 2) {
			status = 'Verified'
		} else if(cookieData.role == 3) {
			status = 'Approved'
		}
	} else status = 'Rejected'
	formData.append('status', status)

	try {
		if (token) {
			try {
				let url = 'http://agila.upm.edu.ph:3001/api/faculty/accomplishment/' + facultyId;
				const response = await axios({
					method: 'PUT',
					url: url + '/licensure-exam',
					data: formData,
					headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
				})	
				return response.data
			}  catch (err) {
				console.error(err)
				return err
			}
		}
	} catch (err) {
		console.error(err)
		return err
	}
}