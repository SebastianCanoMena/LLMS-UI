import sendIcon from '../images/sendIcon.svg'

export default function Body()
{

	return(
		<div className="container h-100 m-0">
		  <div className="row d-flex flex-column min-vh-100">
			<div className="col body-output">
				<div className='row d-flex justify-content-center'>
					<div className='col-8 m-5 bg-success'>
						<p className='text-left'>dddddasdadsdadsadsdad</p>
					</div>
				</div>
			</div>
  
			<div className="col-9 align-self-end mb-4 bg-success w-100">
			  <input type="text" value="Enter your thought" className="my-5 px-3 bg-gray body-input"/>
			  <img src={sendIcon} />
			</div>
		  </div>
		</div>
	)
}
