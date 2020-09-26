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

    const vintagePhil = () => {
      if (shirt.whereMade ==='Phillipines') {
        return <div>1990's</div>;
      }
      return <div></div>;
    }

    const vintageDecade = () => {
      if (shirt.whereMade === 'USA/Korea/Hong Kong' && shirt.fabricType === 'Polyester(any amount)') {
        return <div>1970's</div>;
      }
      else if (shirt.whereMade === 'USA/Korea/Hong Kong' && shirt.fabricType === 'All Cotton') {
        return <div>1940's to 1960's</div>;
      }
      return <div></div>;
    };

    const editShirtLink = `/shirts/${shirt.id}/edit/`;
    return (
      <div className="card shirt-card text-white mb-3 rounded mx-auto" id="shirtcard">
        <img id="cardimage" src={ shirt.imageUrl } className="card-img-top rounded-circle mx-auto" alt="shirtPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ shirt.shirtName }</h2>
          {/* <p className="card-text">T-shirt: { shirt.isTshirt }</p>
          <p className="card-text">Made in: { shirt.whereMade }</p>
          <p className="card-text">Brand: { shirt.whatBrand }</p>
          <p className="card-text">Stitch Type: { shirt.stitchType }</p>
          <p className="card-text">Fabric Type: { shirt.fabricType }</p> */}
          <h3 className="card-text">{vintageVerify()} {vintageDecade()}  {vintagePhil()}{ shirt.isVintage }</h3>
          <div className="card-footer">
          <Link to={editShirtLink} className="btn btn-secondary" id="editbutton"><i className="fas fa-edit">Edit</i></Link>
          <button type="button" className="btn btn-secondary"
          onClick={this.deleteShirtEvent}><i className="fa fa-trash" aria-hidden="true">Delete</i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShirtCard;
