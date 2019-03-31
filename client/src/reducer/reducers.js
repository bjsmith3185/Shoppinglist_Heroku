import initialState from "../store/state";

const setData = (state = initialState, action) => {
  const newState = { ...state };

  // open/close dropdown menu
  if (action.type === "SET_DROPDOWN_MENU") {
    console.log(action.val);
    return {
      ...state,
      showDropdownMenu: action.val.showDropdownMenu,
      showAddItemMenu: action.val.showAddItemMenu,
      showEditMenu: action.val.showEditMenu,
    };
  }

  // open/close add item area
  if (action.type === "SHOW_ADD_ITEM_AREA") {
    return {
      ...state,
      showDropdownMenu: action.val.showDropdownMenu,
      showAddItemMenu: action.val.showAddItemMenu,
      showEditMenu: action.val.showEditMenu,
    };
  }

  // open/close edit item area
  if (action.type === "SHOW_EDIT_AREA") {
    return {
      ...state,
      // showEditMenu: action.val.showEditMenu,
      editing: action.val.editing,
    };
  }

  // initiate edit mode
  if (action.type === "EDIT_ASYNC") {
    return {
      ...state,
      editing: action.val.editing,
      showDropdownMenu: action.val.showDropdownMenu,
      showEditMenu: action.val.showEditMenu,
      showDropdownMenu: action.val.showDropdownMenu,
      showAddItemMenu: action.val.showAddItemMenu,
    };
  }

   // set info for item to update
   if (action.type === "SET_UPDATE_ITEM_ASYNC") {
    return {
      ...state,
      selectedItem: action.val.selectedItem,
      selectedQty: action.val.selectedQty,
      selectedStore: action.val.selectedStore,
      selected_id: action.val.selected_id,
      showEditMenu: action.val.showEditMenu,
      showDropdownMenu: action.val.showDropdownMenu,
      showAddItemMenu: action.val.showAddItemMenu,
    };
  }

























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
      editing: false
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
      showAddItemMenu: action.val.showAddItemMenu,
      showStoresList: action.val.showStoresList,

    };
  }

  // reducer for setting user info or errors
  if (action.type === "SET_USER") {
    // console.log("reducer, set user");
    // console.log(action.val);
    let myStore = action.val.myStore;
    if (action.val.myStore === undefined) {
      // console.log("no my store")
      myStore = "";
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
      userId: action.val
    };
  }

  // reducer for signing out user
  if (action.type === "SIGN_OUT_ASYNC") {
    // console.log("reducer, set signout");

    return {
      ...state,
      name: "",
      myStore: "",
      userId: "",
      password: "",
      countRemaining: "",
      allList: [],
      storeList: [],
      storeNames: [],
      history: {},
      signedIn: false,
      editing: false
    };
  }

  //reducer for setting history to state
  if (action.type === "SET_HISTORY_ASYNC") {
    // console.log("reducer, set history");
    // console.log(action.val)
    return {
      ...state,
      name: "",
      myStore: "",
      userId: "",
      password: "",
      countRemaining: "",
      allList: "",
      storeList: "",
      storeNames: "",
      history: action.val,
      editing: false
    };
  }

  return newState;
};

export default setData;
