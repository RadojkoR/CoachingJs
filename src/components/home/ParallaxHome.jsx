import Button from "../layout/Button"

function ParallaxHome() {
  return (
    <section className="flex items-center justify-center h-[600px] parallaxHomeContainer">
      <article className="md:w-8/12 h-3/6 bg-white flex flex-col justify-center">
        <h1 className="text-xl sm:text-3xl md:text-4xl mb-10 text-center px-6">If you're not sure where to start, let's talk.</h1>
        <Button to="/pageNotFound" text="Book an Intro Call" bgColor="slate" textColor="gray" addClass="mx-auto"/>
      </article>
    </section>
  )
}

export default ParallaxHome