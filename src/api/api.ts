import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
});

export const giphyAPI = {
    getRandomImg(tag: string): Promise<AxiosResponse<any>> {
        return instance.get(`/random`, {
            params: {
                tag: tag,
                api_key: "eRLxLG7aD0evVVEdqxCHgsSSVbeDm7LI"
            }
        })
    }
};