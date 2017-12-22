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
      collected:0,
      moves:0
    }

    this.move = this.move.bind(this);
    this.nextBlockType = this.nextBlockType.bind(this);
  }

  move(val){
    let nextType = this.nextBlockType(this.state.playerPos, val);
    let secondNextType;
    switch (val) {
      case 'left':
        secondNextType = this.nextBlockType({...this.state.playerPos, x : this.state.playerPos.x - 1}, val);
        if(nextType == 4 || nextType == 1){
          this.setState((prevstate) => ({
            playerPos : {x: prevstate.playerPos.x - 1, y:prevstate.playerPos.y},
            moves: prevstate.moves + 1
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
              collected:secondNextType == 1 ? prevstate.collected + 1 : prevstate.collected,
              moves: prevstate.moves + 1
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
        secondNextType = this.nextBlockType({...this.state.playerPos, y : this.state.playerPos.y - 1}, val);
        if(nextType == 4 || nextType == 1){
          this.setState((prevstate) => ({
            playerPos : {x: prevstate.playerPos.x, y:prevstate.playerPos.y - 1},
            moves: prevstate.moves + 1
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
            newBoard[this.state.playerPos.y - 1][this.state.playerPos.x] = 4;
            newBoard[this.state.playerPos.y - 2][this.state.playerPos.x] = 2;
            this.setState((prevstate) => ({
              playerPos : {x: prevstate.playerPos.x, y:prevstate.playerPos.y - 1},
              board:newBoard,
              collected:secondNextType == 1 ? prevstate.collected + 1 : prevstate.collected,
              moves: prevstate.moves + 1
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
      case 'right':
        secondNextType = this.nextBlockType({...this.state.playerPos, x : this.state.playerPos.x + 1}, val);
        if(nextType == 4 || nextType == 1){
          this.setState((prevstate) => ({
            playerPos : {x: prevstate.playerPos.x + 1, y:prevstate.playerPos.y},
            moves: prevstate.moves + 1
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
            newBoard[this.state.playerPos.y][this.state.playerPos.x + 1] = 4;
            newBoard[this.state.playerPos.y][this.state.playerPos.x + 2] = 2;
            this.setState((prevstate) => ({
              playerPos : {x: prevstate.playerPos.x + 1, y:prevstate.playerPos.y},
              board:newBoard,
              collected:secondNextType == 1 ? prevstate.collected + 1 : prevstate.collected,
              moves: prevstate.moves + 1
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
      case 'down':
        secondNextType = this.nextBlockType({...this.state.playerPos, y : this.state.playerPos.y + 1}, val);
        if(nextType == 4 || nextType == 1){
          this.setState((prevstate) => ({
            playerPos : {x: prevstate.playerPos.x, y:prevstate.playerPos.y + 1},
            moves: prevstate.moves + 1
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
            newBoard[this.state.playerPos.y + 1][this.state.playerPos.x] = 4;
            newBoard[this.state.playerPos.y + 2][this.state.playerPos.x] = 2;
            this.setState((prevstate) => ({
              playerPos : {x: prevstate.playerPos.x, y:prevstate.playerPos.y + 1},
              board:newBoard,
              collected:secondNextType == 1 ? prevstate.collected + 1 : prevstate.collected,
              moves: prevstate.moves + 1
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
    return(
      <div>
        <BoardComponent 
          field={this.state.board}
          playerPos={this.state.playerPos}
          collected={this.state.collected}
          moves={this.state.moves}
        />
        <div className="buttons">
          <button onClick={() => {
            this.move('left')
          }}>left</button>
          <button onClick={() => {
            this.move('up')
          }}>up</button>
          <button onClick={() => {
            this.move('right')
          }}>right</button>
          <button onClick={() => {
            this.move('down')
          }}>down</button>
        </div>
      </div>
    );
  }
}

export default App;
