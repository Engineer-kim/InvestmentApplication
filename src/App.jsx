import { useState } from "react"
import Header from "./componets/Header"
import UserInput from "./componets/UserInput"
import Result from "./componets/Result";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectReturn: 6,
    duration: 10
  })

  const inputIsVaild = userInput.duration >= 1

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }


  return (
    <>
      <Header />
      <UserInput handleChange={handleChange}  userInput={userInput} />
      {!inputIsVaild && <p>Plz Enter valid value</p>}
      {inputIsVaild && <Result  userInput={userInput}/>}
    </>
  )
}

export default App
