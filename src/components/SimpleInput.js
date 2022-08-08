

import useInput from '../hooks/use-inputs';

const SimpleInput = (props) => {

  const { 
    value: enteredName, 
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler:nameChangedHandler,
    reset: resetNameInput,
    inputBlurHandler:nameBlurHandler } = useInput(value => value.trim() !== '');


const { 
  value: enteredEmail,
isValid:enteredEmailIsValid,
hasError: emailInputHasError,
valueChangeHandler: emailChangeHandler,
inputBlurHandler:emailBlurHandler,
reset: resetEmailInput

} = useInput (value => value.includes('@'));

 


  let formIsValid = false;
  
      if(enteredNameIsValid && enteredEmailIsValid){
         formIsValid = true;
      }
   

  const formSubmissionHandler = event =>{
    event.preventDefault();


    if(!enteredName){
      
         return;
    };
      

    console.log(enteredName)
    
    resetNameInput();
    resetEmailInput();
    


  };



  const nameInputClasses = nameInputHasError ? 'form-control invalid': 'form-control';
   const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangedHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Yo    ur Email</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
