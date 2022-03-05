import { useLayoutEffect, useState } from 'react';

function Switch() {
  const [checked, setChecket] = useState<boolean>(false)
  const handleChecked = (event: any) => {
    const isChecked = event.target.checked
    setChecket(isChecked)
    if (isChecked) {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }
  useLayoutEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      setChecket(true);
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      setChecket(false);
    }
  }, [])
  return (
    <div>
      <input 
        type="checkbox" 
        className="checkbox" 
        id="checkbox"
        checked={checked}
        onChange={handleChecked}
      />
      <label htmlFor="checkbox" className='switch' />
    </div>
  )
}

export default Switch