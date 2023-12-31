import axios from "axios";

export const login = async (data) => {
    try {
        return await axios.post("https://inv.liara.run/api/signin/", data);
    } catch (error) {
        throw new Error(error);
    }
};

export default login;