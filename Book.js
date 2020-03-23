import React, { Component } from 'react'
import Button from './Button';

export default class Book extends Component {
  constructor(props){
    super(props);
   this.state={
    count:1,
    name: "jonh"

  };
    
  }

    
  //  addCount =()=>{
  //    this.setState({count: this.state.count + 1 , });
    

  //  }
  //  lowerCount =()=>{
  //     this.setState({count: this.state.count - 1  });

  //  }
  //  resetCount =()=>{
  //    this.setState({count: this.state.count=0 });

  //  }
   

    render() {
     // console.log(this.props);

     const {img,title,author}=this.props.info;

    const {handleDelete}=this.props;
        return (
          <article className="book">
          <img src={img} width="150" alt="book"/>
            <div>
            <h4> Title : {title}</h4>
            <h5> author : {author}</h5>
            <Button handleDelete={handleDelete} />
            
            
            </div>
                

                
            </article>
            
        )
    }
}
