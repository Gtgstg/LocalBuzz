import 'react-native';
import React from 'react';
import Done from '../src/components/car/Done';

import renderer from 'react-test-renderer';

it('renders correctly',()=>{
    const hello = renderer.create(
        <Done />
    );
});