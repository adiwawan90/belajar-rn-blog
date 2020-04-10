import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';
// import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const { state, addBlogPost} = useContext(Context);
    return (
        <View>
            <Text>Ini Index Sceen ya</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{ item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;