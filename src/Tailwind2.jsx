 import "./Tailwind.css"

 import img2  from "./assets/react.svg"
function App({img,name,age}) {
  return(
   <>
     {/* <h1>hiii</h1>
     <div className="bg-amber-900 border border-amber-300"> say</div>
     <div className="flex  justify-center gap-1.5">
        <p className="border w-20 p-2 m-1">sayali</p>
        <p>sam</p>
        <p> khus</p>
     </div> */}

     <header className="flex justify-between items-center px-6 py-3 border shadow-md">

  <img src={img2} alt="Logo" className="h-10 w-auto" />

  {/* Navigation */}
  <nav>
    {/* hidden */}
    <ul className="block lg:flex gap-6  font-medium">
      <li className="cursor-pointer hover:text-blue-600">Home</li>
      <li className="cursor-pointer hover:text-blue-600">Service</li>
      <li className="cursor-pointer hover:text-blue-600">Contact</li>
    </ul>
  </nav>

 
  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ">
    Book
  </button>
</header>

<main>
  <section className="w-full h-screen border bg-[url(https://tse1.mm.bing.net/th/id/OIP.ixAaZiVPjFqIDfeiAYrTpgHaC1?pid=Api&P=0&h=180)] bg-no-repeat bg-contain"></section>
</main>

    </>
  )
}

export default App