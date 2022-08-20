import {useState, useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([
    {
      name: 'krisna',
    },
    {
      name: 'supriya',
    },
  ])
  console.log(count)
  console.log(data)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(dat => {
        setData(dat)
      })
    return () => {
      console.log('unmount')
    }
  }, [count])

  return (
    <div style={{textAlign: 'center'}}>
      {data.map(user => (
        <p key={user.name}>{user.name}</p>
      ))}
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment count
      </button>
    </div>
  )
}
export default App
