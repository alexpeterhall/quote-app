type TagProps = { tag: string }

export default function Tag({ tag }: TagProps) {
  return <a href={`${tag}`} data-qa='tag'>{`#${tag} `}</a>
}
