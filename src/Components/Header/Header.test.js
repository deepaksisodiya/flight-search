import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from './index.js';

it('renders without crashing', () => {
  mount(<Header />);
});

it('renders Header message', () => {
  const HeaderComponent = shallow(<Header />);
  const title = <h1>Flight Search Engine</h1>;
  expect(HeaderComponent.contains(title)).toEqual(true);
});
