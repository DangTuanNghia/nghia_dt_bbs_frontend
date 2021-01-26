import axios from "axios";

const POST_API_BASE_URL = "http://localhost:9000";

class PostService {
    static getAllPost() {
        return axios.get(POST_API_BASE_URL + '/posts');
    }

    static getPostById(id){
        return axios.get(POST_API_BASE_URL + '/posts/'+ id);
    }

}
export default PostService