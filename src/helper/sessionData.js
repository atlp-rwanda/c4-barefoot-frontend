const authHeader = () => {
    let token = localStorage.getItem("barefootUserToken");
    if (token) return { 'Authorization': 'Bearer ' + token };
    return {}
}

const getUserProfile = () => {
    const userProfile = localStorage.getItem("userProfile");
    if (!userProfile) return {}
    return JSON.parse(userProfile)
}
export { authHeader, getUserProfile };