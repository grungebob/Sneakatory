import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Shoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoe: props.shoe,
            showModal: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }

      handleClick(e) {
        console.log('Shoe Info: \n', this.state);
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
      }

      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        console.log('close')
        this.setState({ showModal: false });
      }
  

      render() {
        return (
            <td className = "container" onClick={this.handleOpenModal} id="myBtn">
                <img src={this.state.shoe.imgLink} alt="Shoe" className="shoe"/>
                <div className = "overlay">
                    <div className = "shoe-info">
                        ID: { this.state.shoe.id } <br />  
                        Brand: { this.state.shoe.brand } <br />
                        Style: { this.state.shoe.style } <br />
                        Size: { this.state.shoe.size } <br />
                        UPC: { this.state.shoe.UPC } <br />
                    </div>
                </div>

                <Modal
                    isOpen={this.state.showModal}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <div>
                            ID: { this.state.shoe.id } <br />  
                            Brand: { this.state.shoe.brand } <br />
                            Style: { this.state.shoe.style } <br />
                            Size: { this.state.shoe.size } <br />
                            UPC: { this.state.shoe.UPC } <br />
                        </div>
                        <button onClick={this.handleCloseModal}>Close Modal</button>
                    </div>
                </Modal>
            </td>
        )
    }
}
export default Shoe;