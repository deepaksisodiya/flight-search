import React from 'react';
import { shallow, mount } from 'enzyme';
import moment from 'moment';

import SubHeader from './index.js';

it('renders without crashing', () => {
  mount(
    <SubHeader
      originCity="Pune"
      destinationCity="Delhi"
      isOneWay={true}
      departDateObj={moment()}
    />
  );
});

it('renders SubHeader message', () => {
  const SubHeaderComponent = shallow(
    <SubHeader
      originCity="Pune"
      destinationCity="Delhi"
      isOneWay={true}
      departDateObj={moment()}
    />
  );
  const title = <p className="sub-header-title">Pune > Delhi</p>;
  expect(SubHeaderComponent.contains(title)).toEqual(true);
});
