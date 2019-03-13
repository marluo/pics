import axios from "axios";
//config för axios

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 44e54135d061077fa07b11b0a3e241f50b81cfbcaf1fe2a1bede9e06d2300ddf"
  }
});
