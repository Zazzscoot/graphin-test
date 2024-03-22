import logo from './logo.svg';
import './App.css';
import React from 'react';
import Graphin , { Utils } from '@antv/graphin';
// mock data
const data = Utils.mock(10).circle().graphin();
const App = () => {
  return <Graphin data={data} />;
};

export default App;
