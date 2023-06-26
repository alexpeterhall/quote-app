import React from 'react'
import { FirebaseContext } from '../../services/firebase'
import Quote from './Quote/Quote'

const QuoteList = () => {
  const Firebase = React.useContext(FirebaseContext)
  const [quoteList, setQuoteList] = React.useState({} as QuoteList)
  const quoteEntries = Object.entries(quoteList)

  React.useEffect(() => {
    if (Firebase == null) throw new Error('Firebase Database context not found')
    ;(async () => {
      const data = await Firebase.getQuoteList()
      setQuoteList(data)
    })()
  }, [Firebase])

  function getRandomQuote(): Quote {
    if (quoteEntries.length == 0) {
      return { quote: ' ', author: 'Loading...', tags: [] }
    }
    return quoteList[Math.floor(quoteEntries.length * Math.random())]
  }

  return (
    <div>
      {
        <Quote quote={getRandomQuote()} />
        /* {quoteEntries.map(([key, value]) => (
        <Quote key={key} quote={value} />
      ))} */
      }
    </div>
  )
}

export default QuoteList
