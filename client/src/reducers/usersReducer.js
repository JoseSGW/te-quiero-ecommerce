import { types } from "../types/types";

const initialState = {
    users: [],
    user: {},
    isLogged: false,
    isAdmin: false,
    isTwoAuthOn: false,
    countries: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadUsers:
            return {
                ...state,
                users: action.payload,
            };
        case types.setUser:
            return {
                ...state,
                user: action.payload,
            };
        case types.ReloadUser:
            return {
                ...state,
                user: action.payload,
            };

        case types.isLoggedTrue:
            return {
                ...state,
                isLogged: true,
            };
        case types.isLoggedFalse:
            return {
                ...state,
                isLogged: false,
            };
        case types.isAdminTrue:
            return {
                ...state,
                isAdmin: true,
            };
        case types.isAdminFalse:
            return {
                ...state,
                isAdmin: false,
            };
        case types.getAllCountries:
            return {
                ...state,
                countries: action.payload,
            };
        case types.setOption:
            return {
                ...state,
                isTwoAuthOn: action.payload,
            };
        default:
            return state;
    }
};
