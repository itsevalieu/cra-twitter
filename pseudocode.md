# PSEUDOCODE

Start-time:
8/12/21 9:30 PM - 1:30 PM
8/13/21 2:30 PM -

## Features

X search bar, keyword lookup (api)

- keyword, setKeyword = useState('')
- debounce(handleKeypress, 3000) (how many seconds?)
- handleKeypress(keyword)
- userEffect(()=> { handleKeypress(keyword) }, keyword)
  X list tweets
  X tweets, setTweets = useState([])
  X test: if empty, expect 'none'
  X test: if tweets.length > 0, expect node.length === tweets.length
  X tweet, passed as props
  X test: has avatar, username, text, url, and hashtags(if any)
- sort order by popular (api)
  - apiUrl, setApiUrl = useState(baseUrl + RESULT_TYPE + COUNT)
    X hashtag containers, filter tweets (set, unset)
  - hashtags, setHashtags = useState([])
    X test: if empty, expect text 'None'
    X test: if hashtags.length > 0, expect node.length === tweets.length
  - onClick, setHashTags(hashtag_id) => toggles hashtag list, if exists, remove, if doesn't exist, add, then filterTweets(hashtags)
    - test: hashtag that is set has classname to show
  - filterTweets(hashtags: string[]) => filters tweets
    - test: tweet with hashtag exists
- load more to get more tweets
  - onClick, loadMoreTweets(apiUrl + COUNT + MAX_ID), setHashtags
    - test: load more button exists
    - test:
- tests

## Components

- App
  - SearchBar
  - TweetList
    - TweetItem
  - HashtagContainer
  - Button
  - Pill

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
  url: string, (entities.urls.display_url OR entities.urls.expanded_url)
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
