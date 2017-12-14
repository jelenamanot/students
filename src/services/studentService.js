import Axios from 'axios';

const url = 'https://gist.githubusercontent.com/jelenanesic/b98af7f3fa326b46cbe1dd41601e5b32/raw/7ca6038e235cdd74b5f4a5d1d18277a28527b927/students.json';

class studentService {
    getAllData() {
        return Axios({
            method: 'get',
            url
        });
    }
}

export default new studentService();