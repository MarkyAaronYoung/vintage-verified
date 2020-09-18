import React from 'react';
import PropTypes from 'prop-types';
// import authData from '../../../helpers/data/authData';
import dressShape from '../../../helpers/props/dressShape';
import './DressCard.scss';

class DressCard extends React.Component {
  static propTypes = {
    dress: dressShape.dressShape,
    deleteDress: PropTypes.func.isRequired,
    editADress: PropTypes.func.isRequired,
  }

  deleteDressEvent = (e) => {
    e.preventDefault();
    const { deleteDress, dress } = this.props;
    deleteDress(dress.id);
  }

  render() {
    const { dress } = this.props;
    return (
      <div className="card dress-card text-white bg-dark mb-3 rounded" id="dresscard">
        <img src={ dress.imageUrl } className="card-img-top rounded-circle" alt="dressPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ dress.dressName }</h2>
          <p className="card-text">Skirt: { dress.isSkirt }</p>
          <p className="card-text">Made in: { dress.whereMade }</p>
          <p className="card-text">Zipper and Tong Type: { dress.zipperAndTongType }</p>
          <p className="card-text"> Fabric Type: { dress.fabricType }</p>
          <p className="card-text"> Vintge: { dress.isVintage }</p>
          <button type="button" className="btn btn-secondary"
          onClick={this.deleteDressEvent}>Delete</button> <button className="btn btn-light" onClick={this.editDressEvent}><i className="far fa-edit">Edit</i></button>
        </div>
      </div>
    );
  }
}

export default DressCard;
