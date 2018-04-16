import React, {Component} from 'react';

import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import Post from './components/Post'
import Title from './components/Title';
// import styles from './styles';

export default class App extends Component {
    state = {
        posts: [
            {
                id: 0,
                title: "Title Post",
                author: "Author Post",
                description: "Description Post"
            }, {
                id: 1,
                title: "Title Post 1",
                author: "Author Post 1",
                description: "Description Post 1"
            }, {
                id: 2,
                title: "Title Post 2",
                author: "Author Post 2",
                description: "Description Post 2"
            }, {
                id: 3,
                title: "Title Post 3",
                author: "Author Post 3",
                description: "Description Post 3"
            }, {
                id: 4,
                title: "Title Post 4",
                author: "Author Post 4",
                description: "Description Post 4"
            }, {
                id: 5,
                title: "Title Post 5",
                author: "Author Post 5",
                description: "Description Post 5"
            }
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                <Title title='Titulo App'/>
                <ScrollView>
                    {this
                        .state
                        .posts
                        .map(post => (<Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            description={post.description}/>))}
                </ScrollView>

            </View>

        );
    }
}
const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE7777',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
})
