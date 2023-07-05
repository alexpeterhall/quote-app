import Tag from './Tag/Tag'

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <p data-qa='tagList'>
      {tags.map((tag) => (
        <Tag key={`${tag}`} tag={tag} />
      ))}
    </p>
  )
}
