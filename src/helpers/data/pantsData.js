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

const getPantsById = (pantId) => axios.get(`${baseUrl}/pants/${pantId}.json`);

const deletePants = (pantId) => axios.delete(`${baseUrl}/pants/${pantId}.json`);

const updatePants = (pantId, editedPant) => axios.put(`${baseUrl}/pants/${pantId}.json`, editedPant);

export default {
  getPantsByUid, createPants, deletePants, updatePants, getPantsById,
};
