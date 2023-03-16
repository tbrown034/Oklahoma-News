import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '773b4f5d3b9d45beb2af765631140be6';

const Headline = () => {
  const [headlines, setHeadlines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
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
  });

  return (
    <div className="myHeadline">
        <div className="headlineTop">
      <h2>Latest Oklahoma Headlines</h2>
      <label>
        Search:
        <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
      </label>
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