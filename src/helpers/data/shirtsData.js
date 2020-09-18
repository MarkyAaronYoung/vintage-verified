import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getShirtsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shirts.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getShirtsById = (shirtId) => axios.get(`${baseUrl}/shirts/${shirtId}.json`);

const createShirts = (newShirt) => axios.post(`${baseUrl}/shirts.json`, newShirt);

const deleteShirts = (shirtId) => axios.delete(`${baseUrl}/shirts/${shirtId}.json`);

const updateShirts = (shirtId, editedShirt) => axios.put(`${baseUrl}/shirts/${shirtId}.json`, editedShirt);

export default {
  getShirtsByUid, createShirts, deleteShirts, updateShirts, getShirtsById,
};
