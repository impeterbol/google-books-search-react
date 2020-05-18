import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//adding axios to fetch api
import axios from 'axios';



const  App = ()=>{


//adding local state for search input with useState hooks

const [searchTerm, setSearchTerm] = useState ('');
const [books, setBooks] =useState ({items: [] });

const onInputChange = (e)=>{
  console.log('this is line 13' + e.target.value);
  setSearchTerm(e.target.value);

}




let API_URL = 'https://www.googleapis.com/books/v1/volumes';

const fetchBooks = async () =>{
  //ajax call to api with axios
  const result = await axios.get (`${API_URL}?q=${searchTerm}`);
  console.log(`${API_URL}?q=${searchTerm}`);
//Books result
console.log(result.data);

setBooks(result.data);
}

//Submit handler

const onSubmitHandler = (e)=>{
  console.log("happening!")
//preventing browser from refreshing the page
e.preventDefault();
console.log('here');
//call fetch books async function
fetchBooks();
}




  return (
    //ading form for searching the google books API.
    //onSubmit should be in the form not in the input field
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span> Search for books from Google Books</span>
          <input
          type ="search"
          placeholder = "type something!"
          value = {searchTerm}
          
          
          onChange ={onInputChange}
         
          />
          <button type ="submit"> Search! </button>
        </label>
      </form>
    </section>
  );
}

export default App;
