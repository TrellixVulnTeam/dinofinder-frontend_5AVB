//action creator creates an action object which goes to the reducer, which then returns new state
//thunk will allow us to wrap the fatch in a function

export function fetchEras() {
return (dispatch) => {
  fetch('http://localhost:3000/api/v1/eras')
  .then(resp => resp.json())
  .then(eras => dispatch({
      type: 'FETCH_ERAS',
      payload: eras
    }))
  }
}
