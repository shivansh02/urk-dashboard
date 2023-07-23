import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Welcome from './components/welcome';
import RetireIncome from './components/retireIncome';
import RetirementStrat from './components/retirementStrat';
import './index.css'
import BottomArt from './components/bottomArt';
import BellFloating from './components/bellFloating';

export default function App() {
  return (
    <div className='dashboard flex flex-col md:flex-row md:ml-20'>
    <BellFloating/>
    <Sidebar/>
    <Welcome/>
    <RetireIncome/>
    <RetirementStrat/>
    <BottomArt/>


    </div>
  )
}
