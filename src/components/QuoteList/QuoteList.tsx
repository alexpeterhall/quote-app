import React from 'react'
import { FirebaseContext } from '../../services/firebase'
import Quote from './Quote/Quote'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const QuoteList = () => {
  const Firebase = React.useContext(FirebaseContext)
  const [quoteList, setQuoteList] = React.useState({} as QuoteList)
  const [currentQuote, setcurrentQuote] = React.useState({} as Quote)
  const dataLoadComplete = React.useRef(false)

  React.useEffect(() => {
    if (Firebase == null) throw new Error('Firebase Database context not found')
    ;(async () => {
      const data = await Firebase.getQuoteList()
      setQuoteList(data)
      dataLoadComplete.current = true
    })()
  }, [Firebase])

  React.useEffect(() => {
    if (!dataLoadComplete.current) return
    setcurrentQuote(quoteList[Math.floor(Object.keys(quoteList).length * Math.random())])
  }, [quoteList])

  if (Object.keys(currentQuote).length === 0) {
    return <LoadingSpinner />
  }

  return (
    <div data-cy='quoteList'>
      {<Quote quote={currentQuote} />}
      <form
        action=''
        method='get'
        onSubmit={(event) => {
          event.preventDefault()
          setcurrentQuote(quoteList[Math.floor(Object.keys(quoteList).length * Math.random())])
        }}
        data-cy='nextQuoteButton'>
        <button>Next Quote</button>
      </form>
    </div>
  )
}

export default QuoteList
