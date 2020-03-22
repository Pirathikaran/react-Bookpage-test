import React, { Component } from 'react'

export default class Book extends Component {
    render() {
     // console.log(this.props);
     const {img,title,author}=this.props.info;
        return (
          <article className="book">
          <img src={img} width="150" alt="book"/>
            <div>
            <h4> Title : {title}</h4>
                <h5> author : {author}</h5>
            </div>
                

                
            </article>
            
        )
    }
}
