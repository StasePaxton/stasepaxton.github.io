import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <div className="grid grid-cols-12 grid-rows-5 grid-flow-col gap-5">
          <div className="col-span-4 row-span-1">
            <strong className="text-5xl">About Me</strong>
          </div>

          <div className="col-span-6 row-span-4">
            <p className="mb-4">I’ve worn many different hats since I started my career. From retail to freelance, I have had a wide variety of experiences and tales to tell. However, one thing has been constant; <strong>I enjoy helping people, and being a part of their stories.</strong></p>
            <p>Nowadays, the hat I’m wearing is UI Designer. Design to me should be an invisible hand that helps and guides the user to find what they are looking for with ease. Interfaces in particular are direct interactions with the user and their experience with a product. <strong>And “experience” to me is just another word for “story”.</strong></p>
          </div>

          <div className="col-start-7 col-span-6 row-span-5">
            <img src="/img/Portrait2x.png" className="float-right" style={{maxHeight: 410 + 'px'}} />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-5 pt-6">
          <div className="col-span-1 text-3xl text-gold underline"><strong><Link href="mailto:stase@stasepaxton.com"><a>Email Me</a></Link></strong></div>
          <div className="col-start-2 col-span-5 text-3xl text-gold underline"><strong><a href="/pdfs/resume.pdf" download="stase-paxton.pdf">Download Resume</a></strong></div>
        </div>
      </div>
    </>
  )
}
