import { instanceCats } from "../index"

export const generateCatImage = async () => {
    const response = await instanceCats
        .get()
        .then((response) => {
            return response.data[0];
        });
    return response;
}