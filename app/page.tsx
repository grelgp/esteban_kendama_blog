import Image from 'next/image'

function Card({ title }: { title: String }) {
  return (
    <div className='h-[65vh] w-[90vw] sm:h-96 sm:w-72 p-2 my-2 flex flex-col items-stretch mx-auto rounded-2xl border-white border-2 shadow-md'>
      <p className='w-full text-center text-2xl'>{title}</p>
      <div className='bg-blue-300 m-4 flex-1'>
        <img className=' m-auto' src="https://picsum.photos/300/300" />
      </div>
    </div>
  )
}

export default function Home() {

  let names: string[] = [];

  for (let i = 0; i < 12; i++) {
    names.push("Element " + i);
  }

  return (
    <main>
      <div className='mx-8 place-content-center grid columns-1 sm:grid-cols-auto-fit'>
        {names.map(name => {
          return (
            <Card title={name}></Card>
          )
        })}
      </div>
    </main>
  )
}
