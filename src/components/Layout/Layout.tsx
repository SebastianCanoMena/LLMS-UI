import Body from "../Body"

export default function Layout(props:any){
    return(
        <>
        <Body/>
        <div>
            {props.children}
        </div>
        </>
    )
}