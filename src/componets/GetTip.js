import React, { Component } from 'react';
import './GetTip.css';

export class GetTip extends Component{
    continue = e => {
        e.preventDefault();
        if(this.props.values.result.tip===''){
           
            console.log("hi");

        }
        else{
            this.props.nextStep();
            console.log("hi");
            console.log(this.props.values.result.tip)

        }
    };
    
    render() {
       
        const {  handleChange } = this.props;
        return (
            <div className="GetTip">
                <h3><center>Select your desired tip percentage in decimal form</center></h3>
                <form id="getTip" onSubmit={this.continue}>
                    <input type="number" step="0.0001" placeholder="enter tip %" onChange={handleChange('tip')} ></input>
                    <button type="submit">Submit</button>
                </form>
               
                
                    <form id="noTip" onSubmit={this.props.noTip} >
                        <button type="submit">No Tip</button>
                    </form>
                
                    <form id="tenPercent" onSubmit={this.props.tenPercent}>
                        <button type="submit">10%</button>
                    </form>
               
                    <form id="fifteenPercent" onSubmit={this.props.fifteenPercent} >
                        <button type="submit">15%</button>
                    </form>
                
                    <form id="twentyPercent" onSubmit={this.props.twentyPercent}>
                        <button type="submit">20%</button>
                    </form>
                
                
            </div>
        );
    }
}
