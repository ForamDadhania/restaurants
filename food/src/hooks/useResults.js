import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    console.log('Hi');
    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'toronto'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            // console.log(e);
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('tea')
    }, []);

    return [searchApi, results, errorMessage];

};