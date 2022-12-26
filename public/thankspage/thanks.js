function ThanksPage() {
  var rate = window.localStorage.getItem("rate") || 0;
  return React.createElement(
    "main",
    null,
    React.createElement(
      "div",
      { className: "thanks_container" },
      React.createElement("img", { src: "/public/images/illustration-thank-you.svg" })
    ),
    React.createElement(
      "div",
      { className: "rate_container" },
      "You selected ",
      rate,
      " out of 5"
    ),
    React.createElement(
      "div",
      { className: "thanks_content" },
      React.createElement(
        "h1",
        null,
        "Thank you!"
      ),
      React.createElement(
        "p",
        null,
        "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
      )
    )
  );
}

var root = document.getElementById("root");
ReactDOM.render(React.createElement(ThanksPage, null), root);