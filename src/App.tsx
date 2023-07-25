import { FormEvent, useState } from 'react'
import { useMultistepform } from './useMultistepform'
import { AccountForm } from './forms/AccountForm';
import { AddressForm } from './forms/AdressForm';
import { UserForm } from './forms/UserForm';

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  oblast: string,
  postalCode: string,
  email: string,
  password: string,
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  oblast: "",
  postalCode: "",
  email: "",
  password: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next
  } = useMultistepform([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault()
  
    if (!isLastStep) {
      return next()
    }

    alert("LETS GOOOOO")
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "auto",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content"
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end"
          }}
        >
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="submit">
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
