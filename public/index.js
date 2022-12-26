function Rate(props) {
  function handlerClick(e) {
    e.persist();
    for (var i = 1; i < 6; i++) {
      document.getElementById("" + i).classList.remove("active");
    }
    var element = document.getElementById(e.target.id);
    element.classList.add("active");
    props.setRate(e.target.id);
  }
  return React.createElement(
    "div",
    { className: "rate", id: props.number, onClick: function onClick(e) {
        return handlerClick(e);
      } },
    props.number
  );
}

function Icon() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "img_container" },
      React.createElement("img", { src: "/public/images/icon-star.svg" })
    )
  );
}

function Content() {
  return React.createElement(
    "div",
    { className: "content" },
    React.createElement(
      "h1",
      null,
      "How did we go?"
    ),
    React.createElement(
      "p",
      null,
      "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
    )
  );
}

function App() {
  function handler(rate) {
    window.localStorage.setItem("rate", rate);
  }
  return React.createElement(
    "main",
    null,
    React.createElement(Icon, null),
    React.createElement(Content, null),
    React.createElement(
      "div",
      { className: "rate_list" },
      React.createElement(Rate, { number: "1", setRate: handler }),
      React.createElement(Rate, { number: "2", setRate: handler }),
      React.createElement(Rate, { number: "3", setRate: handler }),
      React.createElement(Rate, { number: "4", setRate: handler }),
      React.createElement(Rate, { number: "5", setRate: handler })
    ),
    React.createElement(
      "button",
      {
        className: "submit",
        onClick: function onClick() {
          document.location.pathname = "/thanks";
        }
      },
      "SUBMIT"
    )
  );
}

var root = document.getElementById("root");
ReactDOM.render(React.createElement(App, null), root);