import Axios from 'axios';

const url = 'https://api.myjson.com/bins/vu2b7';

class studentService {
    getAllData() {
        return Axios({
            method: 'get',
            url
        });
    }
}

export default new studentService();