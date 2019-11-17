import axios from 'axios';
export const loadUser = () => {

    return (dispatch, getState) => {
        dispatch({ type: "USER_LOADING" });

        const token = getState().auth.token;
        // debugger
        let headers = {
            "Content-Type": "application/json",
        };

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        return fetch("http://localhost:8000/api/auth/user/", { headers, })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: 'USER_LOADED', user: res.data });

                    return res.data;
                } else if (res.status >= 400 && res.status < 500) {

                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                }
            })

    }
}
export const login = (username, password) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ username, password });

        return fetch("http://localhost:8000/api/auth/login/", { headers, body, method: "POST" })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: 'LOGIN_SUCCESSFUL', data: res.data });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                } else {
                    dispatch({ type: "LOGIN_FAILED", data: res.data });
                    throw res.data;
                }
            })
    }
}

export const register = (username, email, password) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ username, email, password });
        console.log(body)
        return fetch("http://localhost:8000/api/auth/register/", { headers, body, method: "POST" })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: 'REGISTRATION_SUCCESSFUL', data: res.data });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                } else {
                    dispatch({ type: "REGISTRATION_FAILED", data: res.data });
                    throw res.data;
                }
            })
    }
}
export const logout = () => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };

        return fetch("http://localhost:8000/api/auth/logout/", { headers, body: "", method: "POST" })
            .then(res => {
                if (res.status === 204) {
                    return { status: res.status, data: {} };
                } else if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 204) {
                    dispatch({ type: 'LOGOUT_SUCCESSFUL' });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                }
            })
    }
}

export const profile = (user, birth_date, phonenum, address, cmmd) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ user, birth_date, phonenum, address, cmmd });
        console.log("bode:", body)
        return fetch("http://localhost:8000/api/auth/profile/" + user.id, { headers, body, method: "PUT" })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: 'EDIT_PROFILE_SUCCESSFUL', data: res.data });
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                } else {
                    dispatch({ type: "EDIT_PROFILE_FAILED", data: res.data });
                    throw res.data;
                }
            })
    }
}