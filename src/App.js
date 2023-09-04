import Home from './Home-Components/Home/Home';
import Docs from './Home-Components/Navbar/Docs';
import Generic from './Home-Components/Navbar/Generic/Generic';
import Expired from './Home-Components/Navbar/Generic/Expired';
import Usecases from './Home-Components/Navbar/Usecases';
import ViewDemo from './ViewDemo/ViewDemo';
import Nft from './ViewDemo/Components/Nft';
import RandaQ from './ViewDemo/Components/RandaQ';
import Uniswap from './ViewDemo/Components/Uniswap';
import Slots from './ViewDemo/Components/Slots';
import Startbuilding from './StartBuilding/Startbuilding';
import Introduction from './StartBuilding/Overview/Introduction';
import Basics from './StartBuilding/Overview/Basics';
import Steps from './StartBuilding/Overview/Steps';
import Tutorial from './StartBuilding/Tutorial/Tutorial';
import Conclusion from './StartBuilding/Conclusion/Conclusion';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
       
       <h1 style={{color:'white'}}>Hello this is App</h1>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/docs' element={<Docs/>} />
        <Route path='/generic' element={<Generic/>}/>
        <Route path='/generic/expired' element={<Expired/>} />
        <Route path='/usecases' element={<Usecases/>} />
        <Route path='/viewdemo' element={<ViewDemo/>} />
        <Route path='/viewdemo/nft' element={<Nft/>} />
        <Route path='/viewdemo/randaq' element={<RandaQ/>} />
        <Route path='/viewdemo/uniswap' element={<Uniswap/>} />
        <Route path='/viewdemo/slots' element={<Slots/>} />
        <Route path='/startbuilding/overview' element={<Startbuilding/>} />
        <Route path='/startbuilding/overview/introduction' element={<Introduction/>} />
        <Route path='/startbuilding/overview/basics' element={<Basics/>} />
        <Route path='/startbuilding/overview/steps' element={<Steps/>} />
        <Route path='/startbuilding/tutorial' element={<Tutorial/>}/>
        <Route path='/startbuilding/conclusion' element={<Conclusion/>} />
        </Routes>
    </div>
  );
}

export default App;
