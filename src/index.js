import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

class Box extends Component {
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col)
  }
  render() {
    return (
      <div 
      className={this.props.boxClass}
      id={this.props.id}
      onClick={this.selectBox}
      />
    );
  }
}


class Grid extends Component {
  render() {
    const width = (this.props.cols * 16);
    var rowsArr = []

    var boxClass = "";
    for (var i = 0; i < this.props.cols; i++) {
      for (var j = 0; j < this.props.rows; j++) {
        let boxId = i + "_" + j;
        boxClass = this.props.gridFull[i][j]? "box on" : "box off"
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }
    return (
      <div className='grid' style={{width: width}}>
      {rowsArr}
      </div>
    );
  }
}


class Main extends Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 27;
    this.cols = 27;
    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => 
      Array(this.cols).fill(false))
    }
  }
  render() {
    return (
      <div>
      <h1>The Game of Life</h1>
      <Grid
        gridFull={this.state.gridFull}
        rows={this.rows}
        cols={this.cols}
        selectBox={this.selectBox}
      />
      <h2>Generation : {this.state.generation}</h2>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Main/>
  </React.StrictMode>
);
