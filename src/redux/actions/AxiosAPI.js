import axios from 'axios';
import {BACKEND_LINK} from '../../../config';

export default axios.create({
    baseURL: BACKEND_LINK
})