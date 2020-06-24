import React, { Component } from 'react';
export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        console.log("values: "+values.salesTax+" "+values.numPeople)
        return (
            <div className="FromUserDetails">
                <h3><center>Welcome to True Split :)</center></h3>
                <form id="initial-form" onSubmit={this.continue}>
                    <input type="number" placeholder="enter the number of people to split by" onChange={handleChange('numPeople')} value={values.numPeople}></input>
                    <input type="number" placeholder="enter the local sales tax" onChange={handleChange('salesTax')} value={values.salesTax}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default FormUserDetails;