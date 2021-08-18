# PSEUDOCODE

## Features

- X search bar, keyword lookup (api)
  - X keyword, setKeyword = useState('')
  - X debounce(handleChange, 3000) (how many seconds?)
  - X handleChange(keyword)
  - X userEffect(()=> { handleChange(keyword) }, keyword)
- X list tweets
  - X tweets, setTweets = useState([])
  - X test: if empty, expect 'none'
  - X test: if tweets.length > 0, expect node.length === tweets.length
  - X tweet, passed as props
  - X test: has avatar, username, text, url, and hashtags(if any)
- X sort order by popular (api)
  - X apiUrl, setApiUrl = useState(proxyUrl + keyword + RESULT_TYPE + COUNT)
    X hashtag containers, filter tweets (set, unset)
  - X hashtags, setHashtags = useState([])
    - X test: if empty, expect text 'None'
    - X test: if hashtags.length > 0, expect node.length === tweets.length
  - X onClick, setHashTags(hashtag_id) => toggles hashtag list, if exists, remove, if doesn't exist, add, then filterTweets(hashtags)
  - X filterTweets(hashtags: string[]) => filters tweets
- X load more to get more tweets
  - X onClick, loadMoreTweets(proxyUrl + keyword + RESULT_TYPE + COUNT + MAX_ID), setHashtags
    - X test: load more button exists
- X proxy server
  - X includes script to run proxy server

## Components

- X App
  - X SearchBar
  - X TweetList
    - X TweetItem
      - X Pill
    - X Button
  - X HashtagContainer
    - X Pill

## Endpoints

- /tweets => https://api.twitter.com/1.1/search/tweets.json/
  - Params: {
    q: string,
    result_type: string = popular
    count: string = 5
    }
  - Returns: {
    statuses: Tweet[],
    search_metadata.next_results (for load more tweets)
    }
    -Notes: Needs "tweet_mode=extended" as part of query string to get full_text of tweet

## Data

- Tweet {
  id: string,
  avatar: string (profile_image_url_https),
  username: string (user.screen_name),
  text: string, (full_text)
  url: string, (use the id)
  hashtags: string[] (entities.hashtags)
  }

## Constants

- RESULT_TYPE = 'POPULAR'
- COUNT = 5
- MAX_ID = 'LAST TWEET ID (lowest)' -> (inclusive, so make it tweet_ids > MAX_ID)

## Caching -> I could use react-query since it includes caching, but lets just keep it simple

mobile

- grid-template-area: '
  searchbar
  hashtagcontainer
  tweetlist
  '
  desktop
- grid-template-area: '
  searchbar hashtagcontainer
  tweetlist hashtagcontainer
  '

## Current Bugs:

- Hashtag list sometimes keeps the old hashtags from previous keyword searches (or if you're super slow at typing)
