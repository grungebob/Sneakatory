import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width: '85%',
        height: '85%',
      }
  };

class Shoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoe: props.shoe,
            showModal: false,
            dude: false,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
      };


      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        console.log('close');
        this.setState({ showModal: false });
        console.log('handle cm', this.state.showModal)
      }

      openModal() {
        this.setState({dude: true});
      }
     
      async closeModal() {
        await this.setState({ dude: false});
        console.log('close modal', this.state.dude)
      }
  

      render() {
        return (
            <td className = "container" onClick={this.openModal} id="myBtn">
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
                    isOpen={this.state.dude}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                        <span className="close" onClick={this.closeModal}>&times;</span>
                        <div>
                            ID: { this.state.shoe.id } <br />  
                            Brand: { this.state.shoe.brand } <br />
                            Style: { this.state.shoe.style } <br />
                            Size: { this.state.shoe.size } <br />
                            UPC: { this.state.shoe.UPC } <br />
                        </div>
                    <button onClick={this.closeModal}>Close Modal</button>
                </Modal>
            </td>
        )
    }
}
export default Shoe;