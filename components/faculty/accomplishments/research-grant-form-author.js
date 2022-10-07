import React from 'react'
import Select from 'react-select'

class ResearchGrantFormAuthor extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			duplicateAuthors: []
		}
	}
	render(){	
		let authors = Object.keys(this.props.faculty).map(key => {
			return(
				{value: this.props.faculty[key].facultyId, label: this.props.faculty[key].lastName + ', ' + this.props.faculty[key].firstName}
			);
		});
		
		return(
		<div>
			<div className = "row pb-3">
				<div className = "form-group">
					<label htmlFor = "ResearchAuthorDPSM[]" style={{fontSize:"16px"}}> DPSM Researchers </label>
					<Select className = "col-md-12" name = "ResearchAuthorDPSM[]" isMulti options = {authors} required />
				</div>
			</div>
			<div>
				{this.state.duplicateAuthors}
			</div>
		</div>
		)
	}
}

export default ResearchGrantFormAuthor
