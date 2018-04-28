import * as React from 'react';

interface State {
  person: string;
  present: string;
}

export default class Gift extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      person: '',
      present: ''
    };
  }
  public render() {
    return <div />;
  }
}
