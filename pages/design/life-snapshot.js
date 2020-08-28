export default function LifeSnapshot() {
  return(
    <>
      <section className="bg-life-snapshot-gray-200">
        <div className="container mx-auto pt-10 pb-6">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-11">
              <strong className="text-5xl text-life-snapshot-blue-800">Life Snapshot</strong>
              <p className="text-4xl text-life-snapshot-blue-200"><span className="font-semibold">Estase Planning Web Application</span> (Client Work)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-life-snapshot-gray-100">
        <div className="container mx-auto pt-20">
          <img src="/svg/life_spanshot/laptop_half.svg" />
        </div>
      </section>
    </>
  )
}
