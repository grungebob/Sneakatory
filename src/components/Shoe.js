import React from 'react';

const Shoe = (props) => (
  <td>
    ID: { props.shoe.id } <br />  
    Brand: { props.shoe.brand } <br />
    Style: { props.shoe.style } <br />
    Size: { props.shoe.size } <br />
    UPC: { props.shoe.UPC } <br />
    {/* Img: {props.shoe.imgLink} */}
  </td>
)
export default Shoe;