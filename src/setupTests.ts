/**
 * Defines the React 16 Adapter for Enzyme.
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import requestAnimationFrame from './tempPolyfills';

Enzyme.configure({ adapter: new Adapter() });
