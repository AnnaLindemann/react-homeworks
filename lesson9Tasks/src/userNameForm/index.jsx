import { useForm } from 'react-hook-form'

export default function UserNameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' })
  function onSubmit(data) {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Username: </label>
      <input
        type="text"
        {...register('username', {
          required: 'This field is required',
          minLength: { value: 4, message: 'Name should be at least 2 chars' },
          maxLength: {
            value: 20,
            message: 'Name should be not longer as 20 chars',
          },
        })}
      />
      {errors.username && <p>{errors.username.message}</p>}
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  )
}
