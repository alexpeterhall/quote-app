import TagList from '../../TagList/TagList'

export default function Quote({ quote }: { quote: Quote }) {
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
        {<TagList tags={quote.tags} />}
      </div>
    )
  }
}
