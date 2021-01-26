import axios from 'axios';

export default axios.create({
	baseURL: `https://c-tech.herokuapp.com`,
	timeout: 1000000,
});
