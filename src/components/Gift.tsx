import * as React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

interface Props {
  gift: { id: number };
  removeGift: (id: number) => void;
}
interface State {
  person: string;
  present: string;
}

export default class Gift extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { person: '', present: '' };
  }

  public handleInputPerson = (e: React.SyntheticEvent<any>): void => {
    this.setState({ person: e.currentTarget.value });
  };

  public handleInputPresent = (e: React.SyntheticEvent<any>): void => {
    this.setState({ present: e.currentTarget.value });
  };

  public handleButtonRemove = (): void => this.props.removeGift(this.props.gift.id);

  public render() {
    return (
      <div className="gift">
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl className="input-person" name="person" onChange={this.handleInputPerson} />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              className="input-present"
              name="present"
              onChange={this.handleInputPresent}
            />
          </FormGroup>
        </Form>
        <Button className="btn-remove" onClick={this.handleButtonRemove}>
          Remove Gift
        </Button>
      </div>
    );
  }
}
