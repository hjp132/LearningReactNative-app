import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {

    const friends = [
        {name: 'Friend 1', age: '18'},
        {name: 'Friend 2', age: '19'},
        {name: 'Friend 3', age: '20'},
        {name: 'Friend 4', age: '21'},
        {name: 'Friend 5', age: '22'},
        {name: 'Friend 6', age: '23'},

    ]
    return (
        <FlatList
        keyExtractor = {(friend) => friend.name}
        data={friends} 
        renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        }}
        />
    )

}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
});

export default ListScreen;