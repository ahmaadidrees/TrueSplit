import React, { Component } from 'react';
import ItemLister from './ItemLister'
export class ListItems extends Component {
    /*constructor(props){
        super(props);
        this.state = {
          items:[],
          sum:0,
          currentItem:{
            text:'',
            key:''
          }
        }
        this.addItem = this.addItem.bind(this);
        this.handleItem = this.handleItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.sumList = this.sumList.bind(this);
      }*/
      //values = this.props;
      
      
      

      
      deleteItem(key){
        const filteredItems= this.props.values.items.filter(item =>
          item.key!==key);
        this.props.setState({
          items: filteredItems
        })
    
      }
      setUpdate(text,key){
        const items = this.state.items;
        items.map(item=>{      
          if(item.key===key){
            console.log(item.key +"    "+key)
            item.text= text;
          }
        })
        this.props.setState({
          items: items
        })
        
       
      }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render(){
        
        console.log("this.props:"+this.props.values.numPeople+" "+this.props.values.salesTax)
        return (
          <div className="App">
            <h3><center>Enter the price of all the items one at a time for {this.props.values.name}!</center></h3>
            <header>
        
        <form id="to-do-form" onSubmit={this.props.addItem}>
          <input type="number" placeholder="Enter task" value= {this.props.values.currentItem.text} onChange={this.props.handleChange('currentItem')}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.props.values.items.text}</p>
        
        
        <ItemLister items={this.props.values.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} sumList={this.props.sumList}/>
        <form id="submitButton" onSubmit={this.props.sumList}>
            <button type="submit">Enter</button>
        </form>
      </header>
          </div>
        );
       }
    }
    export default ListItems;
