import { useForm } from 'react-hook-form'

export default function FormSignupRHForm(){
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    alert('Validado con react-hook-form: ' + JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
      <div>
        <label className="block text-sm">Nombre</label>
        <input {...register('name', { required: 'Nombre es requerido' })} className="w-full p-2 border rounded" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input {...register('email', { required: 'Email requerido', pattern: { value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' }})} className="w-full p-2 border rounded" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <button className="px-4 py-2 rounded bg-indigo-600 text-white">Enviar</button>
    </form>
  )
}
