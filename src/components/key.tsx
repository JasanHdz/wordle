type Props = {
  letter?: string;
  width?: number | string
  children?: JSX.Element | JSX.Element[]
}

function Key({ letter, width, children }: Props) {
  return (
    <div style={{
      width: width || '45px',
    }} className="text-lg py-3 px-4 border rounded-md cursor-pointer box-border flex justify-center bg-grayStrong dark:bg-darkGrayStrong active:bg-cyan-600">
      {letter && <p className="select-none font-medium">{letter.toUpperCase()}</p>}
      {children}
    </div>
  )
}

export default Key