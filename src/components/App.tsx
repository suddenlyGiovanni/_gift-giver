import * as React from 'react';
import { Button } from 'react-bootstrap';
import { maxNumber } from '../helper';
import Gift from './Gift';

interface State {
  gifts: Array<{ id: number }>;
}
export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { gifts: [] };
  }

  public addGift = () => {
    const { gifts } = this.state;
    gifts.push({ id: maxNumber(gifts.map(gift => gift.id)) + 1 });
    this.setState({ gifts });
  };

  public removeGift = (id: number): void => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts });
  };

  public render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts &&
            this.state.gifts.map(gift => (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            ))}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}
