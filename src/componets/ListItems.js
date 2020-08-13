import React, { Component } from 'react';
import ItemLister from './ItemLister';
import './ListItems.css';
export class ListItems extends Component {
    
      setUpdate(text,key){
        const items = this.state.items;
        items.forEach(item=>{      
          if(item.key===key){
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
        return (
          <div className="ListItems">
            <h3><center>Enter the price of all the items one at a time for {this.props.values.name}!</center></h3>
            <header>
        
        <form id="itemForm" onSubmit={this.props.addItem}>
          <input type="number" step="0.01" placeholder="Enter cost of item............ie. 12.50" value= {this.props.values.currentItem.text} onChange={this.props.handleChange('currentItem')}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.props.values.items.text}
        
        </p>
        
        
        <ItemLister items={this.props.values.items} deleteItem={this.props.deleteItem} setUpdate={this.setUpdate} sumList={this.props.sumList}/>
        <form id="submitButton" onSubmit={this.props.sumList}>
            <button type="submit">continue</button>
        </form>
      </header>
          </div>
        );
       }
    }
    export default ListItems;
