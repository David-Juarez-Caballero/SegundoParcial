const express = require('express');
const{
    getData,
    updateData} = require ('../controllers');

    const router = express.Router();

    router.get('/get-user-data/:id', getData);

    router.get('/update-user-adress/:id', updateData);


    module.exports = {
        router
    }