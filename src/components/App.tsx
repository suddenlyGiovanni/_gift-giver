import * as React from 'react';
import { Button } from 'react-bootstrap';

interface IState {
  gifts?: Array<{ id: number }>;
}
export default class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { gifts: [] };
  }

  public addGift = () => {
    const { gifts } = this.state;
    if (gifts) {
      const ids = gifts.map(gift => gift.id);
      const maxId = ids.length > 0 ? Math.max(...ids) : 0;

      gifts.push({ id: maxId + 1 });
    }
    this.setState({ gifts });
  };

  public render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts && this.state.gifts.map(gift => <div key={gift.id} />)}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}
