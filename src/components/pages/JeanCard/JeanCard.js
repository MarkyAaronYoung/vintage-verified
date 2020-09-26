import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import jeanShape from '../../../helpers/props/jeanShape';
import './JeanCard.scss';

class PantCard extends React.Component {
  static propTypes = {
    jean: jeanShape.jeanShape,
    deleteJeans: PropTypes.func.isRequired,
  }

  deleteJeanEvent = (e) => {
    e.preventDefault();
    const { deleteJeans, jean } = this.props;
    deleteJeans(jean.id);
  }

  render() {
    const { jean } = this.props;
    const vintageVerify = () => {
      if (jean.whereMade === 'USA/Mexico') {
        return <div>Vintage</div>;
      }
      return <div>Not Vintage</div>;
    };

    const vintageDecade = () => {
      if (jean.whereMade === 'USA/Mexico' && jean.whatBrand === 'Levis' && jean.whatColorTab === 'Red') {
        return <div>1940's</div>;
      } if (jean.whatColorTab === 'Silver') {
        return <div>1980's to 1990's</div>;
      } if (jean.whatColorTab === 'Black' || jean.whatColorTab === 'Orange') {
        return <div>1990's</div>;
      }
      return <div></div>;
    };

    const editJeanLink = `/jeans/${jean.id}/edit`;
    return (
      <div className="card jean-card text-white mb-3 rounded mx-auto" id="jeancard">
        <img id="cardimage" src={ jean.imageUrl } className="card-img-top rounded-circle mx-auto" alt="jeanPort"></img>
        <div className="card-body">
          <h2 className="card-title">{ jean.jeanName }</h2>
          {/* <p className="card-text">Made in: { jean.whereMade }</p>
          <p className="card-text">Brand: { jean.whatBrand }</p>
          <p className="card-text">Fabric Type: { jean.fabricType }</p>
          <p className="card-text">Color Tab: { jean.whatColorTab }</p> */}
          <h3 className="card-text">{vintageVerify()} {vintageDecade()} { jean.isVintage }</h3>
          <div className="card-footer">
          <Link to={editJeanLink} className="btn btn-secondary" id="editbutton"><i className="far fa-edit">Edit</i></Link>
          <button type="button" className="btn btn-secondary"
          onClick={this.deleteJeanEvent}><i className="fa fa-trash" aria-hidden="true">Delete</i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default PantCard;
