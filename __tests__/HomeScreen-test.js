import 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';

import renderer from 'react-test-renderer';

it('renders correctly',()=>{
    const hello = renderer.create(
        <HomeScreen/>
    );
});