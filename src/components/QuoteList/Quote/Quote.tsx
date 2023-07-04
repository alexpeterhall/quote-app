type QuoteProps = { quote: Quote }

export default function Quote({ quote }: QuoteProps) {
  if (quote.tags == null || quote.tags.length === 0) {
    return (
      <div>
        <p data-qa='quote'>{`${quote.quote}`}</p>
        <p data-qa='author'>{`${quote.author}`}</p>
      </div>
    )
  } else {
    return (
      <div>
        <p data-qa='quote'>{`${quote.quote}`}</p>
        <p data-qa='author'>{`${quote.author}`}</p>
        <p data-qa='tagList'>
          {quote.tags.map((tag) => {
            return <a key={`${tag}`} href='#' data-qa='tag'>{`#${tag} `}</a>
          })}
        </p>
      </div>
    )
  }
}
