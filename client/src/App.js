import { Routes, Route} from "react-router-dom";
import { Home } from './component/pages/Home'
import { Portofolio } from "./component/pages/Portofolio";
import { Skills } from "./component/pages/Skills";
import { Layout } from "./component/layout/Layout";
import { Detail } from "./component/pages/Detail";
import { Input } from "./Data/Input";
import HalamanLain from "./contoh/contoh";
import Contoh from "./contoh/contoh2";
import { Darkmode } from "./component/pages/darkmode";
import EmailChecker from "./component/pages/EmailChecker";
function App() {
  return (
    <div >
    
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/portofolio" element={<Portofolio/>}/>
          <Route path="/skills" element={<Skills/>}/>
 
          <Route path="/input" element={<Input/>}/>
          <Route path="/input" element={<Input/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/input" element={<Contoh/>}/>

          <Route path="/dark" element={<Darkmode/>}/>
          <Route path="/email" element={<EmailChecker/>}/>
        </Routes>


    </div>
  );
}



export default App;
