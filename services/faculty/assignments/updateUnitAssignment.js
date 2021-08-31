import axios from "axios"

export default async function updateUnitAssignment(updatedUser, unitId, token) {
	try {
		if (token) { 
			let response
			if(updatedUser == '0') updatedUser = null

			let url = 'http://agila.upm.edu.ph:3000/api/faculty/basic-info/unit/' + unitId;
			response = await axios({
				method: 'PUT',
				url: url,
				data: {
					incomingUnitHead: updatedUser,
					approverRemarks: null
				},
				headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
			})	
			
			return response.data
		}
	} catch (err) {
		console.error(err)
		return err
	}
}