import axios from 'axios'
import Cookies from 'js-cookie';
import { REQUEST_USER_PROFILE, REQUEST_USER_PROFILE_FAILED, UPDATE_USER_PROFILE, UPDATE_USER_PROFILE_FAILED, CHANGE_USER_PASSWORD, CHANGE_USER_PASSWORD_FAILED, LOADING } from "../userTypes";

export const fetchUserProfile = () => {
    axios.get("https://barefoot-nomad-app-v1.herokuapp.com/api/v1/profile/admin", {})
}

export const fetchUserProfile = () => {

}