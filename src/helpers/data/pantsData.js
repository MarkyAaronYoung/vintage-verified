import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPantsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pants.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const createPants = (newPants) => axios.post(`${baseUrl}/pants.json`, newPants);

const deletePants = (pantId) => axios.delete(`${baseUrl}/pants/${pantId}.json`);

export default { getPantsByUid, createPants, deletePants };
