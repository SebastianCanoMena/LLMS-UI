import sendIcon from './images/sendIcon.png'

export default function Body()
{

	return(
		<div className='container'>
			<div className='row d-flex flex-column'>
				
				<div className='column-sm-10'>				
					
				</div>

				<div className='column-sm-2 justify-content-between'>
					<input type='text' value='Enter your thought' className='px-7'/>
					<img src={sendIcon}/>
				</div>

			</div>
		</div>
	)
}
