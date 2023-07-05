export default function Tag({ tag }: { tag: string }) {
  return <a href={`${tag}`} data-qa='tag'>{`#${tag} `}</a>
}
