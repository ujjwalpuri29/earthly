import React from 'react';
import Bgimage from './components/bgimage';
import Navbar from './components/navbar';
import Contents from './components/contents';
import Credit from "./components/credit"
import Features from './components/features';
import Footer from './components/footer';
import Homepage from './components/home';
import ImageGrid from './components/imageGrid';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <Bgimage />
    <Navbar />
    <Homepage />
    <ImageGrid />
    <Contents />
    <Features />
    <Footer />
    <Credit />
  </React.Fragment>
  );
}

export default App;
