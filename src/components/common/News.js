import React from 'react';
import './news.css';
async function searchNews(q) {
  q = encodeURIComponent(q);
  const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`, {
    "method": "GET",
    "headers": {
        "x-bingapis-sdk": "true",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "065bff7eefmshec9b5e3f3688e52p12f8ecjsn3f76fef4fabd"
    }
  });
  const body = await response.json();
  return body.value;
}
function News(props) {
  const [query, setQuery] = React.useState("India");
  const [list, setList] = React.useState(null);
  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setList);
  };
  return (
    <div className="news_body">
      <form className="jumbotron" onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {!list
        ? null
        : list.length === 0
          ? <p class="jumbotron display-4"><i>No results</i></p>
          : <ul>
            {list.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </ul>
      }
    </div>
  );
}
function Item({ item }) {
  const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
  const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
  return (
    <li className="item">
      {item.image &&
        <img className="thumbnail"
          alt=""
          src={item.image?.thumbnail?.contentUrl}
        />
      }
      <h2 className="title">
        <a href={item.url}>{item.name}</a>
      </h2>
      <p className="description">
        {item.description}
      </p>
      <div className="meta">
        <span>{formatDate(item.datePublished)}</span>
        <span className="provider">
          {item.provider[0].image?.thumbnail &&
            <img className="provider-thumbnail"
              alt=""
              src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
            />
          }
          {item.provider[0].name}
        </span>
        {item.category &&
          <span>{separateWords(item.category)}</span>
        }
      </div>
    </li>
  );
}
export default News;