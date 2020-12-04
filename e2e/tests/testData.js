const baseUrl = 'http://localhost:3000';
const routes = {
    public:{
        home:`${baseUrl}/`,
        login: `${baseUrl}/login`,
        signup: `${baseUrl}/signup`,
        invalid: `${baseUrl}/invalid`
    }
};

export default routes;