import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Inventory from './Inventory.js';




class App extends React.Component {

	
  render(){


  return (

   	 	<DndProvider backend={HTML5Backend}>
   	 		<Inventory/>
	    </DndProvider> 			
  );

  }
}

export default App;
