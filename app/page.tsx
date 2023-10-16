import Card from "./card"
import fs from "fs"

export default function Home() {

  let names: string[] = [];

  for (let i = 0; i < 11; i++) {
    names.push("Element " + i);
  }

  return (
    <main className="bg-gray-100">
      <header>
        <div className="bg-white border-b-2 py-2 px-4 sm:px-8 space-x-6 flex flex-row justify-between items-center">
          <a href="" className="text-xl sm:text-2xl font-semibold">
            Esteban Kendama
          </a>
          <div className="flex items-center space-x-6 sm:space-x-10">
            <a href="" className="text-md sm:text-lg hover:underline underline-offset-4">
              A propos
            </a>
            <a href="https://www.youtube.com/@EstebanKendama" className="flex items-center hover:underline underline-offset-4">
              <img className="w-8 sm:mr-2" src="./youtube.svg" alt="" />
              <p className="text-lg hidden sm:block ">
                Ma chaîne
              </p>
            </a>
          </div>
        </div>
      </header>
      <div className='mx-8 place-content-center grid columns-1 sm:grid-cols-auto-fit'>
        {names.map((name, index) => {
          return (
            <Card title={name} videoSrc={"/videos/" + fs.readdirSync("./public/videos").at(index)}></Card>
          )
        })}
      </div>
    </main>
  )
}
