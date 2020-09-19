import React from 'react';
import shirtsData from '../../../helpers/data/shirtsData';

class EditShirt extends React.Component {
  state = {
    shirt: {
      shirtName: '',
      isTshirt: '',
      whereMade: '',
      fabricType: '',
      whatBrand: '',
      stitchType: '',
      isVintage: '',
      imageUrl: '',
    },
  }

  componentDidMount() {
    shirtsData.getShirtsById(this.props.match.params.shirtId)
      .then((res) => {
        const shirt = res.data;
        this.setState({ shirt });
      })
      .catch((err) => console.error('cannot get shirt', err));
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    const { shirt } = this.state;
    shirt.imageUrl = e.target.value;
    this.setState({ shirt });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    const { shirt } = this.state;
    shirt.shirtName = e.target.value;
    this.setState({ shirt });
  }

  changeMadeEvent = (e) => {
    e.preventDefault();
    const { shirt } = this.state;
    shirt.whereMade = e.target.value;
    this.setState({ shirt });
  }

  changeFabricEvent = (e) => {
    e.preventDefault();
    const { shirt } = this.state;
    shirt.fabricType = e.target.value;
    this.setState({ shirt });
  }

  changeStitchTypeEvent = (e) => {
    e.preventDefault();
    const { shirt } = this.state;
    shirt.stitchType = e.target.value;
    this.setState({ shirt });
  }

  changeBrandEvent = (e) => {
    e.preventDefault();
    const { shirt } = this.state;
    shirt.whatBrand = e.target.value;
    this.setState({ shirt });
  }

  updateShirtEvent = (e) => {
    e.preventDefault();
    const { shirtId } = this.props.match.params;

    shirtsData
      .updateShirts(shirtId, this.state.shirt)
      .then(() => {
        this.props.history.push(`/verifiedvintage/${shirtId}`);
      })
      .catch((err) => console.error('edit shirt broke', err));
  };

  render() {
    const {
      isTshirt, shirtName, whereMade, whatBrand, fabricType, stitchType, isVintage, imageUrl,
    } = this.state.shirt;
    return (
      <div className="form-wrapper">
        <h1>Edit {shirtName} </h1>
      <form className="col-6 offset-3">
      {/* <button className="btn btn-dark" onClick={this.closeFormEvent}><i className="fas fa-window-close"></i></button> */}
       <div className="form-group">
      <label htmlFor="imageUrl">Shirt Image</label>
      <input
        type="text"
        alt="missingimage"
        className="form-control"
        id="imageUrl"
        placeholder="Add A Photo of Your Shirt"
        value={imageUrl}
        onChange={this.changeImageUrlEvent}
      />
    </div>
    <div className="form-group">
      <label htmlFor="shirtName">Name Your Shirt</label>
      <input
        type="text"
        className="form-control"
        id="shirtName"
        value={shirtName}
        placeholder="Give Your Shirt a Name (ex: White t-shirt I bought on Labor Day)"
        onChange={this.changeNameEvent}
      />
    </div>
    <div className="form-group">
    <label htmlFor="whereshirtmade">Where was your shirt made?</label>
    <select className="form-control" id="whereshirtmade" onChange={this.changeMadeEvent} value={whereMade}>
    <option value="" defaultselected>choose a location below </option>
      <option>USA/Korea/Hong Kong</option>
      <option>Phillipines</option>
      <option>Unknown/No Tag</option>
      <option>China/Taiwan</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="isTshirt">Is it a T-shirt?</label>
    <select className="form-control" id="isTshirt" onChange={this.changeTshirtEvent} value={isTshirt}>
    <option value="" defaultselected>choose an answer below</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="fabricType">What Kind of Fabric?</label>
    <select className="form-control" id="fabricType" onChange={this.changeFabricEvent} value={fabricType}>
    <option value="" defaultselected>choose a fabric below </option>
      <option>All Cotton</option>
      <option>Polyester(any amount)</option>
      <option>Spandex</option>
      <option>unknown/other</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="stitchType">What Kind of Stitch?</label>
    <select className="form-control" id="stitchType" onChange={this.changeStitchTypeEvent} value={stitchType}>
    <option value="" defaultselected>choose a stitch below </option>
      <option>Single Stitch</option>
      <option>Double Stitch</option>
      <option>Unknown/Other</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="whatBrand">What Brand?</label>
    <select className="form-control" id="whatBrand" onChange={this.changeBrandEvent} value={whatBrand}>
      <option value="" default selected>choose a brand below</option>
      <option>Madewell</option>
      <option>American Apparel</option>
      <option>Other/Unknown</option>
    </select>
  </div>
    <button className="btn btn-dark" onClick={this.updateShirtEvent}>Update Shirt</button>
  </form>
  </div>
    );
  }
}

export default EditShirt;
