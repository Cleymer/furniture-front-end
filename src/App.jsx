import React, {useEffect}  from 'react'
import { useDispatch } from 'react-redux'
import { getCategory } from './features/category/categoryAction'

export const App = () => {

  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [])
  

  return (
    <div>App</div>
  )
}

