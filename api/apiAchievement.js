import fetcher from './fetcher';

const apiAchievements = {
  getAchievements: () =>
    fetcher
      .get('/achievement')
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
  getAchievementById: (id) =>
    fetcher
      .get(`/achievement/${id}`)
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
};

export default apiAchievements;