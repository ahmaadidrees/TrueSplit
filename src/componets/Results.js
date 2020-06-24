import React, { Component } from 'react';
export class Results extends Component {


   
    render() {
        const { values, handleChange } = this.props; 
        const totalAfterTax = (parseFloat(values.sum) * parseFloat(values.salesTax)) + parseFloat(values.sum);
        const totalAfterTip = (totalAfterTax * parseFloat(values.tip)) +totalAfterTax;
        return (
            <div className="GetName">
                <h3><center>Results!</center></h3>
        <p>{"name: "+values.name}</p>
        <p>{"total: "+ values.sum}</p>
        <p>{"salesTax: "+values.salesTax}</p>
        <p>{"tip: "+values.tip}</p>
        <p>{"total After Tax: "+totalAfterTax}</p>
        <p>{"total After tip: "+totalAfterTip}</p>
                
            </div>
        );
    
    }
    
}
export default Results;
