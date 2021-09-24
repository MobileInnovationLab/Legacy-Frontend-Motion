import fetcher from "./fetcher";

const apiAchievements = {
  getAchievements: () =>
    fetcher
      .get("/achievement")
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
  getAchievementById: (id) =>
    fetcher
      .get(`/achievement/${id}`)
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
  getIndexAchievement: (perPage = 9) => {
    return fetcher
      .get(`/achievement?paginate=${perPage}`)
      .then((resp) => {
        return resp.data.data;
      })
      .catch((err) => {
        return err.response;
      });
  },
};

export default apiAchievements;
