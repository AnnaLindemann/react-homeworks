import { useForm } from 'react-hook-form'

export default function EmailForm() {
  const { register, watch } = useForm()
  const email = watch('email')
  return (
    <form>
      <input type="email" {...register('email')} placeholder="Insert Email" />
      {email && <p>{email}</p>}
    </form>
  )
}
