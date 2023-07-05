type TagProps = { tags: string[] }

export default function Tag({ tags }: TagProps) {
  return (
    <p data-qa='tagList'>
      {tags.map((tag) => (
        <a key={`${tag}`} href={`${tag}`} data-qa='tag'>{`#${tag} `}</a>
      ))}
    </p>
  )
}
