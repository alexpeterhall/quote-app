type QuoteProps = { quote: Quote }

export default function Quote({ quote }: QuoteProps) {
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
            return <a key={`${tag}`} href='#' data-cy='tag'>{`#${tag} `}</a>
          })}
        </p>
      </div>
    )
  }
}
