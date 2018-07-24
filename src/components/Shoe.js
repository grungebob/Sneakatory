import React from 'react';

const Shoe = (props) => (
  <td className = "container">
    <img src={props.shoe.imgLink} alt="Shoe" className="shoe"/>
    <div className = "overlay">
        <div className = "shoe-info">
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