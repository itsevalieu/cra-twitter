# PSEUDOCODE

Start-time:
8/12/21 9:30 PM - 1:30 PM
8/13/21 2:30 PM -

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
    - O test: hashtag that is set has classname to show
  - O filterTweets(hashtags: string[]) => filters tweets
    - O test: tweet with hashtag exists
- Xload more to get more tweets
  - X onClick, loadMoreTweets(proxyUrl + keyword + RESULT_TYPE + COUNT + MAX_ID), setHashtags
    - O test: load more button exists
    - O test: list of tweets showing now has new tweets
- X proxy server
  - X includes script to run proxy server

## Components

- X App
  - X SearchBar
  - X TweetList
    - X TweetItem
    - Button
  - X HashtagContainer
    - X Pill

## Endpoints

- / => home
- /search => https://api.twitter.com/1.1/search/tweets.json/
  - Params: { keyword: string }
  - Returns: { tweets: Tweet[] }

## Data

- Tweet {
  id: string,
  avatar: string (profile_image_url_https),
  username: string (user.screen_name),
  text: string,
  url: string, (entities.urls.url OR entities.urls.expanded_url)
  hashtags: string[] (entities.hashtags)
  }

## Constants

- RESULT_TYPE = 'POPULAR'
- COUNT = 5
- MAX_ID = 'LAST TWEET ID (lowest)' -> (inclusive, so make it tweet_ids > MAX_ID)

## Caching -> I could use react-query since it includes caching, but lets just keep it simple

## Styles

$background = #f8f9f9
$link = #4282b9
$white = #fff
$hashtag = #e7f3fa

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
