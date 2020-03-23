import React, { Component } from 'react'

export default class Book extends Component {
  constructor(props){
    super(props);
   this.state={
    count:1,
    name: "jonh"

  };
    
  }

    
   addCount =()=>{
     this.setState({count: this.state.count + 1 , });
    

   }
   lowerCount =()=>{
      this.setState({count: this.state.count - 1  });

   }
   resetCount =()=>{
     this.setState({count: this.state.count=0 });

   }
   

    render() {
     // console.log(this.props);

     const {img,title,author}=this.props.info;
        return (
          <article className="book">
          <img src={img} width="150" alt="book"/>
            <div>
            <h4> Title : {title}</h4>
            <h5> author : {author}</h5>
            <h3> count : {this.state.count}</h3>
            <h3> name : {this.state.name}</h3>
            <button type="button" onClick={this.addCount}> add count </button>
            <button type="button" onClick={this.lowerCount}> LowerCount </button>
            <button type="button" onClick={this.resetCount}>Reset count </button>
            </div>
                

                
            </article>
            
        )
    }
}
