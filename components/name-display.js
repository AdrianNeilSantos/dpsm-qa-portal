function NameDisplay(props){
	if(props.children != null) {
		return(
			<div>
				<h3 className="display-name" align = "center"> <u>{props.children}</u> </h3>
				<h3 className="display-position" align = "center"> {props.position}, {props.unit} </h3>
			</div>
		)
	} else {
		return(
			<div />
		)
	}
}

export default NameDisplay