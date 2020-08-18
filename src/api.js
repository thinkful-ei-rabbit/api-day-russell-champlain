const BASE_URL = 'https://thinkful-list-api.herokuapp.com/russell';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
  const newItem = JSON.stringify({ name });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
}

function updateItem(id, updateData) {
  const newData = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newData
  });
}

function deleteItem(id, updateData) {
    const remainedData = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`, {
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