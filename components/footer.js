export default function Navigation() {
  return (
    <footer className="pt-10 pb-4 bg-white-smoke">
      <div className="container mx-auto">
        <div className="flex">
          <span className="w-8/12 font-thin text-xl"></span>
          <span className="w-2/12 font-thin text-xl"><a href="mailto:stase@stasepaxton.com">Email</a></span>
          <span className="w-2/12 font-thin text-xl"><a href="https://www.linkedin.com/in/stase-paxton-7b24b110a/">LinkedIn</a></span>
        </div>

        <div className="flex mb-6">
          <span className="w-8/12 font-thin text-xl"></span>
          <span className="w-2/12 font-thin text-xl"><a href="/pdfs/resume.pdf" download="stase-paxton.pdf">Resume</a></span>
          <span className="w-2/12 font-thin text-xl"><a href="https://www.instagram.com/socialmanickin/">Instagram</a></span>
        </div>

        <div className="flex">
          <span className="w-5/12 font-thin text-xl">Copyright &#169; 2020 Stase Paxton</span>
          <span className="w-7/12 font-thin text-xl"><a href="https://github.com/stasepaxton/stasepaxton.github.io">Coded with Love</a></span>
        </div>
      </div>
    </footer>
  )
}
