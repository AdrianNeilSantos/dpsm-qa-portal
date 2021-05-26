import LayoutUnitHead from '../../components/layout-unit-head'
import AccomplishmentCount from '../../components/unit-head/dashboard/accomplishment-count/accomplishment-count'
import EmploymentStatus from '../../components/unit-head/dashboard/employment-status/employment-status'
import DegreeCount from '../../components/unit-head/dashboard/degree/degree'
import SETResults from '../../components/unit-head/dashboard/SET-results/SET-results'

function Dashboard() {
    return (
        <LayoutUnitHead>
		<div className="col-9">
            		<nav>
            			<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
					<a className="nav-item nav-link" id="accomplishment-count-tab" data-toggle="tab" href="#accomplishment-count" role="tab" aria-controls="accomplishment-count" aria-selected="false">Accomplishment Count</a>
					<a className="nav-item nav-link" id="employment-status-tab" data-toggle="tab" href="#employment-status" role="tab" aria-controls="employment-status" aria-selected="false">Employment Status</a>
					<a className="nav-item nav-link" id="SET-score-tab" data-toggle="tab" href="#SET-score" role="tab" aria-controls="SET-score" aria-selected="false">SET results</a>
					<a className="nav-item nav-link" id="degree-tab" data-toggle="tab" href="#degree" role="tab" aria-controls="degree" aria-selected="false">Attained Degrees</a>
            			</div>
            		</nav>
	    		<div className="tab-content" id="nav-tabContent">
	    			<div className="tab-pane fade show active" id="accomplishment-count" role="tabpanel" aria-labelledby="accomplishment-count-tab"><AccomplishmentCount /></div>
				<div className="tab-pane fade" id="employment-status" role="tabpanel" aria-labelledby="employment-status-tab"><EmploymentStatus /></div>
	    			<div className="tab-pane fade" id="SET-score" role="tabpanel" aria-labelledby="SET-score-tab"><SETResults /></div>
				<div className="tab-pane fade" id="degree" role="tabpanel" aria-labelledby="degree-tab"><DegreeCount /></div>
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
		</div>
        </LayoutUnitHead>
    )
  }
  
  export default Dashboard