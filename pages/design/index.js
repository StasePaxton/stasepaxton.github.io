import Link from 'next/link'

export default function Design() {
  return (
    <>
      <div className="container mx-auto">
        <span className="text-6xl font-extrabold">Design</span>

        <section>
          <span className="text-5xl font-extrabold">Case Studies</span>

          <div className="grid grid-cols-3 gap-5 pt-6">
            <Link href="/design/life-snapshot"><a><img src="/img/thumbnails/life-snapshot.png" className="border-2 border-border-gray" /></a></Link>
            <Link href="/design/good-deeds"><a><img src="/img/thumbnails/good-deeds.png" className="border-2 border-border-gray" /></a></Link>
            <Link href="/design/vente"><a><img src="/img/thumbnails/vente.png" className="border-2 border-border-gray" /></a></Link>
          </div>
        </section>
      </div>
    </>
  )
}
