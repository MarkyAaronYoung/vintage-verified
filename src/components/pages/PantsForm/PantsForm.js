import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';

class PantsForm extends React.Component {
  state = {
    imageUrl: '',
    pantsName: '',
    whereMade: '',
    zipperAndTongType: '',
    fabricType: '',
    isVintage: '',
  }

  render() {
    return (
      <FormGroup>
      <Label for="exampleSelect">Select</Label>
      <Input type="text" name="select" id="exampleSelect">
        <select>
        <option value="USA/Korea/Hong Kong">USA/Korea/Hong Kong</option>
        <option>4</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
          </select>
      </Input>
    </FormGroup>
    );
  }
}

export default PantsForm;
