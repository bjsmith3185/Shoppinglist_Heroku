import initialState from "../store/state";

const setData = (state = initialState, action) => {
  const newState = { ...state };

  // reducer for all data
  if (action.type === "SET_ALL_DATA") {
    
    return {
      ...state,
      myStore: action.val.myStore,
      countRemaining: action.val.countRemaining,
      allList: action.val.allList,
      storeList: action.val.storeList,
      storeNames: action.val.storeNames,
      name: action.val.name,
      userId: action.val.userId,
      history: action.val.history,
      signedIn: action.val.signedIn,
    };
  }

  // reducer for setting storelist, count
  if (action.type === "SET_STORELIST_COUNT") {

    return {
      ...state,
      storeList: action.val.storeList,
      countRemaining: action.val.countRemaining
    };
  }

  // reducer for setting storelist, count, store
  if (action.type === "SET_STORELIST_COUNT_STORE") {

    return {
      ...state,
      countRemaining: action.val.countRemaining,
      myStore: action.val.myStore,
      storeList: action.val.storeList,
      storeNames: action.val.storeNames,
    };
  }

   // reducer for setting user info or errors
   if (action.type === "SET_USER") {

    let myStore = action.val.myStore;
    if(action.val.myStore === undefined) {
      myStore = '';
    }
    
    return {
      ...state,
      name: action.val.name,
      myStore: myStore,
      userId: action.val._id,
      password: action.val.password
    };
  }

  // reducer for setting user id on signin
  if (action.type === "SET_USERID") {
       
    return {
      ...state,
      userId: action.val,
    };
  }

  // reducer for signing out user
  if (action.type === "SIGN_OUT_ASYNC") {
          
    return {
      ...state,
      name: '',
      myStore: '',
      userId: '',
      password: '',
      countRemaining: '',
      allList: [],
      storeList: [],
      storeNames: [],
      history: {},
      signedIn: false,
    };
  }

    //reducer for setting history to state
  if (action.type === "SET_HISTORY_ASYNC") {

    return {
      ...state,
      name: '',
      myStore: '',
      userId: '',
      password: '',
      countRemaining: '',
      allList: '',
      storeList: '',
      storeNames: '',
      history: action.val
    };
  }

  return newState;
};

export default setData;
