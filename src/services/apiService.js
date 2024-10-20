import axios from "axios";

async function getUserActivity(userName) {

    if (!userName) {
        throw new Error('Username cannot be null or empty.');
    }
    
    const url = `https://api.github.com/users/${userName}/events`;

    try {
        const response = await axios.get(url);
        console.log(response?.data);
        return response.data;
    } catch (error){
        throw new Error(`Error fetching data: ${error.message}`);
    }
}

export default getUserActivity;