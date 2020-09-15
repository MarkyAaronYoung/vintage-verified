import React from 'react';
import authData from '../../../helpers/data/authData';
import pantsData from '../../../helpers/data/pantsData';
import jeansData from '../../../helpers/data/jeansData';
import shirtsData from '../../../helpers/data/shirtsData';

import ShirtCard from '../ShirtCard/ShirtCard';
import JeanCard from '../JeanCard/JeanCard';
// import shirtsData from '../../../helpers/data/shirtsData';
// import jeansData from '../../../helpers/data/jeansData';
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

  componentDidMount() {
    this.getPants();
    this.getJeans();
    this.getShirts();
  }

  render() {
    const { pants, jeans, shirts } = this.state;
    const shirtCards = shirts.map((shirt) => <ShirtCard key={shirt.id} shirt={shirt} />);
    const pantCards = pants.map((pant) => <PantCard key={pant.id} pant={pant} />);
    const jeanCards = jeans.map((jean) => <JeanCard key={jean.id} jean={jean} />);
    return (
      <div className="VerifiedVintage">
        <h1>Verified Vintage</h1>
        <div className="card-columns">
          { pantCards }
          <div>
            { jeanCards }
            <div>
              { shirtCards }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifiedVintage;
