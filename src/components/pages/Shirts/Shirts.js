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
    this.setState({ shirtName: e.target.value });
  }

  changeMadeEvent = (e) => {
    e.preventDefault();
    this.setState({ whereMade: e.target.value });
  }

  changeFabricEvent = (e) => {
    e.preventDefault();
    this.setState({ fabricType: e.target.value });
  }

  changeStitchTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ stitchType: e.target.value });
  }

  changeBrandEvent = (e) => {
    e.preventDefault();
    this.setState({ whatBrand: e.target.value });
  }

  verifyShirtEvent = (e) => {
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
    <label htmlFor="isTshirt">Is it a T-shirt?</label>
    <select className="form-control" id="isTshirt" onChange={this.changeTshirtEvent}>
    <option value="" defaultselected>choose an answer below</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="fabricType">What Kind of Fabric?</label>
    <select className="form-control" id="fabricType" onChange={this.changeFabricEvent}>
    <option value="" defaultselected>choose a fabric below </option>
      <option>All Cotton</option>
      <option>Polyester(any amount)</option>
      <option>Spandex</option>
      <option>unknown/other</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="stitchType">What Kind of Stitch?</label>
    <select className="form-control" id="stitchType" onChange={this.changeStitchTypeEvent}>
    <option value="" defaultselected>choose a stitch below </option>
      <option>Single Stitch</option>
      <option>Double Stitch</option>
      <option>Unknown/Other</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="whatBrand">What Brand?</label>
    <select className="form-control" id="whatBrand" onChange={this.changeBrandEvent}>
      <option value="" default selected>choose a brand below</option>
      <option>Madewell</option>
      <option>American Apparel</option>
      <option>Other/Unknown</option>
    </select>
  </div>
    <button className="btn btn-dark" onClick={this.verifyShirtEvent}>Verify Shirt</button>
  </form>
    );
  }
}

export default Shirts;
