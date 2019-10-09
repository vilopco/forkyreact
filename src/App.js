import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas
class App extends Component {
  constructor(){
    super();
    this.state={
      list:['Sacar la ropa','Hacer la cama','Leer un rato'],
      valor:''
    };
    this.enviarForm = this.enviarForm.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e){
    return this.setState({
      valor:e.target.value
    })
  }

  enviarForm(e){
    e.preventDefault();
    let lista=this.state.list;
    if(this.refs.newTask.value){
      lista[lista.length]=this.refs.newTask.value;
      //this.refs.newTask.value="";
      return this.setState({
        list:lista,
        valor:''
      });
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {
             this.state.list.map(function(item,key) {
                return <li key={key}>{item}</li>
              })
            }
          </ul>
           <form onSubmit={this.enviarForm}>
             <input type="text" value={this.state.valor} onChange={this.changeValue} id="new-task" ref="newTask" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;