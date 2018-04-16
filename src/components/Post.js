import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

// import styles from './styles';

const Post = (props) => (
    <View style={styles.container}>
        <Text style={styles.textTitlePost}>{props.title}</Text>
        <Text style={styles.textAuthorPost}>{props.author}</Text>
        <View style={styles.borderStyle}/>
        <Text style={styles.textDescriptionPost}>{props.description}</Text>
    </View>
);
const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 20,
        backgroundColor: '#FFFFFF',
        width: width - 40
    },
    textTitlePost: {
        fontWeight: 'bold',
        color: '#333333'
    },
    textAuthorPost: {
        color: '#999999',
        marginBottom: 10
    },
    textDescriptionPost: {
        color: '#666666',
        marginTop: 10
    },
    borderStyle: {
        borderWidth: 1,
        borderColor: '#EEEEEE'

    }
})

export default Post;
