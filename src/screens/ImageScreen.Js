import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="forest"
                imageSource={require('../../assets/forest.jpg')}
                imageScore={8}
            />
            <ImageDetail
                title="beach"
                imageSource={require('../../assets/beach.jpg')}
                imageScore={3}
            />
            <ImageDetail
                title="mountain"
                imageSource={require('../../assets/mountain.jpg')}
                imageScore={9}
            />
        </View>
    )
}

const styles = StyleSheet.create({});
export default ImageScreen;