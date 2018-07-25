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
        width: '60%',
        height: '80%',
        alignContent: 'center',
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
        this.updateShoe = this.updateShoe.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
          console.log('is editing?', this.state.isEditing);
      }

      deleteShoe(){
          console.log('Delete Shoe');
          this.setState({
              shoe: 'Empty Slot'
          });
          this.closeModal();
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }

      updateShoe(newBrand, newStyle, newSize, newUPC, newImgLink) {
          this.setState({
              shoe: {
                  brand: newBrand,
                  style: newStyle,
                  size: newSize,
                  UPC: newUPC,
                  imgLink: newImgLink
              }
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
                                ID: { this.state.shoe.id } <br />  
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
                        ID: { this.state.shoe.id } <br />  
                        Brand: { this.state.shoe.brand } <br />
                        Style: { this.state.shoe.style } <br />
                        Size: { this.state.shoe.size } <br />
                        UPC: { this.state.shoe.UPC } <br />
                        Image Link: { this.state.shoe.imgLink } 
                    </div>
                    <button onClick={this.edit}> EDIT </button>
                    <button onClick={this.deleteShoe}> REMOVE </button>
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
                    <form className = "modal-edit" onSubmit = {this.updateShoe}>
                        <input type="text" name="brand" placeholder="Brand (e.g. adidas, Nike, etc.)" />
                        <input type="text" name="style" placeholder="Style (e.g. AR5131-610)" />
                        <input type="text" name="size" placeholder="Size (7, 10, you get it)" />
                        <input type="text" name="UPC" placeholder="UPC #" />
                        <input type="text" name="image" placeholder="Image Link (e.g. https://stockx.imgix.net/shoe-name.png)" /> <br />
                        <input type="submit" value="Submit" />
                        <button onClick={this.deleteShoe}> REMOVE SHOE </button>
                    </form>
            </Modal>
        )
    }
}
export default Shoe;