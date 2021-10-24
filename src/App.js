import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Form from './components/Form';
// import { Router } from 'react-router';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   // Link
// } from "react-router-dom";
function App() {
  return (
      <>
      <Navbar navtit="Calcofy" tab1="nav-link active" tab2="nav-link " searchBar={false}/>
      <Form/>
      </>
  );
}

export default App;
