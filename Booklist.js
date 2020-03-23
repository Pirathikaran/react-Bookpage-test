import React, { Component } from 'react';
import Book from './Book';
import booksData from './bookData';

export default class Booklist extends Component {
  constructor(props){
    super(props)
    this.state={
      books :booksData
      
      };
  }
  
  handleDelete=()=>{
    console.log(`I'm form parent compomnent`)
  }
 
    render() {
      // const books = this.state.books.map((item)=> item.book);
      // console.log(books);
      
        return (
            <section>
                <h3> This is BookList</h3>
                {this.state.books.map(item => (
                  <Book key={item.id} info={item} handleDelete={this.handleDelete} />
                  ))}
                
            </section>
        );
    }
}