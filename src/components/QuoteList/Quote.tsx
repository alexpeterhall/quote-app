import React from 'react'
import { FirebaseContext } from '../../services/firebase'

const Quote = () => {
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

  // function formatQuote(quote: Quote): string {
  //   return `${quote.quote} - ${quote.author} - #${quote.tags.join(' #')}`
  // }

  return (
    <div>
      {Object.entries(quoteList).map(([key, value]) => (
        <p key={key}>{`${value.quote} - ${value.author} #${value.tags}`}</p>
      ))}
    </div>
  )
}

export default Quote
