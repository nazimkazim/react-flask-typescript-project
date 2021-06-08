import { GET_TO_DOS } from './types';

export const getTodos = () => async dispatch => {
  try {
    const res = await fetch('/api');
    const data = await res.json();
    dispatch({
      type: GET_TO_DOS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};

export const postTodos = (content) => async dispatch => {
  try {
    await fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({
        content
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (id, onSuccess) => async dispatch => {
  await fetch(`/api/${id}`, {
    method: 'POST',
    body: JSON.stringify({
      id: id
    })
  });
  dispatch(
    getTodos()
  );
};