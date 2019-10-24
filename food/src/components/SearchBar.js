import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
    <View style={styles.search}>
        <Feather name='search' style={styles.iconStyle}/>
     <TextInput 
        style={styles.inputStyle} 
        placeholder='search'
        value={term}
        onChangeText={ onTermChange }
        onEndEditing={ onTermSubmit } 
        />
    </View>

    );
    
}

const styles = StyleSheet.create({

    search: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row'
    },

    inputStyle: {
        flex: 1,
        marginHorizontal: 10
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 35
    }


});


export default SearchBar;