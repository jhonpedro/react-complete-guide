import { useState } from 'react'

const useInput = (validation) => {
  const [value, setValue] = useState('')
  const [wasTouched, setWasTouched] = useState(false)

  const isValid = () => {
    return validation(value)
  }

  const reset = () => {
    setValue('')
    setWasTouched(false)
  }

  const onBlur = () => setWasTouched(true)

  const handleChange = (e) => setValue(e.target.value)

  return [value, wasTouched, onBlur, handleChange, isValid, reset]
}

export default useInput
