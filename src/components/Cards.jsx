import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex px-20 gap-10'>
        <div className='cardcontainer w-1/2 h-[70vh] mt-10'>
            <div className='relative flex items-center justify-center card rounded-xl w-full h-full bg-green-900'>
                <img className="absolute" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute mt-5 px-5 border-2 left-10 bottom-10 rounded-full">&copy;2019-2023</button>
            </div>
        </div>
        <div className='cardcontainer w-1/2 h-[70vh] mt-10 flex gap-10 '>
            <div className='relative card rounded-xl w-1/2 h-[70vh] bg-zinc-900 flex items-center justify-center'>
                <img className='absolute' src="	https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute uppercase left-10 bottom-10 border-2  rounded-full px-5'>rating5.0 on clutch</button>
            </div>
            <div className='relative card rounded-xl w-1/2 h-[70vh] bg-zinc-900 flex items-center justify-center'>
                <img className='absolute ' src="	https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute uppercase left-10 bottom-10 border-2  rounded-full px-5'>business bootcamp alumni</button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
