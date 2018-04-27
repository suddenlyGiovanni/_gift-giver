import * as React from 'react';

import * as Enzyme from 'enzyme';


import App from './App';

const app = Enzyme.shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
