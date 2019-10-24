import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer qzkvagmqcrJksbT1oIAF7vgeHfKz1kdN8JJ3eGTJCCXmG4T22IeuhO5-jHpIVvi5a0VQ2mBC_vdU4qPlN6CwaFBavfV663ZL81qkR_XiE0-S84LiqMJjlHrjdWqTXXYx'
    }
});


// const request = new Request('https://api.yelp.com/v3/businesses');
//  const URL = request.url;
//  const method = request.method;
//  const credentials = request.credentials;

//  fetch(request)
//  .then(response => response.blob())
 