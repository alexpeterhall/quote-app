type QuoteProps = { quote: Quote }
const Quote = ({ quote }: QuoteProps) => {
  function formatQuote(quote: Quote): string {
    if (quote.tags == null) {
      return `${quote.quote} - ${quote.author}`
    }
    return `${quote.quote} - ${quote.author} - #${quote.tags.join(' #')}`
  }

  return <div>{formatQuote(quote)}</div>
}

export default Quote
