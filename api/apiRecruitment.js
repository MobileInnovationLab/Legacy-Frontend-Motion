import fetcher from './fetcher';

const apiRecruitment = {
  postRecruitment: (data) =>
    fetcher
      .post('/recruitation', data)
      .then((resp) => resp.status)
      .catch((err) => err.response),
  postCheckRecruitment: (nim) =>
    fetcher
      .post(`/recruitation/${nim}`)
      .then((resp) => resp.status)
      .catch((err) => err.response),
};

export default apiRecruitment;
