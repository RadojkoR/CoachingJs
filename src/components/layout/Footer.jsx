import { FaLinkedinIn, FaInstagram, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between relative inset-x-0  h-80 bg-yello-300 bg-slate-200">
      <section className="mt-10 flex">
        <a
          className="mr-5 text-2xl text-center"
          href="https://www.linkedin.com"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          className=" text-2xl text-center"
          href="https://www.instagram.com"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </section>
      <section>
        <p className="text-xl font-bold">Coaching</p>
      </section>
      <p className="text-xl">Address</p>
      <section className="mb-10 flex items-center">
        <FaPhone className="mr-3 text-xl" />
        <a className="text-xl" href="tel:123456789">
          +1 234 567 8900
        </a>
      </section>

      <section className="flex copyRightContainer">
        <p className="mb-8">
          Copyright &copy; 2024 Coaching - All Rights Reserved.
        </p>
        <a className="mb-8 absolute right-5 text-sm poweredByFooter" href="https://radoyko.com/" target="_blank">
          Powered by Radoyko.com
        </a>
      </section>
    </footer>
  )
}

export default Footer