import {useState, useEffect} from 'react'
import useFetch from './useFetch'

const App = () => {
  const [count, setCount] = useState(0)
  // const [data, setData] = useState([
  const data = useFetch('https://jsonplaceholder.typicode.com/users')
  const todos = useFetch('https://jsonplaceholder.typicode.com/todos')

  /* useEffect(() => {
    fetch(' useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(dat => {
        setData(dat)
      })
    return () => {
      console.log('unmount')
    }
  }, [count]))
      .then(res => res.json())
      .then(dat => {
        setData(dat)
      })
    return () => {
      console.log('unmount')
    }
  }, [count]) */

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Users</h1>
      {data.map(user => (
        <p key={user.name}>{user.name}</p>
      ))}
      <h1>Todos</h1>
      {todos.map(todo => (
        <p key={todo.title}>{todo.title}</p>
      ))}
    </div>
  )
}
export default App
