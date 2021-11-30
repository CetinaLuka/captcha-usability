import Axios from "axios";

export const uporabnikiAPI = Axios.create({
    baseURL: process.env.REACT_APP_UPORABNIKI,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export const poskusiAPI = Axios.create({
    baseURL: process.env.REACT_APP_POSKUSI,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});