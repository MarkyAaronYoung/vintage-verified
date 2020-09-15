import React from 'react';
// import PropTypes from 'prop-types';
import shirtShape from '../../../helpers/props/shirtShape';

class ShirtCard extends React.Component {
  static propTypes = {
    shirt: shirtShape.shirtShape,
  }

  render() {
    const { shirt } = this.props;
    return (
      <div className="card pant-card text-white bg-dark mb-3 rounded">
        <img src={ shirt.imageUrl } className="card-img-top rounded-circle" alt="pantPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ shirt.shirtName }</h2>
          <p className="card-text">T-shirt: { shirt.isTshirt }</p>
          <p className="card-text">Made in: { shirt.whereMade }</p>
          <p className="card-text">Brand: { shirt.whatBrand }</p>
          <p className="card-text">Stitch Type: { shirt.stitchType }</p>
          <p className="card-text">Fabric Type: { shirt.fabricType }</p>
          <p className="card-text">Vintage: { shirt.isVintage }</p>
          <button type="button" className="btn btn-secondary"
          onClick={this.deletePantEvent}>Delete</button> <button className="btn btn-light" onClick={this.editPantEvent}><i className="far fa-edit">Edit</i></button>
        </div>
      </div>
    );
  }
}

export default ShirtCard;
