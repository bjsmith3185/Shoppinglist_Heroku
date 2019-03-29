import initialState from "../store/state";

const setData = (state = initialState, action) => {
  const newState = { ...state };

  // reducer for all data
  if (action.type === "SET_ALL_DATA") {
    // console.log("reducer, getting list");
    // console.log(action.val);
    
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
    // console.log("reducer, UPDATE list");
    // console.log(action.val);
     return {
      ...state,
      storeList: action.val.storeList,
      countRemaining: action.val.countRemaining
    };
  }

  // reducer for setting storelist, count, store
  if (action.type === "SET_STORELIST_COUNT_STORE") {
    // console.log("reducer, all data");
    // console.log(action.val);


    return {
      ...state,
      // list: listArray,
      countRemaining: action.val.countRemaining,
      // name: action.val.name,
      myStore: action.val.myStore,
      storeList: action.val.storeList,
      storeNames: action.val.storeNames,
    };
  }

   // reducer for setting user info or errors
   if (action.type === "SET_USER") {
    // console.log("reducer, set user");
    // console.log(action.val);
    let myStore = action.val.myStore;
    if(action.val.myStore === undefined) {
      // console.log("no my store")
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
    // console.log("reducer, set userID");
    // console.log(action.val);
       
    return {
      ...state,
      userId: action.val,
    };
  }

  // reducer for signing out user
  if (action.type === "SIGN_OUT_ASYNC") {
    console.log("reducer, set signout");
 
          
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
    // console.log("reducer, set history");
    // console.log(action.val)
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
