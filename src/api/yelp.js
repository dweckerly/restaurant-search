import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer tIjGkFh_o10ewN-FhHQHUSy4a7cVl7UG3hr37XrvE-QKoaIwM-GAD1ceEI7XW4mg2GWfeDjtOVM1JyTeJepOLsS_DZHlqWoep0zmKGBwBuf0xs6oyVMK9pMZAdEwYnYx"
    }
});