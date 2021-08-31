import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function addEmployment(data, token, facultyId) {
	try {
		if (token) {
			let bod = {
                facultyId: `${facultyId}`,
                employmentPositionId: `${data.employmentPositionId}`,
                status: `${data.status}`,
				category: `${data.category}`,
				startDate: `${data.startDate}`
            }
			if(`${data.endDate}`) {
                bod.endDate = `${data.endDate}`
			}
			try {
				const response = await axios.post("http://agila.upm.edu.ph:3000/api/faculty/basic-info/add/employment", bod, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				return response.data
			} catch (err) {
				console.error(err)
				return err
			}
		}
	} catch (err) {
		console.error(err)
		return err
	}
}