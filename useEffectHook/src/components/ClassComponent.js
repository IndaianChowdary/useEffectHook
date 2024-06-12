import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         score:0,
         age:0,
      }
      
    }

    componentDidMount(){
        console.log("class component loaded");
    };
shouldComponentUpdate(){
    return true;
};
componentDidUpdate(){
    console.log("component did update")
}

    componentWillUnmount(){
        console.log("class component will unload");
    }
  render() {
    console.log(`render`)
    return (
      <div className="App">
        <h1>Class Component</h1>
      <h2>score:{this.state.score}</h2>
      <button
        onClick={() => {
       this.setState({score:this.state.score+1});
        }}
      >
        +
      </button>

      <button
        onClick={() => {
            this.setState({score:this.state.score-1});
        }}
      >
        -
      </button>

      <h2>age:{this.state.age}</h2>
      <button
        onClick={() => {
            this.setState({age:this.state.age+1});
        }}
      >
        +
      </button>

      <button
        onClick={() => {
            this.setState({age:this.state.age-1});
        }}
      >
        -
      </button>
      </div>
    )
  }
}
