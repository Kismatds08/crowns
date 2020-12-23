//Action Creator
export const setCurrentUser = user => (
    //Action
    {
        type: 'SET_CURRENT_USER', //Mandatory
        payload: user // paylod is optional
    }
)