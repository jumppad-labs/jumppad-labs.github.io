import { useState, useEffect } from 'react'

export function WordSwitcher({ words }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      let current = index
      if (current == words.length - 1) {
        current = 0
      } else {
        current++
      }
      setIndex(current)
    }, 3000);
    return () => clearInterval(interval);
  }, [index, words]);

  return (
    <span>{words[index]}</span>
  )
}