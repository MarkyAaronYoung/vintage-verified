import React from 'react';
import './Pants.scss';
import {
  FormGroup, Label, Input,
} from 'reactstrap';

class Pants extends React.Component {
  render() {
    return (
        <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
    );
  }
}

export default Pants;
