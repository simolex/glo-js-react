"use strict";

const red = {
  color: "#ff0000",
  fontSize: "24px",
};

const button = {
  fontSize: "30px",
};

const alertHello = () => {
  alert("Hello");
};

const Hello = (props) => (
  <p style={red} onClick={alertHello}>
    Hello {props.name}
  </p>
);

class RenderJSX extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    //this.changeCounter = this.changeCounter.bind(this); //передача this вариант 1
  }
  changeCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <header>
          <img src="logo.svg" alt="logo react" className="logo" />
          <h1>Hello React</h1>
        </header>
        <main>
          <button style={button} onClick={this.changeCounter}>
            {this.state.counter}
          </button>
          <p>A JavaScript library for building UIs</p>
          <Hello name="Alex" />
          <Hello name="Nicoly" />
          <Hello name="Fedor" />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<RenderJSX />, document.getElementById("root"));
