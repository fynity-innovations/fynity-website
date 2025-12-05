import WorkshopCard from "@/components/workshop/workshop-card"

type Workshop = {
  title: string
  date: string
  time: string
  mode: string
  mentor: string
}

export default function WorkshopList({
  title,
  workshops,
}: {
  title: string
  workshops: Workshop[]
}) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold mb-8 text-center sm:text-left">
        {title}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={index} workshop={workshop} />
        ))}
      </div>
    </section>
  )
}
