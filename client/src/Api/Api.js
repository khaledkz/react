import axios from "axios";
const apiUrl =
  "https://api.giphy.com/v1/gifs/trending?api_key=PEyIrGaWdf08Lw4nezyXejpD9Y0pO6Rt";


  export default  API=>{
    return axios({
      url:apiUrl,
      headers:{accept: 'image'},
      method:'get'
    });
  }

