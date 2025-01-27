import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateResearch(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {
	        let url = process.env.API_URL + '/faculty/accomplishment/' + facultyId;

		    if(formData.get('proof') == "") {
				formData.delete('proof')
			}
			
		    const response = await axios({
			    method: 'PUT',
			    url: url + '/research-grant',
			    data: formData,
			    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		    })	

		    let bodData
		    for(var pair of formData.entries()) {
		    	if(pair[0] == 'add_res') {
		    		bodData = new FormData()
		    		if(pair[1] == 0) {
		    			bodData.append('facultyId', facultyId)	
		    		} else {
		    			bodData.append('facultyId', pair[1])	
		    		}
		    		bodData.append('researchId', formData.get('researchId'))
		    		const auth = await axios({
			        	method: 'POST',
					    url: process.env.API_URL + '/faculty/accomplishment/add/researcher',
					    data: bodData,
					    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
			        })
		    	}
            }

		    console.log(response.data)
			return response.data
	    } else {
	        console.log(access.result.message)
		}
	} catch (err) {
		console.error(err)
		return err
	}
}