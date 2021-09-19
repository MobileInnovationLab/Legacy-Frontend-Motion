
import fetcher from './fetcher';

const apiBlog = {
  getBlogs: () =>
    fetcher
      .get('/blog')
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
  getBlogById: (id) =>
    fetcher
      .get(`/blog/${id}`)
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
};

export default apiBlog;