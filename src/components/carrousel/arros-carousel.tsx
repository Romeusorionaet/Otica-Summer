import { CaretLeft, CaretRight } from 'phosphor-react'

export function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? 'arrow--disabled' : ''

  return (
    <button
      onClick={props.onClick}
      className={`arrow rounded-full bg-blue-950/30 outline-none hover:bg-blue-950 focus:bg-blue-950 ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
    >
      {props.left && (
        <CaretLeft size={18} className="text-white" weight="light" />
      )}
      {!props.left && (
        <CaretRight size={18} className="text-white" weight="light" />
      )}
    </button>
  )
}
