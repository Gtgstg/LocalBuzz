import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import MaskedView from '@react-native-community/masked-view';
const Title = ({ title }) => {
    const GradientText = props => (
        <MaskedView maskElement={<Text {...props} />}>
          <LinearGradient colors={['#8D58FF', '#5A40FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text {...props} style={[props.style, { opacity: 0 }]} />
          </LinearGradient>
        </MaskedView>
      );
    return (
        <GradientText style={styles.title}>{title}</GradientText>
        // <LinearTextGradient 
        // style={styles.title}
        // locations={[0, 1]}
        // colors={["#8D58FF", "5A40FF"]}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1, y: 0 }}
        // >
        //     {title}
        // </LinearTextGradient>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#8D58FF',
        left: 20,
        fontSize: 35,
        height: 45,
        fontWeight: 'bold'
    }
});

export default Title;