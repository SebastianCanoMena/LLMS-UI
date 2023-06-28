import Menu from "./menu";

export default function Layout(props:any){
    return(
        <>
        <Menu/>
        <div>
            {props.children}
        </div>
        </>
    )
}