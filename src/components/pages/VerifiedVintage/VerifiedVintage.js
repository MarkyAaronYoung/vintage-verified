import React from 'react';
import authData from '../../../helpers/data/authData';
import pantsData from '../../../helpers/data/pantsData';
import jeansData from '../../../helpers/data/jeansData';
import shirtsData from '../../../helpers/data/shirtsData';
import dressesData from '../../../helpers/data/dressesData';

import DressCard from '../DressCard/DressCard';
import ShirtCard from '../ShirtCard/ShirtCard';
import JeanCard from '../JeanCard/JeanCard';
import PantCard from '../PantCard/PantCard';

class VerifiedVintage extends React.Component {
  state = {
    pants: [],
    shirts: [],
    jeans: [],
    dresses: [],
  }

  getPants = () => {
    pantsData.getPantsByUid(authData.getUid())
      .then((pants) => this.setState({ pants }))
      .catch((err) => console.error('get pants broke', err));
  }

  getJeans = () => {
    jeansData.getJeansByUid(authData.getUid())
      .then((jeans) => this.setState({ jeans }))
      .catch((err) => console.error('get jeans broke', err));
  }

  getShirts = () => {
    shirtsData.getShirtsByUid(authData.getUid())
      .then((shirts) => this.setState({ shirts }))
      .catch((err) => console.error('get shirts broke', err));
  }

  getDresses = () => {
    dressesData.getDressesByUid(authData.getUid())
      .then((dresses) => this.setState({ dresses }))
      .catch((err) => console.error('get dresses broke', err));
  }

  componentDidMount() {
    this.getPants();
    this.getJeans();
    this.getShirts();
    this.getDresses();
  }

  render() {
    const {
      pants, jeans, shirts, dresses,
    } = this.state;
    const shirtCards = shirts.map((shirt) => <ShirtCard key={shirt.id} shirt={shirt} />);
    const pantCards = pants.map((pant) => <PantCard key={pant.id} pant={pant} />);
    const jeanCards = jeans.map((jean) => <JeanCard key={jean.id} jean={jean} />);
    const dressCards = dresses.map((dress) => <DressCard key={dress.id} dress={dress} />);

    return (
      <div className="VerifiedVintage">
        <h1>Verified Vintage</h1>
        <div className="card-columns">
          { pantCards }
          <div>
            { jeanCards }
            <div>
              { shirtCards }
              <div>
                { dressCards }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifiedVintage;
