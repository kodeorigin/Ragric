import { FARMER_DETAILS_FAIL, FARMER_DETAILS_REQUEST, FARMER_DETAILS_SUCCESS 
} from "../constants/farmerConstants";



  function farmerDetailsReducer(state = { farmer: []  }, action) {
    switch (action.type) {
      case FARMER_DETAILS_REQUEST:
        return { loading: true };
      case FARMER_DETAILS_SUCCESS:
        return { loading: false, farmer: action.payload };
      case FARMER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

export  {
  farmerDetailsReducer,
   
}
