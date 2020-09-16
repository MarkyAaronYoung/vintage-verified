import React from 'react';
import _ from 'underscore';
import './Shirts.scss';
import authData from '../../../helpers/data/authData';
import shirtsData from '../../../helpers/data/shirtsData';

class Shirts extends React.Component {
  // static propTypes = {
  //   createDress: PropTypes.func.isRequired,
  // }

  state = {
    shirtName: '',
    isTshirt: '',
    whereMade: '',
    fabricType: '',
    whatBrand: '',
    stitchType: '',
    isVintage: '',
    imageUrl: '',
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ pantsName: e.target.value });
  }

  changeMadeEvent = (e) => {
    e.preventDefault();
    this.setState({ whereMade: e.target.value });
  }

  changeFabricEvent = (e) => {
    e.preventDefault();
    this.setState({ fabricType: e.target.value });
  }

  changeZipperEvent = (e) => {
    e.preventDefault();
    this.setState({ zipperAndTongType: e.target.value });
  }

  verifyPantsEvent = (e) => {
    e.preventDefault();
    const keysIWant = [
      'shirtName',
      'isTshirt',
      'whereMade',
      'whatBrand',
      'fabricType',
      'stitchType',
      'isVintage',
      'imageUrl',
    ];

    const newShirts = _.pick(this.state, keysIWant);
    newShirts.uid = authData.getUid();

    shirtsData
      .createShirts(newShirts)
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
      <label htmlFor="shirtsimg">Shirt Image</label>
      <input
        type="text"
        className="form-control"
        id="imageUrl"
        placeholder="Add A Photo of Your Shirt"
        onChange={this.changeImageUrlEvent}
      />
    </div>
    <div className="form-group">
      <label htmlFor="shirtName">Name Your Shirt</label>
      <input
        type="text"
        className="form-control"
        id="shirtName"
        placeholder="Give Your Shirt a Name (ex: White t-shirt I bought on Labor Day)"
        onChange={this.changeNameEvent}
      />
    </div>
    <div className="form-group">
    <label htmlFor="whereshirtmade">Where was your shirt made?</label>
    <select className="form-control" id="whereshirtmade" onChange={this.changeMadeEvent}>
    <option value="" defaultselected>choose a location below </option>
      <option>USA/Korea/Hong Kong</option>
      <option>Phillipines</option>
      <option>Unknown/No Tag</option>
      <option>China/Taiwan</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="fabricType">What Kind of Fabric?</label>
    <select className="form-control" id="fabricType" onChange={this.changeFabricEvent}>
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
      <option>Both Plastic</option>
      <option>Metal Teeth/Plastic Tong</option>
      <option>Both Metal</option>
    </select>
  </div>
    <button className="btn btn-dark" onClick={this.verifyPantsEvent}>Verify Pants</button>
  </form>
    );
  }
}

export default Shirts;
