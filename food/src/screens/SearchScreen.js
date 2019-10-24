import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [ searchApi, results, errorMessage ] = useResults();
   
    const filerResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        });

    }

    return (
    <View>
       
        <SearchBar 
            term={term} 
            onTermChange= {setTerm} 
            onTermSubmit = {() => searchApi(term)}
            />
        
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* <Text>{term}</Text> */}
        <Text>We have found {results.length} results</Text>
       
        <ScrollView>
        <ResultsList results={filerResultsByPrice('$')}  title='Pocket friendly' />
        <ResultsList results={filerResultsByPrice('$$')}  title='Bit expensive'  />
        <ResultsList results={filerResultsByPrice('$$$')} title='Very expensive' />
        </ScrollView>

    </View>

    );
    
}

const styles = StyleSheet.create({

});


export default SearchScreen;