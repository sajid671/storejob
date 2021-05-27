import logo from './logo.svg';
import './App.css';
import { Data } from './importDB';
import {useSelector} from 'react-redux';
import Nav from './Components/NavBar';

function App() {
const Products = useSelector((state)=>state.shop.products)
  return (
    <>
    <Data/>
    <Nav/>
    </>
  );
}

export default App;
