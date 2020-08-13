import React, { Component } from 'react';
import GetTax from './GetTax';
import ListItems from './ListItems';
import GetName from './GetName';
import { GetTip } from './GetTip';
import Results from './Results';
export class Driver extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            salesTax: '',
            items:[],
            currentItem:{
                text:'',
                key:''
            },
            results: [],
            result:{
              name: '',
              key: '',
              tip: '',
              sum: '',
              totalAfterTax: '',
              totalAfterTip: ''
            }
    }
    this.addItem = this.addItem.bind(this);
    this.sumList = this.sumList.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
}
  
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    };
  
    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    };
  
    deleteItem(key){
      const filteredItems= this.state.items.filter(item =>
        item.key!==key);
      this.setState({
        items: filteredItems
      })
  
    }
    myStep = () => {
      const newResult = this.state.result;
      const newResults = [...this.state.results, newResult]
      this.setState({
        results: newResults,
        step: 2,
        result:{
          name: '',
          key: '',
          tip: '',
          sum: ''
        }
      })
      
        

    };
    
    handleChange = input => e => {
      if (input==='currentItem') {
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
             }
        })
      }
      else if(input==='name'){
        this.setState({
          name: e.target.value,
          result:{
            name: e.target.value,
            key: Date.now()
          }
          
        })
      }
      else if(input==='tip'){
        const tax = this.state.salesTax;
        const taxed = parseFloat(tax);
        const tip = e.target.value;
        const tipped = parseFloat(tip)*0.01;
        const sum = this.state.result.sum;
        const summed = parseFloat(sum);
        const taxedTotal = taxed*summed+summed;
        const tippedTotal = tipped*taxedTotal+taxedTotal;
        const cleanedTaxedTotal = taxedTotal.toFixed(2);
        const cleanedTipped = tippedTotal.toFixed(2);
        this.setState(({
          result: {
            ...this.state.result,          
            tip: e.target.value,
            totalAfterTax: cleanedTaxedTotal.toString(),
            totalAfterTip: cleanedTipped.toString()
          }
        }))
      }
      else if(input==='salesTax'){
          const taxInPercent = e.target.value;
          const taxInDecimal = parseFloat(taxInPercent)*0.01;
          const cleanedTax = taxInDecimal.toString();
          this.setState(({
              salesTax: cleanedTax
          }))
      }
      else {
        this.setState({ [input]: e.target.value });
      }
    };

    noTip=()=>{
        const tax = this.state.salesTax;
        const taxed = parseFloat(tax);
        const sum = this.state.result.sum;
        const summed = parseFloat(sum);
        const taxedTotal = taxed*summed+summed;
        const cleanedTaxedTotal = taxedTotal.toFixed(2);
        this.setState(({
                result: {
               ...this.state.result,          
               tip: 0,
               totalAfterTax: cleanedTaxedTotal.toString(),
               totalAfterTip: cleanedTaxedTotal.toString()
             }
           }))
           this.nextStep();
    }

    tenPercent=()=>{
        const tax = this.state.salesTax;
        const taxed = parseFloat(tax);
        const tip = 0.10;
        const tipped = parseFloat(tip);
        const sum = this.state.result.sum;
        const summed = parseFloat(sum);
        const taxedTotal = taxed*summed+summed;
        const tippedTotal = tipped*taxedTotal+taxedTotal;
        const cleanedTaxedTotal = taxedTotal.toFixed(2);
        const cleanedTippedTotal = tippedTotal.toFixed(2);
        this.setState(({
                result: {
               ...this.state.result,          
               tip: 0.10,
               totalAfterTax: cleanedTaxedTotal.toString(),
               totalAfterTip: cleanedTippedTotal.toString()
             }
           }))
           this.nextStep();
    }

    fifteenPercent=()=>{
        const tax = this.state.salesTax;
        const taxed = parseFloat(tax);
        const tip = 0.15;
        const tipped = parseFloat(tip);
        const sum = this.state.result.sum;
        const summed = parseFloat(sum);
        const taxedTotal = taxed*summed+summed;
        const tippedTotal = tipped*taxedTotal+taxedTotal;
        const cleanedTaxedTotal = taxedTotal.toFixed(2);
        const cleanedTippedTotal = tippedTotal.toFixed(2);
        this.setState(({
                result: {
               ...this.state.result,          
               tip: 0.15,
               totalAfterTax: cleanedTaxedTotal.toString(),
               totalAfterTip: cleanedTippedTotal.toString()
             }
           }))
           this.nextStep();
    }

    twentyPercent=()=>{
        const tax = this.state.salesTax;
        const taxed = parseFloat(tax);
        const tip = 0.20;
        const tipped = parseFloat(tip);
        const sum = this.state.result.sum;
        const summed = parseFloat(sum);
        const taxedTotal = taxed*summed+summed;
        const tippedTotal = tipped*taxedTotal+taxedTotal;
        const cleanedTaxedTotal = taxedTotal.toFixed(2);
        const cleanedTippedTotal = tippedTotal.toFixed(2);
        this.setState(({
                result: {
               ...this.state.result,          
               tip: 0.20,
               totalAfterTax: cleanedTaxedTotal.toString(),
               totalAfterTip: cleanedTippedTotal.toString()
             }
           }))
           this.nextStep();
    }
    sumList(e){
        e.preventDefault();
        const list = this.state.items;
        var total = 0;
        list.forEach(item=> {
            var value = parseFloat(item.text);
            total += value;
        })
        this.setState({
            result:{
              ...this.state.result,
              sum: total.toFixed(2).toString()}
        })
        this.nextStep(e);
        this.setState({
            items: []
        })
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
      const values = this.state;
      switch (step) {
        case 1:
          return (
            <GetTax
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
                addName={this.addName}
            />
         ); 
         case 3:
            return (
            <ListItems
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                sumList={this.sumList}
                values={values}
            />
         ); 
         case 4:
            return (
            <GetTip
                noTip={this.noTip}
                tenPercent={this.tenPercent}
                fifteenPercent={this.fifteenPercent}
                twentyPercent={this.twentyPercent}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
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
                myStep={this.myStep}
            />
         ); 
         
        default:
          (console.log('This is a multi-step form built with React.'))
      }
    }
  }
  
  export default Driver;