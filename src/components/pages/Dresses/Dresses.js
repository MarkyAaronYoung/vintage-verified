import React from 'react';
import _ from 'underscore';
import './Dresses.scss';
// import {
//   FormGroup, Label, Input,
// } from 'reactstrap';
// import PropTypes from 'prop-types';
// import getDress from '../VerifiedVintage/VerifiedVintage';
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
        this.props.history.push(`/dresses/${res.data.name}`);
      })
      .catch((err) => console.error('new item broken', err));
  };

  render() {
    return (
      <form className="col-6 offset-3">
      <button className="btn btn-dark" onClick={this.closeFormEvent}><i className="fas fa-window-close"></i></button>
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
      <label htmlFor="playerName">Dress Name</label>
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
    <select className="form-control" id="wheredressmade">
      <option>USA/Korea/Hong Kong</option>
      <option>Phillipines</option>
      <option>Unknown/No Tag</option>
      <option>China/Taiwan</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="isSkirt">Is It a Skirt?</label>
    <select className="form-control" id="isSkirt">
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="fabricType">What Kind of Fabric?</label>
    <select className="form-control" id="fabricType">
      <option>All Cotton</option>
      <option>Polyester(any amount)</option>
      <option>Rayon/Crepe</option>
      <option>Spandex</option>
      <option>Handmade</option>
      <option>unknown/other</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="zipperAndTongType">Example select</label>
    <select className="form-control" id="zipperAndTongType">
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
