import axios from "axios";

const instance = axios.create({
  //THE API (cloud function) URL

  baseURL: "https://us-central1-clone-d8903.cloudfunctions.net/api",
});

export default instance;

//http://localhost:5001/clone-d8903/us-central1/api
