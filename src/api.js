const BASE_URL = 'https://thinkful-list-api.herokuapp.com/russell';
const listApiFetch = function(...args){
  let error;
  return fetch(...args)
    .then(res =>{
      if(!res.ok){
        error = {code: res.status};
        if(!res.headers.get('content-type').includes('json')){
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    })
    .then(data => {
      if (error){
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};

const getItems = function(){
  return listApiFetch(`${BASE_URL}/items`);
};

function createItem(name) {
  const newItem = JSON.stringify({ name });

  return listApiFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
}

function updateItem(id, updateData) {
  const newData = JSON.stringify(updateData);
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newData
  });
}

function deleteItem(id, updateData) {
  const remainedData = JSON.stringify(updateData);
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: remainedData
  });
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};