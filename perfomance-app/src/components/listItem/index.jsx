import { useEffect, useState } from 'react'

export default function ListItem() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  function addItem() {
    const v = inputValue.trim()
    if (!v) return
    setItems([...items, v])
    setInputValue('')
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    addItem()
  }

  useEffect(() => {
    console.log('ListItem unmounted')
  }, [])

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Insert the text"
        />
        <button type="submit">Add Item</button>
      </form>

      {items.length > 0 ? (
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Список пуст</p>
      )}
    </div>
  )
}
