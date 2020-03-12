/**
   * Use of Parameters:
  http://example.com/page?parameter=value&also=another
  **/
// QUESTION: Put the helper function in a helper folder? //
/////////////////// PRODUCTS ////////////////////////////////
getAllProducts = () => {
  fetch(`http://3.134.102.30/products/list`) // CHANGE: default is 5. example: /?count=50 to get 50...
    .then(response => response.json())
    .then(data => console.log(data)) // CHANGE: to do what you want with it
    .catch(err => console.error(err));
  // returns array of objects with id, name, description, ...
};

getOneProduct = id => {
  fetch(`http://3.134.102.30/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data)) // CHANGE: to do what you want with it
    .catch(err => console.error(err));
  // returns object with id, name, description, ...
};

getOneProductStyle = id => {
  fetch(`http://3.134.102.30/products/${id}/styles`)
    .then(response => response.json())
    .then(data => console.log(data.results)) // CHANGE: to do what you want with it
    .catch(err => console.error(err));
  // returns object with style_id, name, prices, photos,...
};

getRelatedProducts = id => {
  fetch(`http://3.134.102.30/products/${id}/related`)
    .then(response => response.json())
    .then(data => console.log(data)) // CHANGE: to do what you want with it
    .catch(err => console.error(err));
  // This returns an array of related product id's
};

//////////////Questions And Answers///////////////////

module.exports = {
  getAllProducts,
  getOneProduct,
  getOneProductStyle,
  getRelatedProducts
};
