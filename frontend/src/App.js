import React, {useState, useMemo} from 'react'

import styled from "styled-components"

import bg from './img/bg.png'

import {MainLayout} from './styles/Layouts'

import Orb from "./Components/Orb/Orb";

import Navigation from "./Components/Navigation/Navigations";

function App() {
  const [active, setActive] = useState(1)
  const orbMemo = useMemo(() => {
    return <Orb/>
  },[])

  return (
    <AppStyled bg = {bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
   height: 100vh;
   background-image: url(${props => props.bg});
`;

export default App; 
