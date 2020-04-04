


export const addTic = (tic) => {

  return{
    type: 'ADD_REQ',
    value: tic
  }
}



export const fetchReqs = () => {
  return dispatch => {
    fetch('/api/home')
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "FETCH_REQS",
          value: response
        }
        dispatch(action);
        console.log("fetch reqs response", dispatch)
      })
      .catch(error => console.log(error))
  }
}

export const removeTic = (req) => {
  return dispatch => {
    fetch(`/api/home/${req.id}`, {
        method:"delete",
    })
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "REMOVE_TIC",
          value: req.id
        }
        dispatch(action);
        console.log("fetch reqs response", dispatch)
        
      })
      .catch(error => console.log(error))
  }
}

export const isLike = (req, isLiked1, isLiked2, isLiked3) => {
  return dispatch => {
    fetch(`/api/home/${req.id}`, {
        method:"put",
        body: JSON.stringify(
          {
          isLiked1: true, 
          isLiked2: false, 
          isLiked: false})
      })
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "IS_LIKE",
          value: true
        }
        dispatch(action);
        console.log("fetch reqs response", dispatch)
        
      })
      .catch(error => console.log(error))
  }
}


export const fetchReqs1 = () => {
  return dispatch => {
    fetch('/api/home')
      .then(res => res.json())
      .then(response => {
        const action = {
          type: "FETCH_REQS1",
          value: response
        }
        dispatch(action);
        console.log("fetch reqs1 response", dispatch)
      })
      .catch(error => console.log(error))
  }
}

export const addTic1 = (tic1) => {

  return{
    type: 'ADD_REQ1',
    value: tic1
  }
}

export const removeTic1 = (index) => {
  return {
    type: 'REMOVE_TIC1',
    value: index
  }
}

export const login = () => {
  return {
      type: 'LOG_IN',
      value: true
  }
}

export const logout = () => {
  return {
      type: 'LOG_OUT',
      value: false
  }
}