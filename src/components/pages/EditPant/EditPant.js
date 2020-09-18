import React from 'react';
import _ from 'underscore';
// import './Shirts.scss';
import authData from '../../../helpers/data/authData';
// import pantsData from '../../../helpers/data/shirtsData';
import pantsData from '../../../helpers/data/pantsData';

class EditPant extends React.Component {
  // static propTypes = {
  //   createDress: PropTypes.func.isRequired,
  // }

  state = {
    pantName: '',
    whereMade: '',
    fabricType: '',
    zipperAndTongType: '',
    isVintage: '',
    imageUrl: '',
  }

  componentDidMount() {
    const { pantId } = this.props.match.params;
    pantsData.getPantsById(pantId)
      .then((res) => {
        this.setState({
          // eslint-disable-next-line max-len
          imageUrl: res.data.imageUrl, pantName: res.data.pantName, fabricType: res.data.fabricType, whereMade: res.data.whereMade, zipperAndTongType: res.data.zipperAndTongType, isVintage: res.data.isVintage,
        });
      })
      .catch((err) => console.error(err));
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ pantName: e.target.value });
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

  updatePantEvent = (e) => {
    e.preventDefault();
    const { pantId } = this.props.match.params;
    const keys = ['pantName',
      'zipperAndTongType',
      'whereMade',
      'fabricType',
      'isVintage',
      'imageUrl'];

    const editedPant = _.pick(this.state, keys);
    editedPant.uid = authData.getUid();

    pantsData.updatePants(pantId, editedPant)
      .then((res) => {
        this.props.history.push(`/verifiedvintage/${pantId}`);
      })
      .catch((err) => console.error(err));

    // updateShirts = (e) => {
    //   e.preventDefault();
    //   const { shirtId } = this.props.match.params;

  //   shirtsData
  //     .updateShirts(shirtId, this.state.shirt)
  //     .then(() => {
  //       this.props.history.push(`/verifiedvintage/${shirtId}`);
  //     })
  //     .catch((err) => console.error('edit shirt broken', err));
  };
  // verifyShirtEvent = (e) => {
  //   e.preventDefault();
  // const keysIWant = [
  //   'shirtName',
  //   'isTshirt',
  //   'whereMade',
  //   'whatBrand',
  //   'fabricType',
  //   'stitchType',
  //   'isVintage',
  //   'imageUrl',
  //   ];

  //   const newShirts = _.pick(this.state, keysIWant);
  //   newShirts.uid = authData.getUid();

  //   shirtsData
  //     .createShirts(newShirts)
  //     .then((res) => {
  //       this.props.history.push(`/verifiedvintage/${res.data.name}`);
  //     })
  //     .catch((err) => console.error('new item broken', err));
  // };

  render() {
    const {
      pantName, zipperAndTongType, whereMade, fabricType, isVintage, imageUrl,
    } = this.state;
    return (
      <div className="form-wrapper">
        <h1>Edit {pantName}</h1>
      <form className="col-6 offset-3">
      {/* <button className="btn btn-dark" onClick={this.closeFormEvent}><i className="fas fa-window-close"></i></button> */}
       <div className="form-group">
      <label htmlFor="pantsimg">Pant Image</label>
      <input
        type="text"
        className="form-control"
        id="imageUrl"
        placeholder={imageUrl}
        value={imageUrl}
        onChange={this.changeImageUrlEvent}
      />
    </div>
    <div className="form-group">
      <label htmlFor="pantName">Name Your Pant</label>
      <input
        type="text"
        className="form-control"
        id="pantName"
        value={pantName}
        placeholder={pantName}
        onChange={this.changeNameEvent}
      />
    </div>
    <div className="form-group">
    <label htmlFor="wherepantsmade">Where were your pants made?</label>
    <select className="form-control" id="wherepantsmade" onChange={this.changeMadeEvent} value={whereMade}>
    <option value="" defaultselected>choose a location below </option>
      <option>USA/Korea/Hong Kong</option>
      <option>Phillipines</option>
      <option>Unknown/No Tag</option>
      <option>China/Taiwan</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="fabricType">What Kind of Fabric?</label>
    <select className="form-control" id="fabricType" onChange={this.changeFabricEvent} value={fabricType}>
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
      <option>Both Plastic</option>
      <option>Metal Teeth/Plastic Tong</option>
      <option>Both Metal</option>
    </select>
  </div>
    <button className="btn btn-dark" onClick={this.updatePantEvent}>Update Pant</button>
  </form>
  </div>
    );
  }
}

export default EditPant;
