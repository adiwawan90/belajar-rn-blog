import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';
// import BlogContext from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPost } = useContext(Context);

    useEffect(() => {
        getBlogPost();

        // menambahan listener supaya setelah save post langsung back ke indexScreen
        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
        });

        // mremove listener setelah dijalankan
        return () => {
            listener.remove();
        };

    }, [])

    return (
        <View>
            <Text>Ini Index Sceen ya</Text>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id, title: item.title})}>
                            <View style={styles.row}>
                                <Text style={styles.title} >{ item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
                                    <Feather name="trash" 
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );       
                }}
            />
        </View>
    );
};

// menambah icon &  functional i header
IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal:10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
    }
});

export default IndexScreen;