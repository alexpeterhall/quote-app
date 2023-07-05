import Tag from './Tag/Tag'

type TagListProps = { tags: string[] }

export default function TagList({ tags }: TagListProps) {
  return (
    <p data-qa='tagList'>
      {tags.map((tag) => (
        <Tag key={`${tag}`} tag={tag} />
      ))}
    </p>
  )
}
