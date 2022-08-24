import React, { useState } from "react";
import { FormInput } from "../components/FormInput";

export default function TransferInputScreen() {
  var selectedUnit ="wei";
  const [values, setValues] = useState({
    receiverName: "",
    walletAddress: "",
    amount: "",
    transferDate: "",
  });

  const inputs = [
    {
      id: 1,
      name: "receiverName",
      type: "text",
      placeholder: "",//"Receiver Name",
      errorMesage:"Receiver Name Should Be At Least 2 Characters And Should'nt include Special Character",
      label: "Receiver Name",
      pattern: "^[A-Z]{3-10}$",
      required:true,
    },
    {
      id: 2,
      name: "walletAddress",
      type: "text",
      title:"WalletAddress",
      placeholder: "",//"Wallet Address",
      errorMesage:"It Should Be Valid Wallet Address",
      label: "Wallet Address",
      patter: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$',
      required:true,
    },
    {
      id: 3,
      name: "amount",
      type: "number",
      min:0,
      placeholder: "Amount",
      errorMesage:"It Should Be Number",
      label: "Amount",
    },
    {
      id: 4,
      name: "transferDate",
      type: "date",
      placeholder: "Transfer Date",
      label: "Transfer Date",
      errorMesage:"Please Select Future Date",
      required:true,
      }, 
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); //preventing reflesihing page when click submit
  };

  const onChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  console.log(values);
  //console.log(today)
  //console.log(new Date().toISOString());
  //var dates = values.transferDate;//.toString.split('-');
  //console.log(dates);
  var transferDateDetails = values.transferDate.split('-');
  var today = new Date().toISOString().slice(0, 10)
  var todayDetail = today.split('-');

  console.log("today year",todayDetail[0]);
  console.log("today mount",todayDetail[1]);
  console.log("today day",todayDetail[2]);

  console.log("transfer year",transferDateDetails[0]);
  console.log("transfer mount",transferDateDetails[1]);
  console.log("transfer day",transferDateDetails[2]);

  if(todayDetail[0]>transferDateDetails[0]||todayDetail[1]>transferDateDetails[1]
    ||todayDetail[2]>transferDateDetails[2]){
     inputs[3].required=true;
    }

  return (
    <div>
        
      <form onSubmit={handleSubmit}>
      
        {inputs.map((input) => (
          <FormInput
            key = {input.id}
            {...input}
            value = {values[input.name]} 
            onChange={onChange}
          ></FormInput>
        
        ))}

    <br></br>
       {/* <div className="container" id="moneyConversion">
            <ul id="listGrupHorizantal" className="list-group list-group-horizontal">
                <li id="showAmount"> {values.amount}</li>
                <li id="selectUnitId" className="list-group-item">{selectedUnit}      
                </li>
            </ul>
        </div> */}
       
        <button type ="submit" id = "devamButton">Devam</button>
        
      </form>

    </div>
    
  );
  
}