import PropTypes from 'prop-types'
import { useState } from 'react';

const App = () => {
  const defaultSearchTerm = "React";
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const getFilteredList = () => {
    return stories.filter((story) => (story.title.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  return(
    <div>
      <h1>My Hacker Stories</h1>

      <Search value={searchTerm} setSearchTerm={setSearchTerm}/>

      <hr />

      <List list={getFilteredList}/>
    </div>
  );
};

const Search = (props) => {

  const handleChange = (event) => {
    props.setSearchTerm(event.target.value)
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input value={props.value} id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = (props) => {
  return(
    <ul>
      {(props.list()).map((item) => (
        <Item key={item.objectID} {...item}></Item>
      ))}
    </ul>
  )
};

const Item = ({title, url, author, num_comments, points}) => {
  return(
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </li>
  )
}

List.propTypes = {
  list: PropTypes.func
}

Search.propTypes = {
  setSearchTerm: PropTypes.func,
  value: PropTypes.string
}

Item.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  num_comments: PropTypes.number,
  points: PropTypes.number
}

export default App;