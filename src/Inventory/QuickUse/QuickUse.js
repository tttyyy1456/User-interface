import React from 'react';
import './QuickUse.css';
import Cell from '../Cell/Cell.js';



const QuickUse = ({hasItem, values, onChange})=>{
	const array = [1,2,3,4];
		const cells = array.map((item, index) =>{
					if(index <4 ){
					
					return <Cell 
					key = {item.toString()}
					hasItem = {hasItem} 
					values = {values} 
					PosNumber = {index+40} 
					onChange = {onChange}/>
					
				}
			})
	return(
		<div className = 'QuickUse'>
			{cells}
		</div>
			
		)
}

export default QuickUse;