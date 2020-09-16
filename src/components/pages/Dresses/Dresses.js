import React from 'react';
import _ from 'underscore';
import './Dresses.scss';
import authData from '../../../helpers/data/authData';
import dressesData from '../../../helpers/data/dressesData';

class Dresses extends React.Component {
  // static propTypes = {
  //   createDress: PropTypes.func.isRequired,
  // }

  state = {
    dressName: '',
    isSkirt: '',
    whereMade: '',
    fabricType: '',
    zipperAndTongType: '',
    isVintage: '',
    imageUrl: '',
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ dressName: e.target.value });
  }

  changeMadeEvent = (e) => {
    e.preventDefault();
    this.setState({ whereMade: e.target.value });
  }

  changeSkirtEvent = (e) => {
    e.preventDefault();
    this.setState({ isSkirt: e.target.value });
  }

  changeFabricEvent = (e) => {
    e.preventDefault();
    this.setState({ fabricType: e.target.value });
  }

  changeZipperEvent = (e) => {
    e.preventDefault();
    this.setState({ zipperAndTongType: e.target.value });
  }

  verifyDressEvent = (e) => {
    e.preventDefault();
    const keysIWant = [
      'isSkirt',
      'dressName',
      'whereMade',
      'fabricType',
      'zipperAndTongType',
      'isVintage',
      'imageUrl',
    ];

    const newDress = _.pick(this.state, keysIWant);
    newDress.uid = authData.getUid();

    dressesData
      .createDress(newDress)
      .then((res) => {
        this.props.history.push(`/verifiedvintage/${res.data.name}`);
      })
      .catch((err) => console.error('new item broken', err));
  };

  render() {
    return (
      <form className="col-6 offset-3">
      {/* <button className="btn btn-dark" onClick={this.closeFormEvent}><i className="fas fa-window-close"></i></button> */}
       <div className="form-group">
      <label htmlFor="dressimg">Dress Image</label>
      <input
        type="text"
        className="form-control"
        id="imageUrl"
        placeholder="Add A Dress Photo"
        onChange={this.changeImageUrlEvent}
      />
    </div>
    <div className="form-group">
      <label htmlFor="dressName">Dress Name</label>
      <input
        type="text"
        className="form-control"
        id="dressName"
        placeholder="Give Your Dress a Name (ex: Pink Dress I found in Attic)"
        onChange={this.changeNameEvent}
      />
    </div>
    <div className="form-group">
    <label htmlFor="wheredressmade">Where was your dress made?</label>
    <select className="form-control" id="wheredressmade" onChange={this.changeMadeEvent}>
    <option value="" default selected>choose a location below</option>
      <option>USA/Korea/Hong Kong</option>
      <option>Phillipines</option>
      <option>Unknown/No Tag</option>
      <option>China/Taiwan</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="isSkirt">Is It a Skirt?</label>
    <select className="form-control" id="isSkirt" onChange={this.changeSkirtEvent}>
    <option value="" default selected>Answer "Yes" or "No" by clicking the arrow</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="fabricType">What Kind of Fabric?</label>
    <select className="form-control" id="fabricType" onChange={this.changeFabricEvent}>
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
    <select className="form-control" id="zipperAndTongType" onChange={this.changeZipperEvent}>
    <option value="" default selected>Choose the type of material of your zipper teeth and tong below</option>
      <option>Both Plastic</option>
      <option>Metal Teeth/Plastic Tong</option>
      <option>Both Metal</option>
    </select>
  </div>
    <button className="btn btn-dark" onClick={this.verifyDressEvent}>Verify Dress</button>
  </form>
    );
  }
}

export default Dresses;
