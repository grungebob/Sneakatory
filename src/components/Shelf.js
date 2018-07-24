import React from 'react';
import ShelfRow from './ShelfRow.js';


const Shelf = (props) => (
  <table id="table1">
    <tbody>  
        <tr>
            <th></th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
        </tr>
        { props.shelf1.map((row) => <ShelfRow key={row.row} row={row}/> )}
    </tbody>
  </table>
)

export default Shelf;