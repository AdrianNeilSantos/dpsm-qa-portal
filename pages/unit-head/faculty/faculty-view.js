import LayoutUnitHead from '../../../components/layout-unit-head'

function FacultyView() {
    return (
        <LayoutUnitHead>
		<br />
            	<h4 align = "center"> View Profile </h4>
		<nav>
            		<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-main" role="tablist">
				<a className="nav-item nav-link active" id="basic-info-tab" data-toggle="tab" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true">Basic Information</a>
				<a className="nav-item nav-link" id="accomplishments-tab" data-toggle="tab" href="#accomplishments" role="tab" aria-controls="accomplishments" aria-selected="false">Accomplishments</a>
            		</div>
            	</nav>
		<div className="tab-content" id="nav-tabContent-main">
	    		<div className="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="basic-info-tab">
				<nav>
           				<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-basic-info" role="tablist">
                				<a className="nav-item nav-link active" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</a>
                				<a className="nav-item nav-link" id="educ-tab" data-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">Education</a>
                				<a className="nav-item nav-link" id="work-exp-tab" data-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">Work Experience</a>
            				</div>
            			</nav>
				<div className="tab-content" id="nav-tabContent-basic-info">
            				<div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">z</div>
            				<div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab">y</div>
            				<div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab">x</div>
            			</div>
			</div>
	    		<div className="tab-pane fade" id="accomplishments" role="tabpanel" aria-labelledby="accomplishments-tab">
				<nav>
            				<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-accomplishment" role="tablist">
						<a className="nav-item nav-link active" id="public-service-accomplishment-tab" data-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">Public Service Accomplishments</a>
						<a className="nav-item nav-link" id="publication-tab" data-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">Publications</a>
						<a className="nav-item nav-link" id="training-seminar-tab" data-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">Training/Seminars</a>
						<a className="nav-item nav-link" id="licensure-exam-tab" data-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">Licensure Exams</a>
						<a className="nav-item nav-link" id="research-grant-tab" data-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">Research Grants</a>
            				</div>
            			</nav>
				 <div className="tab-content" id="nav-tabContent-accomplishment">
	    				<div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab">a</div>
	    				<div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab">b</div>
	    				<div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab">c</div>
	    				<div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab">d</div>
	    				<div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab">e</div>
            			</div>
			</div>
            	</div>

		<style jsx>{`
		a.nav-item:focus{
			background-color:#78b6c2;
		}
		a.nav-item:hover{
			background-color:#78b6c2;
		}
		a.active{
			background-color:#78b6c2;
		}
	`}</style>
        </LayoutUnitHead>
    )
  }
  
  export default FacultyView