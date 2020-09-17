import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getShirtsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shirts.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const createShirts = (newShirt) => axios.post(`${baseUrl}/shirts.json`, newShirt);

const deleteShirts = (shirtId) => axios.delete(`${baseUrl}/shirts/${shirtId}.json`);

export default { getShirtsByUid, createShirts, deleteShirts };
