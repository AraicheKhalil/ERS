import React from 'react'


export default function Header() {
  return (
    <div>
        <h1 className='max-w-[700px] text-center mx-auto text-4xl font-semibold py-7 tracking-wide leading-[1.3]'>
        مصلحة الموارد البشرية والشؤون القانونية والتعاون والتعاضد        
        </h1>

        <div className='text-white flex gap-6 px-4 py-8 justify-center '>
            <div className='flex gap-8 bg-red-500 text-xl font-medium p-6 rounded-xl'>
                <div className='flex  flex-col gap-4'>
                    <div>Administrateurs</div>
                    <div>Redacteurs</div>
                </div>
                <div className='flex  flex-col gap-4'>
                    <div className='flex gap-5 items-center'>: <p>{"120"}</p></div>
                    <div className='flex gap-5 items-center'>: <p>{"82"}</p></div>
                </div>
            </div>

            <div className='flex gap-8 bg-green-500 text-xl font-medium p-6 rounded-xl'>
                <div className='flex  flex-col gap-4'>
                    <div>Ingenieurs</div>
                    <div>Techniciens</div>
                </div>
                <div className='flex  flex-col gap-4'>
                    <div className='flex gap-5 items-center'>: <p>{"120"}</p></div>
                    <div className='flex gap-5 items-center'>: <p>{"82"}</p></div>
                </div>
            </div>

            <div className='flex gap-8 bg-gray-800 text-xl font-medium p-6 rounded-xl'>
                <div className='flex  flex-col gap-4'>
                    <div>Adj Administratif</div>
                    <div>Adj Techniques</div>
                </div>
                <div className='flex  flex-col gap-4'>
                    <div className='flex gap-5 items-center'>: <p>{"120"}</p></div>
                    <div className='flex gap-5 items-center'>: <p>{"82"}</p></div>
                </div>
            </div>
        </div>




    </div>
  )
}
