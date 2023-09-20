import React, { useState } from "react";
import Card from '../Cards/card';
import Card2 from '../Cards/card2';
import Hero from '../Hero/hero'
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");

  return (
    <div>
      <Card inputValue={secondInputValue}/>
      <Hero onChangecvc={setInputValue} onChangeccn={setSecondInputValue} />
      <Card2 inputValue={inputValue}/>
    </div>
  )
}

export default Home;