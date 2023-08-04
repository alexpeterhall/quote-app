type ButtonProps = { handleClick: () => void; children: string }

export default function Button({ handleClick, children }: ButtonProps) {
  return (
    <button onClick={handleClick} data-qa={`${children.split(' ').join('')}Button`}>
      {children}
    </button>
  )
}
