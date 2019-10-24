import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
if (!results.length) {
    return null;
}

    return  (
    <View>
        <Text style={styles.title}>
            {title}
        </Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator = { false }
            data = {results}
            keyExtractor = {result => result.id}
            renderItem = {({item}) => {
                 return (
                    <TouchableOpacity
                    onPress={() => {navigation.navigate('Results',{ id: item.id })}
                  } >
                    <ResultsDetails result = {item} />
                </TouchableOpacity>
                 );
                
            }}
        
        />
    </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 10,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);