import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function deleteClerk(userId, token) {
	try {
		if (token) {
			try {
				const response = await axios.delete("http://localhost:3001/api/user/admin/" + userId, {
					headers: {
						Authorization: `Bearer ${token}`
					}
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