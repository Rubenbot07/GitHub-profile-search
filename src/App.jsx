

function App() {

  return (
    <>
      <main className=''>
        <section className='bg-hero-image h-72 bg-cover bg-center pt-6'>
          <div className="mx-auto  flex bg-background items-center gap-2 p-4 w-[550px] rounded-lg">
            <span>🔍</span>
            <input type="search" placeholder="username" className="bg-transparent w-64 placeholder-text-secondary outline-none font-semibold text-lg text-text-secondary"/>
          </div>
        </section>
        <section className='bg-background'>content</section>
      </main>
    </>
  )
}

export default App
