import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import authData from '../../../helpers/data/authData';
import dressShape from '../../../helpers/props/dressShape';
import './DressCard.scss';

class DressCard extends React.Component {
  static propTypes = {
    dress: dressShape.dressShape,
    deleteDress: PropTypes.func.isRequired,
  }

  deleteDressEvent = (e) => {
    e.preventDefault();
    const { deleteDress, dress } = this.props;
    deleteDress(dress.id);
  }

  render() {
    const { dress } = this.props;
    const vintageVerify = () => {
      if (dress.whereMade === 'China/Taiwan' || dress.fabricType === 'Spandex') {
        return <div>Not Vintage</div>;
      }
      return <div>Vintage</div>;
    };

      const vintageDecade = () =>{
        if (dress.whereMade === 'USA/Korea/Hong Kong' && dress.zipperAndTongType === 'Both Metal') {
          return <div>1920's to 1950's</div>;
        } else if (dress.whereMade === 'USA/Korea/Hong Kong' && dress.zipperAndTongType === 'Metal Teeth/Plastic Tong') {
          return <div>1970's to 1980's</div>;
        } else if (dress.whereMade === 'USA/Korea/Hong Kong' && dress.zipperAndTongType === 'Both Plastic') {
          return <div>1980's</div>;
        } 
        return <div></div>;
      };

    const editDressLink = `/dresses/${dress.id}/edit`;
    return (
      <div className="card dress-card text-white mb-3 rounded mx-auto" id="dresscard">
        <img id="cardimage" src={ dress.imageUrl } className="card-img-top rounded-circle mx-auto" alt="dressPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ dress.dressName }</h2>
          {/* <p className="card-text">Skirt: { dress.isSkirt }</p>
          <p className="card-text">Made in: { dress.whereMade }</p>
          <p className="card-text">Zipper and Tong Type: { dress.zipperAndTongType }</p>
          <p className="card-text"> Fabric Type: { dress.fabricType }</p> */}
          <h3 className="card-text"> {vintageVerify()} {vintageDecade()} { dress.isVintage }</h3>
          <div className="card-footer">
          <Link to={editDressLink} className="btn btn-secondary" id="editbutton"><i className="far fa-edit">Edit</i></Link>
          <button type="button" className="btn btn-secondary"
          onClick={this.deleteDressEvent}><i class="fa fa-trash" aria-hidden="true">Delete</i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default DressCard;
