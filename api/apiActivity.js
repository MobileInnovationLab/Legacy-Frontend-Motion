import fetcher from './fetcher';

const apiActivity = {
  getActivity: () =>
    fetcher
      .get('/activity')
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
  getActivityById: (id) =>
    fetcher
      .get(`/activity/${id}`)
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
};

export default apiActivity;