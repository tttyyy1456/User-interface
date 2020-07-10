import React, {useState, useRef} from 'react';
import { ItemTypes } from '../Constants/Constants.js';
import { useDrag, useDrop } from 'react-dnd';


function Item(props) {
	const [{ isDragging }, drag] = useDrag({
  item: { 
    type: ItemTypes.ITEM,
    posNumber: props.PositionNumber
  },
  collect: (monitor) => ({
    isDragging: !!monitor.isDragging()
  })
})

	return(
                      <p 
                      	style={{
					        opacity: isDragging ? 0 : 1,
					        fontWeight: 'bold',
					        cursor: 'pointer',
     							}} 
      					ref={drag} 
      					className ='ma0 mw3 tc' 
      					id = {props.id}>
                                {props.name}

      					</p>


		

		)
}

export default Item;