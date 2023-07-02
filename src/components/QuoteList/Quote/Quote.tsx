type QuoteProps = { quote: Quote }

export default function Quote({ quote }: QuoteProps) {
  function formatQuote(quote: Quote): string {
    if (quote.tags == null || quote.tags.length === 0) {
      return `${quote.quote} - ${quote.author}`
    } else {
      return `${quote.quote} - ${quote.author} - #${quote?.tags.join(' #')}`
    }
  }

  return <div data-cy='quote'>{formatQuote(quote)}</div>
}
