import { Link } from 'react-router-dom'

export default function Menu()
{
	return(
		<div className='Menu'>
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
	)
}					
					