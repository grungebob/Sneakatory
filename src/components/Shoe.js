import React from 'react';

const Shoe = (props) => (
  <td>
    Brand: { props.shoe.brand } <br />
    Style: { props.shoe.style } <br />
    Size: { props.shoe.size } <br />
    UPC: { props.shoe.UPC } <br />
  </td>
)
export default Shoe;