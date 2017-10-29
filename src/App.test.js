import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux'
import moodyStore from './store/reducers'
import App from './App'

configure({ adapter: new Adapter() });

const store = createStore(moodyStore);

it('renders without crashing', () => {
  shallow(<App store={store} />);
});
