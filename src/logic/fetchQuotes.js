import { API_KEY, API_URL } from '../constants';

const headers = {
  method: 'GET',
  headers: { 'X-Api-key': API_KEY },
};

export default async function fetchQuotes(category = 'success') {
  return fetch(`${API_URL}/quotes?category=${category}`, headers);
}
