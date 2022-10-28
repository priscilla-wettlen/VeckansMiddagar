import React from 'react';
import './App.css';
import styled from 'styled-components';
import Card from './components/card/Card';

const Title = styled.h1`
text-align: center;
font-size: 3rem;
color: #262626;
margin: 20px 50px 50px 50px;
`;

function App() {
  return (
    <div className="App">
      <Title>Weekly Dinners</Title>
      <Card />
    </div>
  );
}

export default App;
