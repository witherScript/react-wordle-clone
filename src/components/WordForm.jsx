import React from "react";

function WordForm() {
  return (
    <React.Fragment>
      <div className="word-form">
        <form id="words">
          <input type="text" size="50" minLength={1} maxLength={1} pattern="[A-Za-z]" required/>
          <input type="text" size="50" minLength={1} maxLength={1} pattern="[A-Za-z]" required/>
          <input type="text" size="50" minLength={1} maxLength={1} pattern="[A-Za-z]" required/>
          <input type="text" size="50" minLength={1} maxLength={1} pattern="[A-Za-z]" required/>
          <input type="text" size="50" minLength={1} maxLength={1} pattern="[A-Za-z]" required/>
          <button type="submit">Submit Guess</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default WordForm;