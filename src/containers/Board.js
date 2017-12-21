import React from 'react'
import board from '../utils/board'
import BoardComponent from '../components/BoardComponent'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      board,
      playerPos:{
        x:0,
        y:0
      },
      collected:0
    }

    this.move = this.move.bind(this);
    this.nextBlockType = this.nextBlockType.bind(this);
  }

  move(val){
    let nextType = this.nextBlockType(this.state.playerPos, val);
    let secondNextType = this.nextBlockType({...this.state.playerPos, x : this.state.playerPos.x - 1}, val);
    switch (val) {
      case 'left':
        if(nextType == 4 || nextType == 1){
          this.setState((prevstate) => ({
            playerPos : {x: prevstate.playerPos.x - 1, y:prevstate.playerPos.y}
          }))
          break;
        }
        if(nextType == 2){
          if(secondNextType == 0 || secondNextType == 2){
            this.setState((prevstate) => ({
              playerPos : {x: prevstate.playerPos.x, y:prevstate.playerPos.y},
            }))
            break;
          }
          if(secondNextType == 4 || secondNextType == 1){
            let newBoard = this.state.board;
            newBoard[this.state.playerPos.y][this.state.playerPos.x - 1] = 4;
            newBoard[this.state.playerPos.y][this.state.playerPos.x - 2] = 2;
            this.setState((prevstate) => ({
              playerPos : {x: prevstate.playerPos.x - 1, y:prevstate.playerPos.y},
              board:newBoard,
              collected:secondNextType == 1 ? prevstate.collected + 1 : prevstate.collected
            }))
          }
          break;
        }
        if(nextType == 0){
          this.setState((prevstate) => ({
            playerPos : {x: prevstate.playerPos.x, y:prevstate.playerPos.y}
          }))
          break;
        }
      case 'up':
        //console.log(this.nextBlockType(this.state.playerPos, val))
        this.setState((prevstate) => ({playerPos : {x: prevstate.playerPos.x, y:prevstate.playerPos.y - 1}}))
        break;
      case 'right':
        //console.log(this.nextBlockType(this.state.playerPos, val))
        this.setState((prevstate) => ({playerPos : {x: prevstate.playerPos.x + 1, y:prevstate.playerPos.y}}))
        break;
      case 'down':
        //console.log(this.nextBlockType(this.state.playerPos, val))
        this.setState((prevstate) => ({playerPos : {x: prevstate.playerPos.x, y:prevstate.playerPos.y + 1}}))
        break;
    }
  }

  nextBlockType(playerPos, direction){
    if(direction == 'left'){
      return this.state.board[playerPos.y][playerPos.x - 1];
    }
    if(direction == 'up'){
      return this.state.board[playerPos.y - 1][playerPos.x]; 
    }
    if(direction == 'right'){
      return this.state.board[playerPos.y][playerPos.x + 1];
    }
    if(direction == 'down'){
      return this.state.board[playerPos.y + 1][playerPos.x];
    }
  }

  componentWillMount(){
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 37:
          this.move('left')
          break;
        case 38:
          this.move('up')
          break;
        case 39:
          this.move('right')
          break;
        case 40:
          this.move('down')
          break;
      }
    }
  }

  render() {
    
    this.state
    return(
      <BoardComponent 
        field={this.state.board}
        playerPos={this.state.playerPos}
        collected={this.state.collected}
      />
    );
  }
}

export default App;
