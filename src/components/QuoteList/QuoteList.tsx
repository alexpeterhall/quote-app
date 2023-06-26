import React from 'react'
import { FirebaseContext } from '../../services/firebase'
import Quote from './Quote/Quote'

const QuoteList = () => {
  const Firebase = React.useContext(FirebaseContext)
  const [quoteList, setQuoteList] = React.useState({} as QuoteList)

  React.useEffect(() => {
    if (Firebase == null) throw new Error('Firebase Database context not found')
    ;(async () => {
      const data = await Firebase.getQuoteList()
      setQuoteList(data)
    })()
  }, [Firebase])

  // function getRandomQuote(): Quote {
  //   return quoteList[Math.floor(quoteList.length * Math.random())]
  // }

  return (
    <div>
      {Object.entries(quoteList).map(([key, value]) => (
        <Quote key={key} quote={value} />
      ))}
    </div>
  )
}

export default QuoteList
