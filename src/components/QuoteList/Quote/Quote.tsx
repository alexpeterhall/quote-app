type QuoteProps = { quote: Quote }

export default function Quote({ quote }: QuoteProps) {
  function formatQuote(quote: Quote) {
    if (quote.tags == null || quote.tags.length === 0) {
      return (
        <div>
          <p data-cy='quote'>{`${quote.quote}`}</p>
          <p data-cy='author'>{`${quote.author}`}</p>
        </div>
      )
    } else {
      return (
        <div>
          <p data-cy='quote'>{`${quote.quote}`}</p>
          <p data-cy='author'>{`${quote.author}`}</p>
          <p data-cy='tagList'>
            {quote.tags.map((tag) => {
              return <span key={`${tag}`} data-cy='tag'>{`#${tag} `}</span>
            })}
          </p>
        </div>
      )
    }
  }

  return <div data-cy='quote'>{formatQuote(quote)}</div>
}
