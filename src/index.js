function Rate(props) {
  function handlerClick(e) {
    e.persist();
    for (let i = 1; i < 6; i++) {
      document.getElementById(`${i}`).classList.remove("active");
    }
    let element = document.getElementById(e.target.id);
    element.classList.add("active");
    props.setRate(e.target.id);
  }
  return (
    <div className="rate" id={props.number} onClick={(e) => handlerClick(e)}>
      {props.number}
    </div>
  );
}

function Icon() {
  return (
    <div className="container">
      <div className="img_container">
        <img src="/public/images/icon-star.svg" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <h1>How did we go?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
}

function App() {
  function handler(rate) {
    window.localStorage.setItem("rate", rate);
  }
  return (
    <main>
      <Icon />
      <Content />
      <div className="rate_list">
        <Rate number="1" setRate={handler} />
        <Rate number="2" setRate={handler} />
        <Rate number="3" setRate={handler} />
        <Rate number="4" setRate={handler} />
        <Rate number="5" setRate={handler} />
      </div>
      <button
        className="submit"
        onClick={() => {
          document.location.pathname = "/thanks";
        }}
      >
        SUBMIT
      </button>
    </main>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
