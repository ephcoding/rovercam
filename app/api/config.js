import axios from "axios";

export default axios.create({
	baseURL: "https://mars-photos.herokuapp.com/api/v1",
});
