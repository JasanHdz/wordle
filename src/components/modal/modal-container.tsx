type Props = {
  children?: JSX.Element | JSX.Element[] | React.ReactNode
}

function ModalContainer({ children }: Props) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white rounded-lg shadow dark:bg-gray-700 max-w-modalWidth min-w-modalWidth overflow-y-auto max-h-screen h-full md:h-auto px-12 pt-14 pb-6">
        {children}
      </div>
    </div>
  )
}

export default ModalContainer
