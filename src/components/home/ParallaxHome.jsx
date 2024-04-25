

function ParallaxHome() {
  return (
    <section className="flex items-center justify-center h-[600px] parallaxHomeContainer">
      <article className="w-6/12 h-3/6 bg-white flex flex-col justify-center">
        <h1 className="text-4xl mb-10 text-center">If you're not sure where to start, let's talk.</h1>
        <button className="bg-slate-700 text-gray-200 w-[300px] mx-auto text-xl py-5 px-10">
          Book an Intro Call
        </button>
      </article>
    </section>
  )
}

export default ParallaxHome