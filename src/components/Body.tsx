import sendIcon from '../images/sendIcon.svg'

export default function Body()
{

	return(
		<div className="container h-100 bg-primary m-0">
		  <div className="row d-flex flex-column">
			<div className="col body-output"></div>
  
			<div className="col-9 align-self-end body-input">
			  <input type="text" value="Enter your thought" className="px-3 bg-gray"/>
			  <img src={sendIcon} />
			</div>
		  </div>
		</div>
	)
}
