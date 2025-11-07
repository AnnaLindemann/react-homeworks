import { useForm } from 'react-hook-form'
const validationName = {
  required: 'This filed is required!',
  maxLength: {
    value: 20,
    message: 'User name should consist of not more then 20 chars',
  },
  pattern: { value: /^[A-Za-z]+$/i, message: 'Only english letters' },
}
const validationAge = {
  required: 'Age is required!',
  min: {
    value: 18,
    message: 'You should be more then 18 years old',
  },
}

export default function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitted },
  } = useForm()
  function onSubmit(data) {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('name', validationName)}
        placeholder="Name"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        type="number"
        {...register('age', validationAge)}
        placeholder="Age"
      />
      {errors.age && <p>{errors.age.message}</p>}
      {isDirty && <p>Changes have been made.</p>}
      {!isValid && isSubmitted && <p>Form is incomplete or has issues</p>}
      <button type="submit">Submit</button>
    </form>
  )
}
