import React from 'react';
import PropTypes from 'prop-types';
import shirtShape from '../../../helpers/props/shirtShape';
import './ShirtCard.scss';

class ShirtCard extends React.Component {
  static propTypes = {
    shirt: shirtShape.shirtShape,
    deleteShirts: PropTypes.func.isRequired,
  }

  deleteShirtEvent = (e) => {
    e.preventDefault();
    const { deleteShirts, shirt } = this.props;
    deleteShirts(shirt.id);
  }

  render() {
    const { shirt } = this.props;
    return (
      <div className="card shirt-card text-white bg-dark mb-3 rounded">
        <img src={ shirt.imageUrl } className="card-img-top rounded-circle" alt="shirtPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ shirt.shirtName }</h2>
          <p className="card-text">T-shirt: { shirt.isTshirt }</p>
          <p className="card-text">Made in: { shirt.whereMade }</p>
          <p className="card-text">Brand: { shirt.whatBrand }</p>
          <p className="card-text">Stitch Type: { shirt.stitchType }</p>
          <p className="card-text">Fabric Type: { shirt.fabricType }</p>
          <p className="card-text">Vintage: { shirt.isVintage }</p>
          <button type="button" className="btn btn-secondary"
          onClick={this.deleteShirtEvent}>Delete</button> <button className="btn btn-light" onClick={this.editShirtEvent}><i className="far fa-edit">Edit</i></button>
        </div>
      </div>
    );
  }
}

export default ShirtCard;
