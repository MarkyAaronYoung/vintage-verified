import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getDressesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dresses.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const createDress = (newDress) => axios.post(`${baseUrl}/dresses.json`, newDress);

export default { getDressesByUid, createDress };
