import React, { Component } from 'react';
import './GetName.css';
export class GetName extends Component {


    continue = e => {
        e.preventDefault();
        if(this.props.values.result.name===''){
           
            console.log("hi");

        }
        else{
            this.props.nextStep();
            console.log("hi");
            console.log(this.props.values.result.name)

        }
    };
    render() {
        const { values, handleChange } = this.props; 
        return (
            <div className="GetName">
                <h3><center>Please enter a name</center></h3>
                <form id="getName" onSubmit={this.continue}>
                    <input type="text" placeholder="enter name" onChange={handleChange('name')} value={values.result.name}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    
    }
    
}
export default GetName;
