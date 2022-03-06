type Props = {
  letter?: string;
  width?: number | string
  children?: JSX.Element | JSX.Element[],
  onClick?: () => void,
}

function Key({ letter, width, children, onClick }: Props) {
  return (
    <div onClick={onClick} style={{
      width: width || '45px',
    }} className="text-lg py-3 px-4 rounded-md cursor-pointer box-border flex justify-center bg-grayStrong dark:bg-darkGrayStrong active:bg-cyan-600">
      {letter && <p className="select-none font-medium">{letter.toUpperCase()}</p>}
      {children}
    </div>
  )
}

export default Key