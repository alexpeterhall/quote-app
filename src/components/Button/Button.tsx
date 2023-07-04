type ButtonProps = { clickHandler: () => void; children: string }

export default function Button({ clickHandler, children }: ButtonProps) {
  return (
    <form
      action=''
      method='get'
      onSubmit={(event) => {
        event.preventDefault()
        clickHandler()
      }}
      data-qa={`${children.split(' ').join('')}Button`}>
      <button>{children}</button>
    </form>
  )
}
