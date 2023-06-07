import Body from "./components/body";
import Menu from "./components/menu";


function App() {
  return (
    <div className="container-fluid w-100 bg-danger d-flex flex-row app-div">
      <div className="col-3">
        <Menu/>
      </div>
      <div className="col-11">
        <Body/>
      </div> 
    </div>
  )
}

export default App
