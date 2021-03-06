import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: 'every through yummy squeal queen fry',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable 'userInput' will contain the text input from the user
    // no need to change this variable
    let userInput = this.state.phrase

    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    // no need to change this variable
    let translatedWordsArray = []

    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ")

    // now that we have an array of words, we can map over the array and access each word
    splitUserInput.map(currentWord => {
      // ACTION ITEM: use 'currentWord' as a starting point for your code

      //make new variable that splits currentWord into array
      let arrLetters = []
      //make new varialble that holds the shifted letters
      // let removedLetters = []

      arrLetters = currentWord.split("")

      //the letter y as a vowel
        //if y isnt first, then shift everything before the first y and push it to the end

      //words that start with qu
        //(currentWord.charAt(0) === "q" && (currentWord.charAt(1) === "u"
        //shift the qu and push to the end of currentWord

      //words with multiple consonants before the qu (squirrel)
        //(currentWord.charAt(value) === "q" && (currentWord.charAt(value + [1]) === "u"
        //s q u e a l

        //words that start with mutilple consonants
        //1 split currentWord into an array
        //2 shift until we reach a value thats a vowel
        //3 push the consonants to the end and add pig latin (ay)
        //&& (currentWord.charAt(value + [1]) !== "a" || "e" || "i" || "o" || "u")
        //FOR EVERY INSTANCE OF "A" || ETC ETC HAVE TO REITERATE "arrLetters[0] !==""
        if (arrLetters[0] !== "a" || arrLetters[0] !== "e" || arrLetters[0] !== "i" || arrLetters[0] !== "o" || arrLetters[0] !== "u" ) {
          let multLett = []
          for (let i = 0; i < arrLetters.length; i++) {
            if (arrLetters[i] !== "a" || arrLetters[i] !==  arrLetters[i] !== "e" || arrLetters[i] !=="i" || arrLetters[i] !=="o" || arrLetters[i] !=="u" ){
              //shift
              let tempLett = arrLetters.shift()
              //push to multLett
               multLett.push(tempLett)
        //       console.log(arrLetters)
            }
          }
          arrLetters.push(multLett)
          arrLetters.push("ay")
          console.log(arrLetters)
          return arrLetters
        }

        //words that start with consonants
        //(the letter y as a consonant- it gets caught here)

        //pretend input is hello
        //push
        //shift
        //+ay
        if (arrLetters[0] !== "a" || "e" || "i" || "o" || "u") {
          let singleLett = arrLetters.shift(0)
          return arrLetters.push(singleLett) + "ay"
        }
        //(ay)

      //words that start with vowels =
        else if (arrLetters[0] === "a" || "e" || "i" || "o" || "u") {
          return `${currentWord}way`
        }

        //(way)


      // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
      return translatedWordsArray.push(currentWord)
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")

    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
    // done!
  }

  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'through every squeal queen fry',
      phraseTranslated: 'This is where your translated sentence will appear.'
    })
  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <div>
        <h1>Pig Latin Translator</h1>
          <div id="pigImage">
            <img
              src="https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400"
              alt="pig with butcher cut names in pig latin"
              id="butcherPig"
            />
          </div>
          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p>{ this.state.phraseTranslated }</p>
          </div>
        <footer>
          Coded by ~your name here~
        </footer>
      </div>
    )
  }
}

export default App
