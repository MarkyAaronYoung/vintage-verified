import React from 'react';
import { Link } from 'react-router-dom';
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
    const vintageVerify = () => {
      if (shirt.whereMade === 'China/Taiwan' || shirt.whatBrand === 'Madewell' || shirt.stitchType === 'Double Stitch') {
        return <div>Not Vintage</div>;
      }
      return <div>Vintage</div>;
    };
    const editShirtLink = `/shirts/${shirt.id}/edit/`;
    return (
      <div className="card shirt-card text-white bg-dark mb-3 rounded" id="shirtcard">
        <img src={ shirt.imageUrl } className="card-img-top rounded-circle" alt="shirtPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ shirt.shirtName }</h2>
          <p className="card-text">T-shirt: { shirt.isTshirt }</p>
          <p className="card-text">Made in: { shirt.whereMade }</p>
          <p className="card-text">Brand: { shirt.whatBrand }</p>
          <p className="card-text">Stitch Type: { shirt.stitchType }</p>
          <p className="card-text">Fabric Type: { shirt.fabricType }</p>
          <p className="card-text">{ vintageVerify()} { shirt.isVintage }</p>
          <div className="card-footer">
          <Link to={editShirtLink} className="btn btn-warning"><i className="fas fa-edit">Edit</i></Link>
          <button type="button" className="btn btn-secondary"
          onClick={this.deleteShirtEvent}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShirtCard;
