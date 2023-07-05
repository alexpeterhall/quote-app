import Tag from '../../Tag/Tag'

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
        {<Tag tags={quote.tags} />}
      </div>
    )
  }
}
