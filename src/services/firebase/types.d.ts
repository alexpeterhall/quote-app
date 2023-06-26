// import { DatabaseReference } from "firebase/database"

interface MyFirebase {
  getQuoteList: () => Promise<QuoteList>
  // getRandomQuote: () => Promise<Quote>
  // formatQuote: (quote:Quote) => Promise<string>
}
