import React from 'react';
import axios from "axios";
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XNcOU-RVgpOUnWMRY6gWtIjU5YA2bgC1ORqDwakXij4'
    }
})
