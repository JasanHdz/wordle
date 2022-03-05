import Key from './key'
import { FiDelete } from 'react-icons/fi'

const rowOne = ['q', 'w', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const rowTwo = ['a','s','d','f','g','h','j','k','l','ñ']
const rowThree = ['z','x','c','v','b','n','m']

function Keyboard() {
  return (
    <div className='bg-lightGray dark:bg-darkLighGray py-8 flex gap-2 flex-wrap rounded-2xl'>
      <div className='flex gap-2 pl-12'>
        {rowOne.map((letter) => <Key key={letter} letter={letter} />)}
      </div>
      <div className='flex gap-2 pl-16'>
        {rowTwo.map((letter) => <Key key={letter} letter={letter} />)}
      </div>
      <div className='flex gap-2 pl-5'>
        <Key letter='enter' width={71} />
        {rowThree.map((letter) => <Key key={letter} letter={letter} />)}
        <Key width={71}><FiDelete size={26} /></Key>
      </div>
    </div>
  )
}

export default Keyboard