import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetails = ({result}) => {
    return ( 
    <View style={styles.viewStyle}> 
        <Image style={styles.imageStyle} source={{url: result.image_url}}/> 
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text style={styles.ratings}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 10,
    },
    viewStyle: {
        marginHorizontal: 10,
        marginBottom: 5
    },
    nameStyle: {
        color: '#196F3D',
        fontWeight: 'bold'
    },
    ratings: {
        color: '#9C640C'
    }
});

export default ResultsDetails;