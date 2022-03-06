import ReactDOM from 'react-dom'

type Props = {
  children?: JSX.Element | JSX.Element[];
  elementId?: string
}

function Portal({ children, elementId = 'modal' }: Props) {
  if (typeof window !== 'undefined') {
    const htmlElement = document.getElementById(elementId)
    if (htmlElement) return ReactDOM.createPortal(children, htmlElement)
    return null
  }
  return null
}

export default Portal
