import Link from 'next/link'

export default function Design() {
  return (
    <>
      <div className="container mx-auto">
        <span className="text-6xl font-extrabold">Art</span>

        <section>
          <span className="text-5xl font-extrabold">Illustrations</span>

          <div className="grid grid-cols-3 gap-5 pt-6">
            <Link href="#"><a><img src="/img/artboards/2.png" className="border-2 border-border-gray" /></a></Link>
            <Link href="#"><a><img src="/img/artboards/1.png" className="border-2 border-border-gray" /></a></Link>
            <Link href="#"><a><img src="/img/artboards/0.png" className="border-2 border-border-gray" /></a></Link>
          </div>
        </section>
      </div>
    </>
  )
}
