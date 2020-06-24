import React, { Component } from 'react';
export class GetName extends Component {


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props; 
        return (
            <div className="GetName">
                <h3><center>Please enter a name</center></h3>
                <form id="get-name" onSubmit={this.continue}>
                    <input type="text" placeholder="enter name" onChange={handleChange('name')} value={values.name}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    
    }
    
}
export default GetName;
