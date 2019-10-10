import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas
class App extends Component {
	constructor(){
		super();
		this.state = {
			tasks: [
				{ id: 1, name: "Sacar la ropa", done: false },
				{ id: 2, name: "Hacer la cama", done: true },
				{ id: 3, name: "Leer un rato", done: false }
			],
			newTask: '',
			btnclass: false
		}
		this.enviaForm = this.enviaForm.bind(this);
		this.changeValue = this.changeValue.bind(this);
		this.cambiaEstado = this.cambiaEstado.bind(this);
	}
	
	changeValue(e){
		return this.setState({
			newTask:e.target.value
		})
	}
	
	cambiaEstado(id){
		var newTask=this.state.tasks.filter(element => {
			if(element.id===id){
				element.done=!element.done;
			}
			return element
		});
		
		return this.setState({
			task:newTask
		})
	}

	enviaForm(e){
		e.preventDefault();

		if(!this.state.newTask){
			return this.setState({
				btnclass:true
			});
		} 
		
		let obj=this.state.tasks.concat({
			id:this.state.tasks.length+1,
			name:this.state.newTask,
			done:false
		})
		
		return this.setState({
			tasks:obj,
			newTask:'',
			btnclass:false
		});
	}
	render() {
		return (
			<div className="wrapper">
				<div className="list">
					<h3>Por hacer:</h3>
					<ul className="todo">
						{this.state.tasks.map((task, index) => <li onClick={() => this.cambiaEstado(task.id)} className={task.done?"done":""} key={task.id}>{task.name}</li>)}
					</ul>
					<form onSubmit={this.enviaForm}>
						<input type="text" onChange={this.changeValue}  value={this.state.newTask} id="new-task" ref="newTask" className={this.state.btnclass?'error':''} placeholder="Ingresa una tarea y oprime Enter" />
					</form>
				</div>
			</div>
			)
		}
	}
	
	
	export default App;