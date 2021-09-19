import fetcher from './fetcher';

const apiProduct = {
  getProductsSlider: (perPage = 3) => {
    return fetcher
      .get(`/product?paginate=${perPage}`)
      .then((resp) => {
        return resp.data.data;
      })
      .catch((err) => {
        return err.response;
      });
  },
  getProducts: () =>
    fetcher
      .get(`/product`)
      .then((resp) => {
        return resp.data.data;
      })
      .catch((err) => {
        return err.response;
      }),
  getProductById: (id) =>
    fetcher
      .get(`/product/${id}`)
      .then((resp) => resp.data.data)
      .catch((err) => err.response),
};

export default apiProduct;