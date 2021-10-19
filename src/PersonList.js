import React from 'react';
import axios from 'axios';

export const PersonList = () => {
    axios.post('https://localhost:4000/api/admin/sign_in', {
        password: '',
        username: ''
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}