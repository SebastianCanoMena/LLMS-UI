import Body from "./components/Body";
import {Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import History from "./components/History";
import Account from "./components/Account";
import Settings from "./components/Settings";

function App() {
  return (
    <Layout>
    <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="history" element={<History/>}/>
        <Route path="account" element={<Account/>}/>
        <Route path="settings" element={<Settings/>}/>
    </Routes>
    </Layout>
  )
}

export default App
