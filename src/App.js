import './App.css';
import BarraNav from './componentes/BarraNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/pages/Home';
import Formula1 from './componentes/pages/Formula1';
import Formula2 from './componentes/pages/Formula2';
import Formula3 from './componentes/pages/Formula3';

import RedBull from './componentes/pages/f1Teams/RedBull/RedBull';
import Mercedes from './componentes/pages/f1Teams/Mercedes/Mercedes';
import Ferrari from './componentes/pages/f1Teams/Ferrari/Ferrari';
import AstonMartin from './componentes/pages/f1Teams/AstonMartin/AstonMartin';
import McLaren from './componentes/pages/f1Teams/McLaren/McLaren';
import Alpine from './componentes/pages/f1Teams/Alpine/Alpine';
import Williams from './componentes/pages/f1Teams/Williams/Williams';
import Haas from './componentes/pages/f1Teams/Haas/Haas';
import AlfaRomeo from './componentes/pages/f1Teams/AlfaRomeo/AlfaRomeo';
import AlphaTauri from './componentes/pages/f1Teams/AlphaTauri/AlphaTauri';

import Bottas from './componentes/pages/f1Teams/AlfaRomeo/Bottas';
import Zhou from './componentes/pages/f1Teams/AlfaRomeo/Zhou';
import Ricciardo from './componentes/pages/f1Teams/AlphaTauri/Ricciardo';
import Tsunoda from './componentes/pages/f1Teams/AlphaTauri/Tsunoda';
import Gasly from './componentes/pages/f1Teams/Alpine/Gasly';
import Ocon from './componentes/pages/f1Teams/Alpine/Ocon';
import Alonso from './componentes/pages/f1Teams/AstonMartin/Alonso';
import Stroll from './componentes/pages/f1Teams/AstonMartin/Stroll';
import Leclerc from './componentes/pages/f1Teams/Ferrari/Leclerc';
import Sainz from './componentes/pages/f1Teams/Ferrari/Sainz';
import Magnussen from './componentes/pages/f1Teams/Haas/Magnussen';
import Hulkenberg from './componentes/pages/f1Teams/Haas/Hulkenberg';
import Piastri from './componentes/pages/f1Teams/McLaren/Piastri';
import Norris from './componentes/pages/f1Teams/McLaren/Norris';
import Hamilton from './componentes/pages/f1Teams/Mercedes/Hamilton';
import Russell from './componentes/pages/f1Teams/Mercedes/Russell';
import Verstappen from './componentes/pages/f1Teams/RedBull/Verstappen';
import Perez from './componentes/pages/f1Teams/RedBull/Perez';
import Albon from './componentes/pages/f1Teams/Williams/Albon';
import Sargeant from './componentes/pages/f1Teams/Williams/Sargeant';

/* import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';

import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull';
import RedBull from './componentes/pages/f1Teams/RedBull'; */

function App() {
  return (
    <>
      <Router>
        <BarraNav />
          <Routes>
            <Route path='/' exact Component={Home}/>

            <Route path='/Formula1' exact Component={Formula1}/>
            <Route path='/Formula2' exact Component={Formula2}/>
            <Route path='/Formula3' exact Component={Formula3}/>

            <Route path='/Formula1/RedBull' exact Component={RedBull}/>
              <Route path='/Formula1/RedBull/Verstappen' exact Component={Verstappen}/>
              <Route path='/Formula1/RedBull/Perez' exact Component={Perez}/>
            <Route path='/Formula1/Mercedes' exact Component={Mercedes}/>
              <Route path='/Formula1/Mercedes/Hamilton' exact Component={Hamilton}/>
              <Route path='/Formula1/Mercedes/Russell' exact Component={Russell}/>
            <Route path='/Formula1/Ferrari' exact Component={Ferrari}/>
              <Route path='/Formula1/Ferrari/Leclerc' exact Component={Leclerc}/> 
              <Route path='/Formula1/Ferrari/Sainz' exact Component={Sainz}/>
            <Route path='/Formula1/AstonMartin' exact Component={AstonMartin}/>
              <Route path='/Formula1/AstonMartin/Alonso' exact Component={Alonso}/>
              <Route path='/Formula1/AstonMartin/Stroll' exact Component={Stroll}/>
            <Route path='/Formula1/McLaren' exact Component={McLaren}/>
              <Route path='/Formula1/McLaren/Norris' exact Component={Norris}/>
              <Route path='/Formula1/McLaren/Piastri' exact Component={Piastri}/>
            <Route path='/Formula1/Alpine' exact Component={Alpine}/>
              <Route path='/Formula1/Alpine/Gasly' exact Component={Gasly}/>
              <Route path='/Formula1/Alpine/Ocon' exact Component={Ocon}/>
            <Route path='/Formula1/Williams' exact Component={Williams}/>
              <Route path='/Formula1/Williams/Albon' exact Component={Albon}/>
              <Route path='/Formula1/Williams/Sargeant' exact Component={Sargeant}/> 
            <Route path='/Formula1/Haas' exact Component={Haas}/>
              <Route path='/Formula1/Haas/Hulkenberg' exact Component={Hulkenberg}/>
              <Route path='/Formula1/Haas/Magnussen' exact Component={Magnussen}/>
            <Route path='/Formula1/AlfaRomeo' exact Component={AlfaRomeo}/>
              <Route path='/Formula1/AlfaRomeo/Bottas' exact Component={Bottas}/>
              <Route path='/Formula1/AlfaRomeo/Zhou' exact Component={Zhou}/>
            <Route path='/Formula1/AlphaTauri' exact Component={AlphaTauri}/>
              <Route path='/Formula1/AlphaTauri/Tsunoda' exact Component={Tsunoda}/>
              <Route path='/Formula1/AlphaTauri/Ricciardo' exact Component={Ricciardo}/>

{/*             <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>

            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
            <Route path='/Formula3' exact Component={Formula3}/>
 */}          </Routes>
      </Router>
    </>
  );
}

export default App;
