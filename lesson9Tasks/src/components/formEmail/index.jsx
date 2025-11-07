import { useForm } from 'react-hook-form'
const validatedEmail = {
  required: 'This field is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Email format is not valid',
  },
}
export default function FormEmail({ validationMode = 'onSubmit' }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: validationMode })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('email', validatedEmail)}
        placeholder="Enter Email"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <button type="submit">Submit</button>
    </form>
  )
}
