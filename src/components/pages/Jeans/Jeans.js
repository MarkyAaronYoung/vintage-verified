import React from 'react';
import _ from 'underscore';
import './Jeans.scss';
import authData from '../../../helpers/data/authData';
import jeansData from '../../../helpers/data/jeansData';

class Jeans extends React.Component {
  // static propTypes = {
  //   createDress: PropTypes.func.isRequired,
  // }

  state = {
    jeanName: '',
    whereMade: '',
    fabricType: '',
    whatBrand: '',
    whatColorTab: '',
    isVintage: '',
    imageUrl: '',
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ jeanName: e.target.value });
  }

  changeMadeEvent = (e) => {
    e.preventDefault();
    this.setState({ whereMade: e.target.value });
  }

  changeFabricEvent = (e) => {
    e.preventDefault();
    this.setState({ fabricType: e.target.value });
  }

  changeBrandEvent = (e) => {
    e.preventDefault();
    this.setState({ whatBrand: e.target.value });
  }

  changeColorTabEvent = (e) => {
    e.preventDefault();
    this.setState({ whatColorTab: e.target.value });
  }

  verifyJeansEvent = (e) => {
    e.preventDefault();
    const keysIWant = [
      'jeanName',
      'whereMade',
      'fabricType',
      'whatBrand',
      'whatColorTab',
      'isVintage',
      'imageUrl',
    ];

    const newJeans = _.pick(this.state, keysIWant);
    newJeans.uid = authData.getUid();

    jeansData
      .createJeans(newJeans)
      .then((res) => {
        this.props.history.push(`/verifiedvintage/${res.data.name}`);
      })
      .catch((err) => console.error('new item broken', err));
  };

  render() {
    return (
      <form className="col-6 offset-3">
      {/* <button className="btn btn-dark" onClick={this.closeFormEvent}><i className="fas fa-window-close"></i></button> */}
       <div className="form-group">
      <label htmlFor="jeansimg">Jeans Image</label>
      <input
        type="text"
        className="form-control"
        id="imageUrl"
        placeholder="Add A Photo of Your Jeans"
        onChange={this.changeImageUrlEvent}
      />
    </div>
    <div className="form-group">
      <label htmlFor="jeanName">Jeans Name</label>
      <input
        type="text"
        className="form-control"
        id="jeanName"
        placeholder="Give Your Jeans a Name (ex: Thrift Store Faded Jeans)"
        onChange={this.changeNameEvent}
      />
    </div>
    <div className="form-group">
    <label htmlFor="wherejeansmade">Where were your jeans made?</label>
    <select className="form-control" id="wherejeansmade" onChange={this.changeMadeEvent}>
      <option value="" default selected>choose a location below</option>
      <option>USA/Mexico</option>
      <option>China/Bangladesh/Phillipines</option>
      <option>Unknown/No Tag</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="fabricType">What Kind of Fabric?</label>
    <select className="form-control" id="fabricType" onChange={this.changeFabricEvent} placeholder="choose a fabric below">
      <option value="" default selected>choose a fabric below</option>
      <option>All Cotton</option>
      <option>Anything Other Than Cotton</option>
      <option>Unknown</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="whatBrand">What Brand?</label>
    <select className="form-control" id="whatBrand" onChange={this.changeBrandEvent}>
      <option value="" default selected>choose a Brand below</option>
      <option>Levis</option>
      <option>Wrangler</option>
      <option>Tommy Hilfgier</option>
      <option>Madewell</option>
      <option>Union Made</option>
      <option>Calvin Klein</option>
      <option>Handmade</option>
      <option>Unknown/Other</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="whatColorTab">What Color Tab (if there is one)</label>
    <select className="form-control" id="whatColorTab" onChange={this.changeColorTabEvent}>
      <option value="" default selected>choose a color tab below (if your jeans have a tab)</option>
      <option>Red</option>
      <option>Blue</option>
      <option>Silver</option>
      <option>Orange</option>
    </select>
  </div>
  {/* {vintageVerify()} */}
    <button className="btn btn-dark" onClick={this.verifyJeansEvent}>Verify Jeans</button>
  </form>
    );
  }
}

export default Jeans;
