export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchDataStart = () => ({
  type: FETCH_DATA_START,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});


export const fetchFormData = (data, url) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8000/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const dataSet = await response.json();
    console.log(' -- ' + dataSet);
    
    dispatch(fetchDataSuccess(dataSet));
  };
};

