import React from 'react'
import { FirebaseContext } from '../../services/firebase/FirebaseProvider'
import Quote from './Quote/Quote'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Button from '../Button/Button'

const QuoteList = () => {
  const Firebase = React.useContext(FirebaseContext)
  const [quoteList, setQuoteList] = React.useState({} as QuoteList)
  const [currentQuote, setCurrentQuote] = React.useState({} as Quote)
  const dataLoadComplete = React.useRef(false)

  const getRandomQuote = React.useCallback(() => {
    return quoteList[Math.floor(Object.keys(quoteList).length * Math.random())]
  }, [quoteList])

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
    setCurrentQuote(getRandomQuote())
  }, [getRandomQuote])

  if (Object.keys(currentQuote).length === 0) {
    return <LoadingSpinner />
  }

  return (
    <>
      <Quote quote={currentQuote} />
      <Button
        handleClick={() => {
          setCurrentQuote(getRandomQuote())
        }}>
        Next Quote
      </Button>
    </>
  )
}

export default QuoteList
