import React from 'react';
import './Cell.css'
import Item from '../Item/Item.js';
import { ItemTypes } from '../Constants/Constants.js';
import { useDrop } from 'react-dnd';




const Cell = ({hasItem,values, PosNumber, onChange}) =>{

		const onDropped = (currentPosition) =>{
			
			const itemFilter = values.filter((item, index) => values[index].PosNumber == currentPosition)
			if(hasItem === false){

			itemFilter[0].PosNumber = PosNumber;
			onChange(currentPosition)
			}


			console.log(itemFilter)
			console.log(currentPosition)
			console.log(PosNumber)


		}

		const [{ isOver }, drop] = useDrop({
	    accept: ItemTypes.ITEM,
	    drop: (item, monitor) => onDropped(item.posNumber),
	    collect: monitor => ({
	      isOver: !!monitor.isOver(),
	    }),
	  })


	return(
			<div 
			className = 'Cell' 
			id = 'Cell'
			ref={drop}
			style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
			>

		

			{
				values.map((items, index) =>{
					if(values[index].PosNumber == PosNumber){
						hasItem = true
						return (<Item
						PositionNumber = {values[index].PosNumber} 
						name = {values[index].Name}
						id = 'Item'
						key = 'key'
						/>
						)
					}
				})
			}

			{isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}				
			</div>
		
		)
		}

export default Cell;