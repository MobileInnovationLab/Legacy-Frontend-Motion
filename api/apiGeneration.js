import fetcher from './fetcher';

const apiGeneration = {
  getGeneration: () =>
    fetcher
      .get('/generation')
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
  getGenerationById: (id) =>
    fetcher
      .get(`/generation/${id}`)
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
  getAllMember: () =>
    fetcher
      .get('/member')
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
  getMemberById: (id) =>
    fetcher
      .get(`/member/${id}`)
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
};

export default apiGeneration;