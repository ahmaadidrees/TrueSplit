import React, { Component } from 'react';
import './GetTax.css';
export class GetTax extends Component {
    continue = e => {
        e.preventDefault();
        if(this.props.values.salesTax===''){
           
            console.log("hi");

        }
        else{
            this.props.nextStep();
            console.log("hi");
            console.log(this.props.values.salesTax)

        }
    };

    render() {
        const {  handleChange } = this.props;
        return (
            <div className="GetTax">
                <h1><center>Welcome to True Split</center></h1>
                <form id="salesTax" onSubmit={this.continue}>
                    <input type="number" step="0.001" placeholder="enter the local sales tax %.......ie. 8.5" onChange={handleChange('salesTax')} ></input>
                    <button type="submit">Submit</button>
                </form>
                <b id="hint">-hint: </b><p id="tip">if you don't know the local sales tax, you can easily find it by googling! San Francisco's is 8.5% :)</p>
            </div>
        );
    }
}
export default GetTax;