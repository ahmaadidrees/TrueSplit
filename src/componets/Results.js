import React, { Component } from 'react';
import './Results.css';

export class Results extends Component {

    render() {
        
    const { values, myStep } = this.props; 
    const totalAfterTax = (parseFloat(values.result.sum) * parseFloat(values.salesTax)) + parseFloat(values.result.sum);
    const cleanedTotalAfterTax = totalAfterTax.toFixed(2);
    var totalAfterTip;
    if(isNaN(values.result.tip)){
         totalAfterTip = totalAfterTax;
    }
    else{
         totalAfterTip = (totalAfterTax * parseFloat(values.result.tip)) +totalAfterTax;

    }
    const cleanedTotalAfterTip  = totalAfterTip.toFixed(2);
    const results = values.results;
    const listResults = results.map(result =>
       
   {
       return <div className="ResultsList" key={result.key}>
     <p>
        <label>name:  <b>{result.name} </b></label>
     </p>
     <p>
        <label>total:  {result.sum} </label>
     </p>
     <p>
        <label>total after tax:  {result.totalAfterTax} </label>
     </p>
     <p>
        <label>total after tip: {result.totalAfterTip} </label>
        
     </p>
     <br></br>
    
    </div>})
    return <div className="Results">
    <h3><center>Results!</center></h3>
    <p>{"Name: "}<b>{values.result.name}</b></p>
    <p>{"total: "+ values.result.sum}</p>
    <p>{"total after tax: "+cleanedTotalAfterTax}</p>
    <p>{"total after tip: "+cleanedTotalAfterTip}</p>
    <br></br>
              {listResults}
      <form id="anotherPerson" onSubmit={myStep}>
             <button type="submit">Click here to Calculate another person or refresh page for another bill</button>
    </form>
        
    </div>;
        
    }
    
}
export default Results;
