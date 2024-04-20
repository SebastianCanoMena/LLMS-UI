import send from "../images/send.svg"
import { useState } from "react"
import menuIcon from "../images/menuIcon.png"
import Menu from "./Layout/Menu"

export default function Body()
{

	const [display, setDisplay] = useState(false) 
	const a = () => {
		setDisplay((display) => display = !display)
	}

	return(
		<div className="body-div-parent">
			<div className="body-output">
				<button onClick={a}><img src={menuIcon}  /></button>
				{display && <Menu/>}
				<div className=''>
					<div className=''>
					</div>
				</div>
			</div>
  
				<form className="body-input-form">
			  		<input type="text" placeholder="Escriba una pregunta" className="body-input"/>
			  		<button type="submit" className="body-send-button"><img src={send}/></button>
			  	</form>

		</div>
	)
}
