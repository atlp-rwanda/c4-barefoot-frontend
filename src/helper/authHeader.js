const authHeader = () => {
    let token = localStorage.getItem("barefootUserToken");
    if (token) return { 'Authorization': 'Bearer ' + token };
    return {}
}

export default authHeader;