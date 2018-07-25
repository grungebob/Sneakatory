import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        height: '40%',
      }
  };

class Shoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoe: props.shoe,
            showModal: false,
            isEditing: false,
        };
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.edit = this.editShoe.bind(this);
        this.deleteShoe = this.deleteShoe.bind(this);
      };

      openModal() {
        this.setState({ showModal: true});
      }
     
      closeModal() {
        this.setState({ showModal: false});
      }
      
      editShoe() {
          this.setState({ editModal: true });
          console.log(this.state.editModal);
      }

      deleteShoe(){
          console.log('Delete Shoe');
          this.setState({
              shoe: 'Empty Slot'
          });
          this.closeModal();
      }

      render() {
        return (
            !this.state.showModal ?
                this.state.shoe !== 'Empty Slot' ?
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
                    </td>
                :
                <td onClick ={this.edit}> Open Slot </td>
            :
            <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            ariaHideApp={false}
            >
                <span className="close" onClick={this.closeModal}>&times;</span>
                <div className = "modal-content">
                    ID: { this.state.shoe.id } <br />  
                    Brand: { this.state.shoe.brand } <br />
                    Style: { this.state.shoe.style } <br />
                    Size: { this.state.shoe.size } <br />
                    UPC: { this.state.shoe.UPC } <br />
                    Image: { this.state.shoe.imgLink } 
                </div>
                <button onClick={this.edit}> EDIT </button>
                <button onClick={this.deleteShoe}> REMOVE </button>
            </Modal>
        )
    }
}
export default Shoe;