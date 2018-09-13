import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      elements: [{
        id: 1,
        name: "Player1",
        initiative: 20
      }, {
        id: 2,
        name: "Player2",
        initiative: 19
      }, {
        id: 3,
        name: "Player3",
        initiative: 18
      }, {
        id: 4,
        name: "Player4",
        initiative: 17
      },
    
    ]
    }
    this.updateName = this.updateName.bind(this);
    this.updateInitiative = this.updateInitiative.bind(this);
 }

  updateName(id,e){
    const {value} = e.target;
    const elements = this.state.elements;
    const index = this.state.element.findIndex(el => el.id === id);
    elements[index].name = value;
    this.setState({ elements });
  }

  updateInitiative(id,e){
    const {value} = e.target;
    const elements = this.state.elements;
    const index = this.state.element.findIndex(el => el.id === id);
    elements[index].initiative= Number[value];
    this.setState({ elements });
  }

  render() {
    const { elements } = this.state;
    return (
      <div>
        {elements.map(element =>
        <Card 
        key = {element.key}
        name = {element.name}
        initiative = {elements.initiative}
        id = {element.id}
        onNameChange = {this.updateName}
        onInitiativeChange = {this.updateInitiative}
        />
        )}
      </div> 
    );
  }
}

export default App;
