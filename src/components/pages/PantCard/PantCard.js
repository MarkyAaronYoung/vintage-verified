import React from 'react';
import { Link } from 'react-router-dom';
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
    const vintageVerify = () => {
      if (pant.whereMade === 'China/Taiwan' || pant.fabricType === 'Spandex') {
        return <div>Not Vintage</div>;
      }
      return <div>Vintage</div>;
    };
    const editPantLink = `/pants/${pant.id}/edit`;
    return (
      <div className="card pant-card text-white mb-3 rounded mx-auto" id="pantcard">
        <img id="cardimage" src={ pant.imageUrl } className="card-img-top rounded-circle mx-auto" alt="pantPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ pant.pantsName }</h2>
          {/* <p className="card-text">Made in: { pant.whereMade }</p>
          <p className="card-text">Zipper and Tong Type: { pant.zipperAndTongType }</p>
          <p className="card-text"> Fabric Type: { pant.fabricType }</p> */}
          <h3 className="card-text"> {vintageVerify()} { pant.isVintage }</h3>
          <div className="card-footer">
          <Link to={editPantLink} className="btn btn-secondary"><i className="fas fa-edit" id="editbutton">Edit</i></Link>
          <button type="button" className="btn btn-secondary"
          onClick={this.deletePantEvent}><i class="fa fa-trash" aria-hidden="true">Delete</i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default PantCard;
