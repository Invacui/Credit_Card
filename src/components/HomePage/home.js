import React, { useState } from "react";
import Card from '../Cards/card';
import Card2 from '../Cards/card2';
import Hero from '../Hero/hero';
import './home.css'
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [thirdInputValue, setThirdInputValue] = useState("");
  const [fourthInputValue, setFourthInputValue] = useState("");
  const [vInputValue, setVInputValue] = useState("");

  return (
    <div className="body_main" >
      <div class="insidebox" id="cards">
        <Card ccn={secondInputValue}
        fname ={thirdInputValue}
        mm ={fourthInputValue}
        yy ={vInputValue}/>
        <Card2 inputValue={inputValue}/>
      </div>
      <div class="insidebox" id="form_box">
        <Hero onChangecvc={setInputValue}
         onChangeccn={setSecondInputValue}
         onChangefname = {setThirdInputValue}
         onChangemm = {setFourthInputValue}
         onChangeyy ={setVInputValue} />
      </div>

    </div>
  )
}

export default Home;