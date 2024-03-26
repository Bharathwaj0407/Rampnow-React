
import axios from 'axios';

export async function fetchData(page, limit) {
  try {
    const response = await axios.get(`http://fe-test.dev.rampnow.io:8000/api/books?page=${page}&limit=${limit}`);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
}