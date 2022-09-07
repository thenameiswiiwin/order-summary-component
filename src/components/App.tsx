import Hero from '../assets/images/illustration-hero.svg'
import Music from '../assets/images/icon-music.svg'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black bg-bgMobile bg-contain bg-no-repeat font-redHat md:bg-bgDesktop md:bg-top">
      <div className="mx-5 max-w-[375px] space-y-9 overflow-hidden rounded-3xl bg-white">
        <img src={Hero} alt="hero" />
        <section className="mx-7 flex flex-col gap-5 pb-7 text-center">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <p className="px-3 text-sm font-medium leading-relaxed text-gray-400">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex items-center justify-around rounded-xl bg-veryPaleBlue px-2 py-4">
            <img src={Music} alt="music logo" />
            <span className="pr-8 text-sm leading-relaxed">
              <h4 className="font-bold">Annual Plan</h4>
              <p className="font-medium text-gray-400">$59.99/year</p>
            </span>
            <a
              className="text-sm font-bold text-brightBlue underline hover:no-underline hover:opacity-75"
              href="#"
            >
              Change
            </a>
          </div>
          <button className="rounded-xl bg-brightBlue py-3.5 font-medium text-white shadow-xl shadow-paleBlue hover:opacity-75">
            Proceed to Payment
          </button>
          <button className="font-bold text-gray-500 hover:text-black">
            Cancel Order
          </button>
        </section>
      </div>
    </main>
  )
}

export default App
