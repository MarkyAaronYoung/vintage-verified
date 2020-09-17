import React from 'react';
import './Home.scss';
import dress from '../../../images/40sdress.jpg';
import pant from '../../../images/giant-pants-of-the-1930s.jpg';
import shirt from '../../../images/vintageshirt.jpg';
import jeans from '../../../images/vintagejeans.jpg';

class Home extends React.Component {
  // createPlayer = (newPlayer) => {
  //   playerData.createPlayer(newPlayer)
  //     .then(() => {
  //       this.getPlayers();
  //       this.setState({ formOpen: false });
  //     })
  //     .catch((err) => console.error('Create Player Broke', err));
  // }

  createDressEvent = (e) => {
    e.preventDefault();
    const dressId = '12345';
    this.props.history.push(`/dresses/${dressId}`);
  }

  createPantEvent = (e) => {
    e.preventDefault();
    const pantsId = '12345';
    this.props.history.push(`/pants/${pantsId}`);
  }

  createJeanEvent = (e) => {
    e.preventDefault();
    const jeansId = '12345';
    this.props.history.push(`/jeans/${jeansId}`);
  }

  createShirtEvent = (e) => {
    const shirtsId = '12345';
    this.props.history.push(`/shirts/${shirtsId}`);
  }

  render() {
    return (
   <div className="app">
     <div className="quad" id="dress">
       <img src={dress} alt="" onClick={this.createDressEvent}/>
     </div>
     <div className="quad">
       <img src={pant} alt="" onClick={this.createPantEvent}/>
       </div>
       <div className="quad">
         <img src={shirt} alt="" onClick={this.createShirtEvent}/>
         </div>
         <div className="quad">
           <img src={jeans} alt="" onClick={this.createJeanEvent}/>
         </div>
       </div>
    );
  }
}

export default Home;
