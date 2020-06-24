import React, { Component } from 'react';
export class GetTip extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    
    render() {
       
       
        const { values, handleChange, myStep } = this.props;
        
        console.log("values: "+values.salesTax+" "+values.numPeople)
        return (
            <div className="FromUserDetails">
                <h3><center>Enter your desired tip percentage in decimal form</center></h3>
                <form id="tip-form" onSubmit={this.continue}>
                    <input type="number" placeholder="enter tip %" onChange={handleChange('tip')} value={values.tip}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
