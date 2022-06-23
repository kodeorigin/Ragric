
import axios from "axios";
import { FARMER_DETAILS_FAIL, FARMER_DETAILS_REQUEST, FARMER_DETAILS_SUCCESS } from "../constants/farmerConstants";

  const farmerDetails = (fEmail) => async (dispatch) => {
    try {
      dispatch({ type: FARMER_DETAILS_REQUEST});
      const { data } = await  axios.get(`https://www.woclink.com/restapi/workers/jobDetails.php?jid=${fEmail}`);
      dispatch({ type: FARMER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FARMER_DETAILS_FAIL, payload: error.message });
    }
  };


export {
    farmerDetails,
}
