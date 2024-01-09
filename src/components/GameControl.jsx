class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: null,
      gameOver: false,
      guesses: [],
      numGuesses: 5,
      strFragment: null
    }
  }

  componentDidMount() {
    
  }

  setWord() {
    
  }

  handleWordGuess = (guess) => {
    const { dispatch } = this.props;

  }

  handleGameOver = () => {
    //TODO
  }

  parsePosition = (letters) => {
    return pos;
  }

}

// Firebase

//scale = redux 
//context -> smaller
//hooks ->  smallest