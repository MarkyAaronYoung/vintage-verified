import React from 'react';
import pantsData from '../../../helpers/data/pantsData';

class EditPant extends React.Component {
  state = {
    pant: {
      pantsName: '',
      whereMade: '',
      fabricType: '',
      zipperAndTongType: '',
      isVintage: '',
      imageUrl: '',
    },
  }

  componentDidMount() {
    pantsData.getPantsById(this.props.match.params.pantId)
      .then((res) => {
        const pant = res.data;
        this.setState({ pant });
      })
      .catch((err) => console.error('cannot get item', err));
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    const { pant } = this.state;
    pant.imageUrl = e.target.value;
    this.setState({ pant });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    const { pant } = this.state;
    pant.pantsName = e.target.value;
    this.setState({ pant });
  }

  changeMadeEvent = (e) => {
    e.preventDefault();
    const { pant } = this.state;
    pant.whereMade = e.target.value;
    this.setState({ pant });
  }

  changeFabricEvent = (e) => {
    e.preventDefault();
    const { pant } = this.state;
    pant.fabricType = e.target.value;
    this.setState({ pant });
  }

  changeZipperEvent = (e) => {
    e.preventDefault();
    const { pant } = this.state;
    pant.zipperAndTongType = e.target.value;
    this.setState({ pant });
  }

  updatePantEvent = (e) => {
    e.preventDefault();
    const { pantId } = this.props.match.params;

    pantsData
      .updatePants(pantId, this.state.pant)
      .then(() => {
        this.props.history.push(`/verifiedvintage/${pantId}`);
      })
      .catch((err) => console.error('edit pant broke', err));
  };

  render() {
    const {
      pantsName, zipperAndTongType, whereMade, fabricType, isVintage, imageUrl,
    } = this.state.pant;
    return (
      <div className="form-wrapper">
        <h1>Edit {pantsName}</h1>
      <form className="col-6 offset-3">
       <div className="form-group">
      <label htmlFor="imageUrl">Pant Image</label>
      <input
        type="text"
        alt="missingimage"
        className="form-control"
        id="imageUrl"
        placeholder="Enter Item Image"
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
        value={pantsName}
        placeholder="Name Your Pants"
        onChange={this.changeNameEvent}
      />
    </div>
    <div className="form-group">
    <label htmlFor="wherepantsmade">Where were your pants made?</label>
    <select className="form-control" id="wherepantsmade" onChange={this.changeMadeEvent} value={whereMade}>
    <option>choose a location below </option>
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
