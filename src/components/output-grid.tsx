import React from 'react'

function OutputGrid() {
  const list = Array.from(Array(25).keys())
  return (
    <section className='grid grid-cols-5 gap-2 mx-28 my-16'>
      {list.map((item) => <article className='w-16 h-16 rounded-md bg-grayGrid dark:bg-darkLighGray' key={item} />)}
    </section>
  )
}

export default OutputGrid