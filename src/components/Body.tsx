import send from "../images/send.svg"

export default function Body()
{

	return(
		<div>
			<div className="body-output">
				<div className=''>
					<div className=''>
					</div>
				</div>
			</div>
  
				<form className="body-input-form">
			  		<input type="text" defaultValue="Ssss" className="body-input"/>
			  		<button type="submit" className="button"><img src={send}/></button>
			  	</form>

		</div>
	)
}
