export default function Design() {
  return(
    <>
      <section className="bg-white pt-8">
        <div className="container mx-auto">
          <p className="text-6xl font-extrabold">Design</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto">
          <p className="text-5xl font-extrabold">Case Studies</p>

          <div className="grid grid-cols-12 gap-5 pt-8">
            <div className="col-span-4 bg-gray-300">
              Life Snapshot
            </div>
            <div className="col-span-4 bg-gray-300">
              Good Deeds
            </div>
            <div className="col-span-4 bg-gray-300">
              Vente
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
