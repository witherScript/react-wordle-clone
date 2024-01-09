import React from "react";

function WordForm(props) {
  function handleGuessFormSubmission(event) {
    event.preventDefault();
    props.onGuess(event.target.guess.value);
  }
  return (
    <React.Fragment>
      <div className="word-form">
        <form id="words" onSubmit={handleGuessFormSubmission}>
          <input type="text" name="guess" size="50" minLength={1} maxLength={1} pattern="[A-Za-z]" required/>
          <button type="submit">Submit Guess</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default WordForm;