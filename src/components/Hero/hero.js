import React, { useState } from "react";
import "./hero.css";
import Card from '../Cards/card';
import Card2 from '../Cards/card2';
const Hero = ({onChange}) => {
  const [fname, setFname] = useState(""); // Use useState with parentheses, not square brackets
  const [ccnNo, setCcnNo] = useState(""); // Corrected variable names
  const [expMM, setExpMM] = useState(""); // Corrected variable names
  const [expYY, setExpYY] = useState(""); // Corrected variable names
  const [cvvNo, setCvvNo] = useState(""); // Corrected variable names
  const [cvvLabel, setCvvLabel] = useState("CVC"); // Initial label
  const [errormsg, setErrormsg] = useState("");
  const [errormsg2, setErrormsg2] = useState("");
  const [errormsg3, setErrormsg3] = useState("");
  let [final, setFinal] = useState(0);
  //const Errormsglable = document.querySelector('.Errormsg.hidden');
  //Input space ======================>>>
  // Format the credit card input
  const formatCreditCardInput = (newValue) => {
    let inputValue = newValue.replace(/\D/g, ""); // Remove non-digit characters
    let formattedValue = "";

    for (let i = 0; i < inputValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " ";
      }
      formattedValue += inputValue[i];
    }

    return formattedValue;
  };
  //====================================>>
  const handlechecks = () => {
    // Check if any of the input fields are empty
    const isAnyFieldEmpty =
      fname.trim() === "" ||
      ccnNo.trim() === "" ||
      expMM.trim() === "" ||
      expYY.trim() === "" ||
      cvvNo.trim() === "";

    // Determine the final result based on conditions
    let finalResult = "";

    if (isAnyFieldEmpty) {
      finalResult = "Error: Some fields are empty.";
      document.getElementById("sub_lab").classList.remove("hidden");
    } else {
      finalResult = "No-Error";
      document.getElementById("sub_lab").classList.add("hidden");

    }

    setFinal(finalResult);
  };
  //====================================>>
  //Default_Err_function==============>>>
  const default_Error_fn_en = (id_args, colormode) => {
    document.documentElement.style.setProperty(colormode, "red");
    document.getElementById(id_args).classList.remove("hidden");
  };
  const default_Error_fn_di = (id, colormode1) => {
    document.getElementById(id).classList.add("hidden");
    document.documentElement.style.setProperty(colormode1, "#298aeb");
  };
  //CVC===============================>>>

  const handleCvvChange = (newValue) => {
    setCvvNo(newValue);
    if (newValue.trim() === "") {
      default_Error_fn_en("hidden_cvc", "--box_cvv");
      setErrormsg("The field shouldn't be empty");
    } else if (!/^\d+$/.test(newValue)) {
      default_Error_fn_en("hidden_cvc", "--box_cvv");
      setErrormsg("Only Numbers are allowed");
    } else if (newValue.length !== 3) {
      default_Error_fn_en("hidden_cvc", "--box_cvc");
      setErrormsg("Please enter a 3-digit cvc");
    } else {
      default_Error_fn_di("hidden_cvc", "--box_cvv");
      setErrormsg("");
    }
    onChange(newValue);
  };
  //YY===============================>>>

  const handleyyChange = (newValue) => {
    setExpYY(newValue); //State set

    if (newValue.trim() === "") {
      default_Error_fn_en("hidden_cvc", "--box_yy");
      setErrormsg("The field shouldn't be empty");
    } else if (!/^\d+$/.test(newValue)) {
      default_Error_fn_en("hidden_cvc", "--box_yy");
      setErrormsg("Only Numbers are allowed");
    } else {
      default_Error_fn_di("hidden_cvc", "--box_yy");
      setErrormsg("");
    }
  };
  //MM===============================>>>

  const handlemmChange = (newValue) => {
    setExpMM(newValue);

    if (newValue.trim() === "") {
      default_Error_fn_en("hidden_cvc", "--box_mm");
      setErrormsg("The field shouldn't be empty");
    } else if (!/^\d+$/.test(newValue)) {
      default_Error_fn_en("hidden_cvc", "--box_mm");
      setErrormsg("Only Numbers are allowed");
    } else if (newValue > 12 || newValue < 1) {
      default_Error_fn_en("hidden_cvc", "--box_mm");
      setErrormsg("Enter valid month");
    } else {
      default_Error_fn_di("hidden_cvc", "--box_mm");
      setErrormsg("");
    }
  };
  //Ccn===============================>>>

  const handleCcnChange = (newValue) => {
    setCcnNo(newValue);
    if (newValue.trim() === "") {
      default_Error_fn_en("hidden_ccn", "--box_ccn");
      setErrormsg2("The field shouldn't be empty");
    } else if (!/^\d+$/.test(newValue.replace(/\s/g, ""))) {
      default_Error_fn_en("hidden_ccn", "--box_ccn");
      setErrormsg2("Only Numbers are allowed");
    } else if (newValue.length !== 19) {
      default_Error_fn_en("hidden_ccn", "--box_ccn");
      setErrormsg2("Please enter a 16-digit card number");
    } else {
      default_Error_fn_di("hidden_ccn", "--box_ccn");
      setErrormsg2("");
    }
    const formattedCcn = formatCreditCardInput(newValue);
    setCcnNo(formattedCcn);
  };
  //FNAME===============================>>>

  const handlefnameChange = (newValue) => {
    setCvvNo(newValue);
    
    if (newValue.trim() === "") {
      default_Error_fn_en("hidden_fname", "--box_fname");
      setErrormsg3("The field shouldn't be empty");
    } else if (!/^[a-zA-Z]+$/.test(newValue)) {
      default_Error_fn_en("hidden_fname", "--box_fname");
      setErrormsg3("Only alphabets are allowed");
    } else {
      default_Error_fn_di("hidden_fname", "--box_fname");
      setErrormsg3("");
    }
  };
  //***************************************

  return (
    
    <div className="body-box">

      <div className="cardman"><Card/></div>
      <div className="cardman2"><Card2 cvvpass = {cvvNo}/></div>
      <div className="form-body">
        <form action="">
          <label htmlFor="fname">CARDHOLDER NAME</label>
          <br />
          <input
            type="text"
            id="fname"
            placeholder="e.g. Jane Appleseed"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
              handlefnameChange(e.target.value);
            }}
          />
          <label id="hidden_fname" class="Errormsg hidden">
            Error : {errormsg3}
          </label>
          <br />
          <br />
          <label htmlFor="ccn_no">CARD NUMBER</label>
          <br />
          <input
            type="text"
            id="ccn_no"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="19"
            value={ccnNo}
            onChange={(e) => {
              setCcnNo(e.target.value);
              handleCcnChange(e.target.value);
            }}
          />
          <label id="hidden_ccn" class="Errormsg hidden">
            Error :{errormsg2}
          </label>
          <br />
          <br />
          <div className="subcard">
            <div className="sub--input-lable">
              <label htmlFor="exp">EXP.DATE (MM/YY)</label>
              <label htmlFor="cvv_no">
                &emsp;&emsp;&emsp;&emsp;&emsp;{cvvLabel}
              </label>
            </div>
            <br />
            <div className="sub-input-box">
              <input
                className="xinfo"
                type="text"
                id="expmm"
                placeholder="MM"
                maxLength="2"
                value={expMM}
                onChange={(e) => {
                  setExpMM(e.target.value);
                  handlemmChange(e.target.value);
                }}
              />
              <input
                className="xinfo"
                type="text"
                id="expyy"
                placeholder="YY"
                maxLength="2"
                value={expYY}
                onChange={(e) => {
                  setExpYY(e.target.value);
                  handleyyChange(e.target.value);
                }}
              />
              <input
                className="xinfo"
                type="text"
                id="cvv_no"
                placeholder="e.g. 123"
                value={cvvNo}
                maxLength="3"
                onChange={(e) => {
                  setCvvNo(e.target.value);
                  handleCvvChange(e.target.value);
                }}
              />
            </div>
            <label id="hidden_cvc" class="Errormsg hidden">
              Error : {errormsg}
            </label>
          </div>
          <button
            id="sub_button"
            type="submit"
            form="form"
            value="Submit"
            onClick={handlechecks}
          >
            Submit
          </button>
          <label id="sub_lab" class="Errormsg hidden">
            Error : {final}
          </label>
        </form>
      </div>
    </div>
  );
};

export default Hero; // Component names should start with a capital letter
