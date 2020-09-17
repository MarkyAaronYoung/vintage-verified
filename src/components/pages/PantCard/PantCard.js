import React from 'react';
import PropTypes from 'prop-types';
import pantShape from '../../../helpers/props/pantShape';
import './PantCard.scss';

class PantCard extends React.Component {
  static propTypes = {
    pant: pantShape.pantShape,
    deletePants: PropTypes.func.isRequired,
  }

  deletePantEvent = (e) => {
    e.preventDefault();
    const { deletePants, pant } = this.props;
    deletePants(pant.id);
  }

  render() {
    const { pant } = this.props;
    return (
      <div className="card pant-card text-white bg-dark mb-3 rounded" id="pantcard">
        <img src={ pant.imageUrl } className="card-img-top rounded-circle" alt="pantPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ pant.pantsName }</h2>
          <p className="card-text">Made in: { pant.whereMade }</p>
          <p className="card-text">Zipper and Tong Type: { pant.zipperAndTongType }</p>
          <p className="card-text"> Fabric Type: { pant.fabricType }</p>
          <p className="card-text"> Vintge: { pant.isVintage }</p>
          <button type="button" className="btn btn-secondary"
          onClick={this.deletePantEvent}>Delete</button> <button className="btn btn-light" onClick={this.editPantEvent}><i className="far fa-edit">Edit</i></button>
        </div>
      </div>
    );
  }
}

export default PantCard;
