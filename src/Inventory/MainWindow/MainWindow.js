import React from 'react';
import './MainWindow.css';
import Cell from '../Cell/Cell.js';


const MainWindow = ({hasItem, values, onChange, id, className}) =>{
	const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
		const cells = array.map((item, index) =>{
					if(index <40 ){
					
					return <Cell 
					key = {item.toString()}
					hasItem = {hasItem} 
					values = {values} 
					PosNumber = {index} 
					onChange = {onChange}/>
					
				}
			})



	return(
		<div 
		id = {id}
		className={className} 
		>
		{cells}
				
			
			
		</div>
		)
}

export default MainWindow;