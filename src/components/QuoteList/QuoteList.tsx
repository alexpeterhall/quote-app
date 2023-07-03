import React from 'react'
import { FirebaseContext } from '../../services/firebase'
import Quote from './Quote/Quote'

const QuoteList = () => {
  const Firebase = React.useContext(FirebaseContext)
  const [quoteList, setQuoteList] = React.useState({} as QuoteList)
  const [currentQuote, setcurrentQuote] = React.useState({} as Quote)
  const dataLoadComplete = React.useRef(false)
  const firstRender = React.useRef(true)

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
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    setcurrentQuote(quoteList[Math.floor(Object.keys(quoteList).length * Math.random())])
  }, [quoteList])

  return (
    <div>
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
