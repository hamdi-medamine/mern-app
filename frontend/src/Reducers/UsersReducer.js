import {GET_USERS} from "../Actions/Types"

const UsersReducer = (state = { Users:[]}, { type, payload }) => {
          switch (type) {
                    case GET_USERS:
                              return {...state, Users: payload}
          
                    default:
                              return state;          }

};
export default UsersReducer;
