import { useState } from 'react'

export default function FormSignup(){
  const [form, setForm] = useState({ name:'', email:'' })
  const [errors, setErrors] = useState({})

  const validate = (values) => {
    const e = {}
    if(!values.name.trim()) e.name = 'Nombre requerido'
    if(!values.email.trim()) e.email = 'Email requerido'
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Email inválido'
    return e
  }

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if(Object.keys(v).length === 0){
      // formulario válido -> (no hace falta integración; puntos extra si lo integras)
      alert('Formulario válido — listo para envío (puntos extra si integras).')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label className="block text-sm">Nombre</label>
        <input name="name" value={form.name} onChange={handleChange}
               className="w-full p-2 border rounded" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input name="email" value={form.email} onChange={handleChange}
               className="w-full p-2 border rounded" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <button className="px-4 py-2 rounded bg-indigo-600 text-white">Enviar</button>
    </form>
  )
}
