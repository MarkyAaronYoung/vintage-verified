import React from 'react';
import dressesData from '../../../helpers/data/dressesData';
import './EditDress.scss';

class EditDress extends React.Component {
  state = {
    dress: {
      dressName: '',
      isSkirt: '',
      whereMade: '',
      fabricType: '',
      zipperAndTongType: '',
      isVintage: '',
      imageUrl: '',
    },
  }

  componentDidMount() {
    dressesData.getDressById(this.props.match.params.dressId)
      .then((res) => {
        const dress = res.data;
        this.setState({ dress });
      })
      .catch((err) => console.error('cannot get jean', err));
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    const { dress } = this.state;
    dress.imageUrl = e.target.value;
    this.setState({ dress });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    const { dress } = this.state;
    dress.dressName = e.target.value;
    this.setState({ dress });
  }

  changeMadeEvent = (e) => {
    e.preventDefault();
    const { dress } = this.state;
    dress.whereMade = e.target.value;
    this.setState({ dress });
  }

  changeSkirtEvent = (e) => {
    e.preventDefault();
    const { dress } = this.state;
    dress.isSkirt = e.target.value;
    this.setState({ dress });
  }

  changeFabricEvent = (e) => {
    e.preventDefault();
    const { dress } = this.state;
    dress.fabricType = e.target.value;
    this.setState({ dress });
  }

  changeZipperEvent = (e) => {
    e.preventDefault();
    const { dress } = this.state;
    dress.zipperAndTongType = e.target.value;
    this.setState({ dress });
  }

  updateDressEvent = (e) => {
    e.preventDefault();
    const { dressId } = this.props.match.params;

    dressesData
      .updateDress(dressId, this.state.dress)
      .then(() => {
        this.props.history.push(`/verifiedvintage/${dressId}`);
      })
      .catch((err) => console.error('edit dress broke', err));
  };

  render() {
    const {
      dressName, isSkirt, whereMade, fabricType, isVintage, imageUrl, zipperAndTongType,
    } = this.state.dress;
    return (
      <div className="form-wrapper">
        <h3>You are editing {dressName} </h3>
      <form className="col-6 offset-3">
      {/* <button className="btn btn-dark" onClick={this.closeFormEvent}><i className="fas fa-window-close"></i></button> */}
       <div className="form-group">
      <label htmlFor="imageUrl">Dress Image</label>
      <input
        type="text"
        alt="missingimage"
        className="form-control"
        id="imageUrl"
        placeholder="Add A Photo of Your Dress"
        value={imageUrl}
        onChange={this.changeImageUrlEvent}
      />
    </div>
    <div className="form-group">
      <label htmlFor="shirtName">Name Your Dress</label>
      <input
        type="text"
        className="form-control"
        id="dressName"
        value={dressName}
        placeholder="Give Your Dress a Name (ex: Pink Summer Dress from Auction)"
        onChange={this.changeNameEvent}
      />
    </div>
    <div className="form-group">
    <label htmlFor="wheredressmade">Where was your dress made?</label>
    <select className="form-control" id="wheredressmade" onChange={this.changeMadeEvent} value={whereMade}>
    <option value="" defaultselected>choose a location below </option>
      <option>USA/Korea/Hong Kong</option>
      <option>Phillipines</option>
      <option>Unknown/No Tag</option>
      <option>China/Taiwan</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="isSkirt">Is It a Skirt?</label>
    <select className="form-control" id="isSkirt" onChange={this.changeSkirtEvent} value={isSkirt}>
    <option value="" default selected>Answer "Yes" or "No" by clicking the arrow</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="fabricType">What Kind of Fabric?</label>
    <select className="form-control" id="fabricType" onChange={this.changeFabricEvent} value={fabricType}>
    <option value="" default selected>Choose a fabric type below</option>
      <option>All Cotton</option>
      <option>Polyester(any amount)</option>
      <option>Rayon/Crepe</option>
      <option>Spandex</option>
      <option>Handmade</option>
      <option>unknown/other</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="zipperAndTongType">What material are the zipper teeth and tongs?</label>
    <select className="form-control" id="zipperAndTongType" onChange={this.changeZipperEvent} value={zipperAndTongType}>
    <option value="" default selected>Choose the type of material of your zipper teeth and tong below</option>
      <option>Both Plastic</option>
      <option>Metal Teeth/Plastic Tong</option>
      <option>Both Metal</option>
    </select>
  </div>
    <button className="btn btn-dark" onClick={this.updateDressEvent}>Update Jean</button>
  </form>
  </div>
    );
  }
}

export default EditDress;
