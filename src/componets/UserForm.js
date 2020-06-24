import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import ListItems from './ListItems';
import GetName from './GetName'
import { GetTip } from './GetTip';
import Results from './Results'
export class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {

            step: 1,
            numPeople: '',
            salesTax: '',
            name: '',
            tip: '',
            items:[],
            sum:'',
            currentItem:{
                text:'',
                key:''
            }
          
    }
    this.addItem = this.addItem.bind(this);
    this.sumList = this.sumList.bind(this);
}
  
    // Proceed to next step
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    };
  
    // Go back to prev step
    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    };
  
    myStep = () => {
        var num = parseFloat(this.state.numPeople)-1;
        this.setState({
            numPeople : num.toString()
        })
       if (num+1>0) {
           this.setState({
               step: 2
           })
       } else {
           this.setState({
               step: 5
           })
       }
        

    }
    // Handle fields change
    handleChange = input => e => {
      if (input==='currentItem') {
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
             }
        })
      } else {
        this.setState({ [input]: e.target.value });
      }
        
    };

    sumList(e){
        e.preventDefault();
        const list = this.state.items;
        var total = 0;
        list.map(item=> {
            var value = parseFloat(item.text);
            total += value;
            
        })
        this.setState({
            sum: total.toString()
        })
        this.nextStep(e);
        console.log("Total: "+total)
        console.log("sum: "+this.state.sum)
      }
    
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;

        if(newItem.text !==""&& !isNaN(newItem.text)){
          const items = [...this.state.items, newItem];
        this.setState({
          items: items,
          currentItem:{
            text:'',
            key:''
          }
        })
        }
      }
  
    render() {
      const { step } = this.state;
      const { numPeople, salesTax, name, tip, items, currentItem, sum} = this.state;
      const values = { numPeople, salesTax, name, tip, items, currentItem , sum};
      switch (step) {
        case 1:
          return (
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 2:
            return (
            <GetName
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />
         ); 
         case 3:
            return (
            <ListItems
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                addItem={this.addItem}
                sumList={this.sumList}
                values={values}
            />
         ); 
         case 4:
            return (
            <GetTip
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                myStep={this.myStep}
                handleChange={this.handleChange}
                values={values}
            />
         ); 
         case 5:
            return (
            <Results
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />
         ); 
        default:
          (console.log('This is a multi-step form built with React.'))
      }
    }
  }
  
  export default UserForm;