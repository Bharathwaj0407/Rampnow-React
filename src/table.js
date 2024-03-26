import React from "react";
import './App.css'


function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Country</th>
          <th>Language</th>
          <th>Link</th>
          <th>Pages</th>
          <th>Title</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.author}</td>
            <td>{item.country}</td>
            <td>{item.language}</td>
            <td>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </td>
            <td>{item.pages}</td>
            <td>{item.title}</td>
            <td>{item.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
