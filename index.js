import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const Title = ({ todoCount }) => {
    return (
        <header className="App-header">
            <div>
                <div>
                    <h1>STRONA KINA </h1>
                </div>
            </div>
        </header>
    );
};
class MainPage extends React.Component {
    state = {
        value: "",
        todos: []
    };
    handleChange = e => {
        e.preventDefault();
        this.setState({ value: e.target.value });
    };
    handleClick = () => {
        this.setState(prevState => ({
            todos: [
                ...prevState.todos,
                {
                    name: prevState.value,
                    key: Date.now(),
                    isFinished: false
                }
            ],
            value: ""
        }));
    };

 rezerwacja = key => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => {
                if (todo.key !== key) {
                    return todo;
                }
                return {
                    ...todo,
                    isFinished: !todo.isFinished
                };
            })
        }));
    };
    render() {
        return (
            <div className="App-mid">
                <Title />
                <label className="index">
                    <p>wpisz nazwe filmu!</p>
                    <input
                        className="input"
                        id="input"
                        type="text"
                        maxLength="100"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button className="AddNewTodo" onClick={this.handleClick}>
                        Kup bilety!
                    </button>
                </label>
                {this.state.todos.map(todo => (
                    <div
                        className="list"
                        key={todo.key}
                        style={{
                            textDecoration: todo.isFinished
                                ? "line-through"
                                : "none"
                        }}
                    >
                        <div className="toDoTask">{todo.name}</div>
                        <button
                            id="Unmark"
                            className="MarkAsDone"
                            onClick={() => this.rezerwacja(todo.key)}
                        >
                            wolne miejsce
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}
ReactDOM.render(<MainPage />, document.getElementById("root"));
