function ThanksPage() {
  const rate = window.localStorage.getItem("rate") || 0;
  return (
    <main>
      <div className="thanks_container">
        <img src="/public/images/illustration-thank-you.svg" />
      </div>
      <div className="rate_container">You selected {rate} out of 5</div>
      <div className="thanks_content">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </main>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<ThanksPage />, root);
