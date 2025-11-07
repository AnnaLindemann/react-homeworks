import { useForm } from 'react-hook-form'
import { useUser } from '../../context/useUser'
import styles from './styles.module.css'
const userLoginValidation = {
  required: 'This file is required!',
  maxLength: {
    value: 26,
    message: 'User name should consist of not more then 26 chars',
  },
  minLength: {
    value: 2,
    message: 'User name should be not less then 2 chars',
  },
  pattern: {
    value: /^[A-Za-z]+$/i,
    message: 'Only english letters',
  },
}

const userEmailValidation = {
  required: 'This file is required!',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email',
  },
}

const userPasswordValidation = {
  required: 'This file is required!',
  pattern: {
    value: /^.{6,}$/,
    message: 'Enter a valid password',
  },
}
export default function RegistrationForm() {
  const { loginUser } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function handleFormSubmit(formData) {
    const user = {
      login: formData.login,
      email: formData.email,
    }
    loginUser(user)
  }
  return (
    <form className={styles.formCont} onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        type="text"
        {...register('login', userLoginValidation)}
        placeholder="Login"
      />
      {errors.login && (
        <p style={{ color: 'red', fontWeight: 700 }}>{errors.login.message}</p>
      )}
      <input
        type="email"
        {...register('email', userEmailValidation)}
        placeholder="Email"
      />
      {errors.email && (
        <p style={{ color: 'red', fontWeight: 700 }}>{errors.email.message}</p>
      )}
      <input
        type="text"
        {...register('password', userPasswordValidation)}
        placeholder="Password"
      />
      {errors.password && (
        <p style={{ color: 'red', fontWeight: 700 }}>
          {errors.password.message}
        </p>
      )}
      <button className={styles.formBtn} type="submit">
        Log in
      </button>
    </form>
  )
}
