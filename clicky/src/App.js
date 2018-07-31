import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title'
// import Wrapper from './components/Wrapper'
// import Cards from './components/Cards'
import Friends from "./friends.json"

class App extends Component {
  constructor(){
    super()
    this.state={
      Friends: Friends,
      message: "Click any image to begin",
      score: 0
    }
  }
  handleImageClick = (id) => {
    //Math.floor(Math.random() * Friends.length)
    var that = this
    console.log(id)
    for (var i = 0; i < Friends.length; i++){
      
      if(Friends[i].id=== id){
        
        if(Friends[i].hasBeenClicked===false){
          Friends[i].hasBeenClicked = true
          console.log(Friends[i])
          this.setState({
            message: "Correct",
            score: this.state.score + 1
          })
        
          setTimeout(function(){
            that.setState({
              message: "Click another image"
            })
          }, 500)
          //increment score here
        } else{
          this.setState({
            message: "You lose!",
            score: 0
          })
          setTimeout(function(){
            that.setState({
              message: "Play again?"
            })
          }, 700)
          console.log("you lost")
        }
      }
    }
  }
  componentDidMount(){
    console.log(Friends)
  }
 
  render() {
    var displayFriends = this.state.Friends.map((eachItem, index) =>
    <img src={eachItem.image} key={index} alt={index} onClick={()=>this.handleImageClick(eachItem.id)}/>
   
  )
    return (
      <div className="App">
       <Title
       message = {this.state.message}
       score = {this.state.score}
       />
       <div className="friends">
        {displayFriends}
       </div>
      </div>
    );
  }
}

export default App;
