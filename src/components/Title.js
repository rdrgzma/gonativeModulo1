import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

// import styles from './styles';

const Title = (props) => (
    <View style={styles.titleContainer}>
        <Text style={styles.textTitulo}>
            {props.title}
        </Text>
    </View>
);
const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#FFFFFF',
        width: width,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitulo: {
        color: '#333333',
        fontWeight: 'bold'
    }
})
export default Title;
