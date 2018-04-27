import * as React from 'react';

import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';

const app = Enzyme.shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
