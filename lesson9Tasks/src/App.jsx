import RegistrationForm from './components/registrationForm'
import SimpleForm from './components/simpleForms'
import EmailForm from './emailForm'
import UserNameForm from './userNameForm'
import FormEmail from './components/formEmail'

function App() {
  return (
    <div>
      <h2>Task1</h2>
      <RegistrationForm />
      <h2>Task2</h2>
      <SimpleForm />
      <h2>Task3</h2>
      <EmailForm />
      <h2>Task4</h2>
      <UserNameForm />
      <h2>Task5</h2>
      <h3>Form test</h3>
      <FormEmail validationMode="onBlur" />
    </div>
  )
}

export default App
