import React from 'react';
import jeansData from '../../../helpers/data/jeansData';

class EditJean extends React.Component {
  state = {
    jean: {
      jeanName: '',
      whatColorTab: '',
      whereMade: '',
      fabricType: '',
      whatBrand: '',
      isVintage: '',
      imageUrl: '',
    },
  }

  componentDidMount() {
    jeansData.getJeansById(this.props.match.params.jeanId)
      .then((res) => {
        const jean = res.data;
        this.setState({ jean });
      })
      .catch((err) => console.error('cannot get jean', err));
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    const { jean } = this.state;
    jean.imageUrl = e.target.value;
    this.setState({ jean });
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    const { jean } = this.state;
    jean.jeanName = e.target.value;
    this.setState({ jean });
  }

  changeMadeEvent = (e) => {
    e.preventDefault();
    const { jean } = this.state;
    jean.whereMade = e.target.value;
    this.setState({ jean });
  }

  changeFabricEvent = (e) => {
    e.preventDefault();
    const { jean } = this.state;
    jean.fabricType = e.target.value;
    this.setState({ jean });
  }

  changeBrandEvent = (e) => {
    e.preventDefault();
    const { jean } = this.state;
    jean.whatBrand = e.target.value;
    this.setState({ jean });
  }

  changeColorTabEvent = (e) => {
    e.preventDefault();
    const { jean } = this.state;
    jean.whatColorTab = e.target.value;
    this.setState({ jean });
  }

  updateJeanEvent = (e) => {
    e.preventDefault();
    const { jeanId } = this.props.match.params;

    jeansData
      .updateJeans(jeanId, this.state.jean)
      .then(() => {
        this.props.history.push(`/verifiedvintage/${jeanId}`);
      })
      .catch((err) => console.error('edit jean broke', err));
  };

  render() {
    const {
      jeanName, whatColorTab, whereMade, whatBrand, fabricType, imageUrl, isVintage,
    } = this.state.jean;

    const vintageVerify = () => {
      const { jean } = this.state;
      if (jean.whereMade === 'USA/Mexico') {
        return <div>Vintage</div>;
      }
      return <div>NOt Vintage</div>;
    };

    return (
      <div className="form-wrapper">
        <h1>Edit {jeanName} </h1>
      <form className="col-6 offset-3">
      {/* <button className="btn btn-dark" onClick={this.closeFormEvent}><i className="fas fa-window-close"></i></button> */}
       <div className="form-group">
      <label htmlFor="imageUrl">Jean Image</label>
      <input
        type="text"
        alt="missingimage"
        className="form-control"
        id="imageUrl"
        placeholder="Add A Photo of Your Jean"
        value={imageUrl}
        onChange={this.changeImageUrlEvent}
      />
    </div>
    <div className="form-group">
      <label htmlFor="shirtName">Name Your Jean</label>
      <input
        type="text"
        className="form-control"
        id="jeanName"
        value={jeanName}
        placeholder="Give Your Jeans a Name (ex: Faded jeans I found at yard sale)"
        onChange={this.changeNameEvent}
      />
    </div>
    <div className="form-group">
    <label htmlFor="wherejeanmade">Where were your jeans made?</label>
    <select className="form-control" id="wherejeanmade" onChange={this.changeMadeEvent} value={whereMade}>
    <option value="" defaultselected>choose a location below </option>
      <option>USA/Mexico</option>
      <option>China/Bangladesh/Phillipines</option>
      <option>Unknown/No Tag</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="whatColorTab">What Color Tab</label>
    <select className="form-control" id="whatColorTab" onChange={this.changeColorTabEvent} value={whatColorTab}>
      <option value="" default selected>choose a color tab below (if your jeans have a tab)</option>
      <option>Red</option>
      <option>Blue</option>
      <option>Silver</option>
      <option>Orange</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="fabricType">What Kind of Fabric?</label>
    <select className="form-control" id="fabricType" onChange={this.changeFabricEvent} value={fabricType}>
      <option value="" default selected>choose a fabric below</option>
      <option>All Cotton</option>
      <option>Anything Other Than Cotton</option>
      <option>Unknown</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="whatBrand">What Brand?</label>
    <select className="form-control" id="whatBrand" onChange={this.changeBrandEvent} value={whatBrand}>
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
      {vintageVerify()}
    <button className="btn btn-dark" onClick={this.updateJeanEvent}>Update Jean</button>
  </form>
  </div>
    );
  }
}

export default EditJean;
