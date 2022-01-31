"use strict";

const red = {
  color: "#ff0000",
  fontSize: "24px",
};

const alertHello = () => {
  alert("Hello");
};

const Hello = (props) => (
  <p style={red} onClick={alertHello}>
    Hello {props.name}
  </p>
);

const RenderJSX = () => (
  <div>
    <header>
      <img src="logo.svg" alt="logo react" className="logo" />
      <h1>Hello React</h1>
    </header>
    <main>
      <p>A JavaScript library for building UIs</p>
      <Hello name="Alex" />
      <Hello name="Nicoly" />
      <Hello name="Fedor" />
    </main>
  </div>
);

ReactDOM.render(<RenderJSX />, document.getElementById("root"));
