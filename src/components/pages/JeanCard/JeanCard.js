import React from 'react';
import PropTypes from 'prop-types';
import jeanShape from '../../../helpers/props/jeanShape';

class PantCard extends React.Component {
  static propTypes = {
    jean: jeanShape.jeanShape,
    deleteJeans: PropTypes.func.isRequired,
    editAJean: PropTypes.func.isRequired,
  }

  deleteJeanEvent = (e) => {
    e.preventDefault();
    const { deleteJeans, jean } = this.props;
    deleteJeans(jean.id);
  }

  editJeanEvent = (e) => {
    e.preventDefault();
    const { editAJean, jean } = this.props;
    editAJean(jean);
  }

  render() {
    const { jean } = this.props;
    return (
      <div className="card jean-card text-white bg-dark mb-3 rounded">
        <img src={ jean.imageUrl } className="card-img-top rounded-circle" alt="jeanPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ jean.jeanName }</h2>
          <p className="card-text">Made in: { jean.whereMade }</p>
          <p className="card-text">Brand: { jean.whatBrand }</p>
          <p className="card-text">Fabric Type: { jean.fabricType }</p>
          <p className="card-text">Color Tab: { jean.whatColorTab }</p>
          <p className="card-text">Vintage: { jean.isVintage }</p>
          <button type="button" className="btn btn-secondary"
          onClick={this.deleteJeanEvent}>Delete</button> <button className="btn btn-light" onClick={this.editJeanEvent}><i className="far fa-edit">Edit</i></button>
        </div>
      </div>
    );
  }
}

export default PantCard;
