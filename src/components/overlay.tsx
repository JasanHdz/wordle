type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function Overlay({ children }: Props) {
  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 z-50 bg-overlay dark:bg-darkOverlay overflow-y-auto overflow-x-hidden ">
      {children}
    </div>
  )
}
