import { useState } from 'react';
import Form from './components/Form'
import Content from './components/Content'
import Themes from './components/Themes'
import './App.css';

function App() {

const [SelectedTheme, myTheme1] = useState("")


const onFormSub = (aclr) =>{
  myTheme1(aclr)
}
 
  return (
    <div className='app-container'>
      <Content theme = {SelectedTheme} />
      <Form theme = {SelectedTheme}/>
      <Themes getData = {onFormSub} />
    </div>
  );
}

export default App;
