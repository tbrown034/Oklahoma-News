import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '773b4f5d3b9d45beb2af765631140be6';

const Headline = () => {
  const [headlines, setHeadlines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('titleAsc');
  
  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'Oklahoma',
        from: '2023-03-10',
        sortBy: 'publishedAt',
        apiKey: apiKey,
      }
    })
    .then(response => {
      setHeadlines(response.data.articles);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const filteredHeadlines = headlines.filter(headline => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return searchRegex.test(headline.title) || searchRegex.test(headline.description) || searchRegex.test(headline.source.name);
  }).sort((a, b) => {
    if (sortType === 'titleAsc') {
      return a.title.localeCompare(b.title);
    } else if (sortType === 'titleDesc') {
      return b.title.localeCompare(a.title);
    } else if (sortType === 'dateAsc') {
      return new Date(a.publishedAt) - new Date(b.publishedAt);
    } else {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    }
  });

  return (
    <div className="myHeadline">
      <div className="headlineTop">
        <h2>Latest Oklahoma Headlines</h2>
        <div>
          <label>
          <h5>Search:</h5>
            <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
          </label>
          <label>
            <h5>Sort by:</h5>
            
            <select value={sortType} onChange={event => setSortType(event.target.value)}>
              <option value="titleAsc">Title (A-Z)</option>
              <option value="titleDesc">Title (Z-A)</option>
              <option value="dateAsc">Date (oldest first)</option>
              <option value="dateDesc">Date (latest first)</option>
            </select>
          </label>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Headline</th>
            <th>Newspaper</th>
            <th>Summary</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredHeadlines.map((headline, index) => (
            <tr key={index}>
              <td><a href={headline.url}>{headline.title}</a></td>
              <td>{headline.source.name}</td>
              <td>{headline.description}</td>
              <td>{headline.publishedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Headline;