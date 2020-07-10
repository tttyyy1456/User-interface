import React from 'react';
import './HumanEquip.css';
import Cell from '../Cell/Cell.js';


const HumanEquip = ({hasItem, values, onChange}) =>{
	const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
		const cells = array.map((item, index) =>{
					if(index < 15){
					
					return <Cell 
					key = {item.toString()}
					hasItem = {hasItem} 
					values = {values} 
					PosNumber = {index+44} 
					onChange = {onChange}/>
					
				}
			})
	return(
		<div className = 'main'>
			<div className = 'hat'>
				{cells[0]}
			</div>
				<div className = 'face-accessories'>
					{cells[1]}
					{cells[2]}
					{cells[3]}
				</div>
					<div className = 'necklace'>
						{cells[4]}
					</div>
						<div className = 'bodyequip'>
							{cells[5]}
							{cells[6]}
							{cells[7]}
							{cells[8]}
						</div>
							<div className ='bottom'>
								<div className ='left-arm'>
									{cells[9]}
									{cells[10]}
								</div>
										<div>
											{cells[11]}
										</div>

								<div className='right-arm'>
									{cells[12]}
									{cells[13]}
								</div>
							</div>

								<div className ='feet'>
								{cells[14]}
								</div>

		</div>
		)
}

export default HumanEquip;