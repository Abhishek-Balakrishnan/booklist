import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookList.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, FormControl } from 'react-bootstrap';

const Booklist = () => {

  const [search,setSearch]=useState("")
  console.log(search);

  const[Book,setBook]=useState([])
  useEffect(()=>{
    axios.get('https://api.itbook.store/1.0/new').then(res=>{
      console.log(res);
      setBook(res.data.books)
    })
  },[])

  return (
    <>
    <div className='bookk'>
    <Form>
      <InputGroup  className='book-3' style={{width:"100px",marginLeft:"480px",marginBottom:"30px",height:"0px"}}>
        <FormControl  onChange={(e) => setSearch(e.target.value)} placeholder='Search book by title..'></FormControl>
      </InputGroup>
    </Form>

    </div>
    <div className='Booklist'>
      {Book.filter((book)=>{
        return search.toLocaleLowerCase()===''?book : book.title.toLowerCase().includes(search)
      }).map((book)=>(
        <div key={book.id}>
          <div><img src={book.image}></img></div>
          <div><h2>{book.title}</h2></div>
          <div><h4>{book.subtitle}</h4></div>
          <div><p>{book.price}</p></div>
          <div className='button'> <Button variant="primary">Add to Favorites</Button>{' '}</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Booklist