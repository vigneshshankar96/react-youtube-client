import axios from "axios";

const KEY = "AIzaSyCkAcn28_zQ_Wh5apC4Yfefvi0EsSOtJNA";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
