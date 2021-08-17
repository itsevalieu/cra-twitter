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
const baseUrl = `https://api.twitter.com/1.1/search/tweets.json`;
app.get("/tweets", async (req, res) => {
  const { query } = req;
  console.log("Query", query);
  if (!query) {
    console.log("Uh oh, no query set yet.");
  } else {
    let urlQuery = `${baseUrl}?tweet_mode=extended&`;
    for (let key in query) {
      console.log(key, query[key]);
      if (query[key] === query[query.length - 1]) {
        urlQuery += `${key}=${query[key].trim()}`;
      } else {
        urlQuery += `${key}=${query[key].trim()}&`;
      }
    }
    console.log("The urlQuery", urlQuery);

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
