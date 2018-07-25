import React from 'react';
import Modal from 'react-modal';

class Shoe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoe: props.shoe,
            showModal: false,
            isEditing: false,
            editShoe: {
                brand: '',
                style: '',
                size: '',
                UPC: '',
                imgLink: ''
            },
        };
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.edit = this.editShoe.bind(this);
        this.deleteShoe = this.deleteShoe.bind(this);
        this.updateShoe = this.updateShoe.bind(this);
        this.handleChange = this.handleChange.bind(this);
      };

      openModal() {
        this.setState({ showModal: true});
      }
     
      closeModal() {
        this.setState({ 
            showModal: false,
            isEditing: false
        });
      }
      
      async editShoe() {
          await this.setState({
              showModal: true, 
              isEditing: true 
            });
      }

      deleteShoe(){
          this.setState({
              shoe: 'Empty Slot'
          });
          this.closeModal();
      }

      handleChange(event) {
        let newEdit = this.state.editShoe;
        newEdit[event.target.name] = event.target.value;
      }

      updateShoe() {
          this.setState({
              shoe: this.state.editShoe,
              showModal: false,
          })
      }

      render() {
        return (
            !this.state.showModal ?
                this.state.shoe !== 'Empty Slot' ?
                    <td className = "container" onClick={this.openModal} id="myBtn">
                        <img src={this.state.shoe.imgLink} alt="Shoe" className="shoe"/>
                        <div className = "overlay">
                            <div className = "shoe-info">  
                                Brand: { this.state.shoe.brand } <br />
                                Style: { this.state.shoe.style } <br />
                                Size: { this.state.shoe.size } <br />
                                UPC: { this.state.shoe.UPC } <br />
                            </div>
                        </div>     
                    </td>
                :
                <td onClick ={this.edit} > Open Slot </td>
            :
            !this.state.isEditing ?
                <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                ariaHideApp={false}
                >
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <div className = "modal-content">
                        <img alt="Shoe" src = { this.state.shoe.imgLink } style={{maxWidth: "300px"}}/> <br />
                        Brand: { this.state.shoe.brand } <br />
                        Style: { this.state.shoe.style } <br />
                        Size: { this.state.shoe.size } <br />
                        UPC: { this.state.shoe.UPC } <br />
                        Image Link: { this.state.shoe.imgLink } 
                    </div>
                    <div onClick={this.edit} className="shoe-button" >EDIT</div>
                    <div onClick={this.deleteShoe} className="shoe-button remove" >REMOVE</div>
                </Modal>
            :
            <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                ariaHideApp={false}
                align-content="center"
                >
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <form className = "modal-edit">
                        <input type="text" name="brand" onChange={this.handleChange} placeholder="Brand (e.g. adidas, Nike, etc.)" />
                        <input type="text" name="style" onChange={this.handleChange} placeholder="Style (e.g. AR5131-610)" />
                        <input type="text" name="size"  onChange={this.handleChange} placeholder="Size (e.g. 7, 10, ... you get it)" />
                        <input type="text" name="UPC"  onChange={this.handleChange} placeholder="UPC #" />
                        <input type="text" name="imgLink"  onChange={this.handleChange} placeholder="Image URL (e.g. https://stockx.imgix.net/shoe-name.png)" /> <br />
                        <div type="submit" value="Submit" className="shoe-button" onClick= {this.updateShoe}>SAVE</div>
                        <div onClick={this.deleteShoe} className="shoe-button remove">REMOVE</div>
                    </form>
            </Modal>
        )
    }
}
export default Shoe;

const customStyles = {
    content : {
        fontSize: '4vh',
        fontFamily: 'BebasNeue',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '70%',
      }
  };
