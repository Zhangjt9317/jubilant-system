const axios = require("axios");
const API="efd65bf5-a7fd-4cac-b4b6-34126cea1cfb"
axios
  .get("https://api.glassnode.com/v1/metrics/addresses/active_count?a=btc&&api_key="+API)
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    console.log(err);
  });
