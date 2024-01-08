// Context API is a built-in feature in React that provides a way to share data (state) across the component tree
//  without having to pass props down through each level of the tree manually. It's  a  state management tool used for
// managing global or shared state in your React applications. 

import { createContext, useEffect, useReducer } from "react";

const initalState = {
    user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null
}

export const authContext = createContext(initalState);


const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                token: null,
                role: null
            };

        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role
            };

        case 'LOGOUT':
            return {
                user: null,
                token: null,
                role: null
            };

        default:
            return state;

    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initalState);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token', state.token)
        localStorage.setItem('role', state.role)
    }, [state]);

    return <authContext.Provider value={{ user: state.user, token: state.token, role: state.role, dispatch }}>
        {children}
    </authContext.Provider>
}