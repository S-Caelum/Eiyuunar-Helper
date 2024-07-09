import Link from 'next/link'
import React from 'react'

const ToolsSections = ({header, content}) => {
  return (
    <div className='p-4 ring-1 flex items-center flex-col md:w-3/12 ring-purple rounded-lg'>
      <p className='text-[17px]'> {header} </p>
      <div className='p-0 md:p-3 pt-2 w-full'>
        <div className="flex mt-1 flex-col gap-2">
          {content?.map(({name, link}, id) => {
            return (
              <Link href={link} key={id}>
                <p className='p-2 pl-4 ring-1 rounded-md'> {name} </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ToolsSections