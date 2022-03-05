type Props = {
  children?: JSX.Element | JSX.Element[];
}

function Wrapper({ children }: Props) {
  return <div className="my-0 mx-auto py-0 px-8 max-w-2xl">{children}</div>
}

export default Wrapper
