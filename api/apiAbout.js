import fetcher from "./fetcher";

const apiAbout = {
    getAbout : () => 
    fetcher
        .get('/generation')
        .then((resp) => resp.data.data)
        .catch((err) => err.response),
    getAboutById: (id) =>
    fetcher
        .get(`/generation/${id}`)
        .then((resp) => resp.data.data)
        .catch((err) => err.response),
}