import React from 'react';

const Shoe = (props) => (
  <td class="container">
    <img src={props.shoe.imgLink} alt="Shoe" class="shoe"/>
    <div class = "overlay">
        <div class = "shoe-info">
            ID: { props.shoe.id } <br />  
            Brand: { props.shoe.brand } <br />
            Style: { props.shoe.style } <br />
            Size: { props.shoe.size } <br />
            UPC: { props.shoe.UPC } <br />
            {/* Img: {props.shoe.imgLink} */}
        </div>
    </div>
  </td>
)
export default Shoe;