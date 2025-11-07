import { useForm } from 'react-hook-form'

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  function onSubmit(data) {
    const user = { login: data.login, password: data.password }
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('login', { required: 'Login is required!' })}
        placeholder="Login"
      />
      {errors.login && <p>{errors.login.message}</p>}
      <input
        type="text"
        {...register('password', {
          minLength: {
            value: 6,
            message: 'Password should be at least 6 chars !',
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Register</button>
    </form>
  )
}
