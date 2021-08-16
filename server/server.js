const express = require("express");
const app = express();
const PORT = 4000;
const HOST = "localhost";
const axios = require("axios");
require("dotenv").config();
const REACT_APP_TWITTER_BEARER_TOKEN =
  process.env.REACT_APP_TWITTER_BEARER_TOKEN || undefined;

if (!REACT_APP_TWITTER_BEARER_TOKEN) {
  console.log(
    "Uh oh, looks like you don't have a Twitter Bearer Token yet. You should get one buddy."
  );
}
const options = {
  method: "get",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
  },
};

app.get("/tweets", async (req, res) => {
  const { query } = req;
  const q =
    typeof query.q === "string" && query.q.trim().length
      ? query.q.trim()
      : null;
  const result_type = query.result_type;
  if (!q.length) {
    console.log("Uh oh, no keyword set yet.");
  } else {
    let urlQuery = `https://api.twitter.com/1.1/search/tweets.json?q=${q}&result_type=${result_type}&count=5&tweet_mode=extended`;
    await axios(urlQuery, options)
      .then((response) => {
        return res.json(response.data);
      })
      .catch((err) => console.log(err));
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}: ${PORT}.`);
});
