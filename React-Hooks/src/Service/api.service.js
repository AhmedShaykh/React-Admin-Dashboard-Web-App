import { apiRequest } from "../Config/Config";
import axios from 'axios';

export class GitApi {
    getUserRepos = async (username) => {
        try {
            const response = await axios.get(
                apiRequest + `users/${username}/repos`
            )
            console.log("response: ", response.data)
            return response.data;
        } catch (error) {
            console.log("Error: ", error)
            return error;
        }
    }
}