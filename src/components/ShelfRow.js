import React from 'react';
import Shoe from './Shoe.js';

const ShelfRow = (props) => (
  <tr>
    <td>Row: {props.row.row}</td>
    { props.row.shoes.map((shoe) => <Shoe key={shoe.id} shoe={shoe} handleClick={props.handleClick} /> )}
  </tr>
)
export default ShelfRow;