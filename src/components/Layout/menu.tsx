import { Link } from 'react-router-dom'

export default function Menu()
{
	return(
		<div className='container m-0 h-100 menu'>
			<div className='row p-2 d-flex flex-column text-center'>
				<Link to='/' className='menu-link'>
					<div className='col menu-col '>
						Home
					</div>
				</Link>
				<Link to='/history' className='menu-link'>
					<div className='col menu-col '>
						History
					</div>
				</Link>
				<Link to='/account' className='menu-link'>
					<div className='col menu-col'>
						Account
					</div>
				</Link>
				<Link to='/settings' className='menu-link'>
					<div className='col menu-col'>
						Settings
					</div>
				</Link>
			</div>	
		</div>
	)
}					
					