import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getJeansByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/jeans.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const createJeans = (newJeans) => axios.post(`${baseUrl}/jeans.json`, newJeans);

const deleteJeans = (jeanId) => axios.delete(`${baseUrl}/jeans/${jeanId}.json`);

export default { getJeansByUid, createJeans, deleteJeans };
