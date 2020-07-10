import React from 'react';
import MainWindow from './Inventory/MainWindow/MainWindow.js';
import HumanEquip from './Inventory/HumanEquip/HumanEquip.js';
import './Inventory/HumanEquip/HumanEquip.css';
import Cell from './Inventory/Cell/Cell.js';
import './App.css';
import QuickUse from './Inventory/QuickUse/QuickUse.js';

let hasItem = false;


class Inventory extends React.Component{




	constructor(){
		super();
		this.state = {
			values: [],
		};



	}


	componentDidMount(){
		fetch('http://localhost:3000/message.txt')
		.then(response => response.json())
		 .then(items => this.setState({values: items.$values}) )
	}

	Change = (id) =>{
		this.setState({values: this.state.values.filter((t,i) => this.state.values[i].PosNumber !== id )})
	}




	render(){
		const { values } = this.state

		return(

			<div className ='inventory'>
		    	<HumanEquip hasItem = {hasItem} onChange = {this.Change} values = {values}/>
		       		<MainWindow hasItem = {hasItem} onChange = {this.Change} values = {values} id = 'MainWindow' className = 'MainWindow'/>
	       				<QuickUse hasItem = {hasItem} onChange = {this.Change} values = {values}/>

			</div>
			)
	}
}

export default Inventory;