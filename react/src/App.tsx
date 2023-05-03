import React, { FC, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { useNui } from './nui/useNui';
import { fetchNui } from './nui/sendNui';

import GTA from "./assets/images/gta.jpg"

import { useStateProvider } from './context/context';
import ButtonChangeTheme from './components/widgets/ButtonChangeTheme';

const App: FC = () => {

  const { state,dispatch } = useStateProvider() /* เก็บ State บน Store คล้ายๆ Redux */

  const [display,setDisplay] = useState(false)

  useNui('display',(payload: any) => {
    if(payload.ui != undefined){
      setDisplay(payload.ui)
    }
    
  })

  const GlobalStyle = createGlobalStyle`
  body{
    display: ${display ? 'block' : 'none'};
    color: ${state.theme == "black" ? "white" : "black"};
  }

  .btn{
    background-color: ${state.theme == "black" ? "white" : "black"};
    color: ${state.theme == "black" ? "black" : "white"};
    padding: 10px 10px;
    margin: 10px auto;
    display: block;
  }

  .container {
    background: ${state.theme};
  }
`;

const set_position_up = () => {
  fetchNui('set_position_up')
}

  return (
    <>
      <GlobalStyle />
      <div className='container'>
        <img style={{ width: "100%" }} src={GTA} />
        <h3 style={{ textAlign: "center" }}>NUBDev React Hot load</h3>

        <ButtonChangeTheme />
        <button className='btn' onClick={() => set_position_up()}>Set Position Up</button>
      </div>
    </>
  );
};

export default App;
