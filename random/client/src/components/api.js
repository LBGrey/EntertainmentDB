import React from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/',
    headers: {
        'content-type':'application/json',
        'x-rapidapi-host':'ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com',
        'x-rapidapi-key': '41a3f9c7a0msh0d159e2ac7cdb26p14e602jsna0325e11b02b'
    },
});
export default {
    getData: () =>
    instance({
        'method':'GET',
        'url':'/query',
        // 'params': {
        //     'title': ''
        // },
        transformResponse: [function (data) {
            // Do whatever you want to transform the data
            console.log('Transforming data...')
            const json = JSON.parse(data)
            // list of nested object keys
            const title = Object.keys(json['nested object'])
            data = {
                title
            }
            return data;
        }],
    }),

}


