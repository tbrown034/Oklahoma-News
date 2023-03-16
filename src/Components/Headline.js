import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Headline = () => {
    const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=773b4f5d3b9d45beb2af765631140be6')
      .then(response => {
        setHeadlines(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
    return (
        <div className="myHeadline">
            <h1>Oklahoma Headlines</h1>
      <table>
        <thead>
          <tr>
            <th>Headline</th>
            <th>Author</th>
            <th>Newspaper</th>
            <th>City</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {headlines.map((headline, index) => (
            <tr key={index}>
              <td>{headline.title}</td>
              <td>{headline.author}</td>
              <td>{headline.source.name}</td>
              <td>Oklahoma</td>
              <td>{headline.publishedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>


        </div>
    )

}
export default Headline
