import React from 'react'
import Select from 'react-select'

class PublicationFormAuthor extends React.Component{
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
				<div className = "form-group col-md-12">
					<label htmlFor = "PublicationAuthorDPSM[]" style={{fontSize:"16px"}}> DPSM Co-Authors </label>
					<Select className = "col-md-12" name = "PublicationAuthorDPSM[]" isMulti options = {authors} />
				</div>
			</div>
			<div>
				{this.state.duplicateAuthors}
			</div>
		</div>
		)
	}
}

export default PublicationFormAuthor
