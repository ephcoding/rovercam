import axios from "axios";
// import { NASA_KEY } from "@env";

export default axios.create({
	baseURL: "https://mars-photos.herokuapp.com/api/v1",
});
