const experiences = [
  {
    image: "/purolator.jpg",
    company: "Purolator",
    role: "Product Manager Intern",
    date: "2025",
  },  
{
    image: "/tdbank.svg",
    company: "TD Bank",
    role: "Product Designer Intern",
    date: "2024",
  },
{
    image: "/openlane.png",
    company: "Openlane",
    role: "Product Manager Intern",
    date: "2023",
  },
{
    image: "/canada.jpeg",
    company: "Department of National Defence",
    role: "Product Manager Intern",
    date: "2022",
  },
{
    image: "/tdbank.svg",
    company: "TD Bank",
    role: "Business Systems Analyst Intern",
    date: "2022",
  },
];

export default function WorkHistoryTable() {
  return (
    <section className="w-full">
      {/* Title */}

      {/* Header */}
      <div className="hidden md:grid grid-cols-12 gap-6 pb-3 text-xs uppercase tracking-wide text-neutral-500">
        <div className="col-span-2"></div>
        <div className="col-span-4"></div>
        <div className="col-span-4"></div>
        <div className="col-span-2 text-right"></div>
      </div>

      {/* Rows */}
      <div className="">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-3 px-2 rounded-2xl hover:bg-neutral-50 transition"
          >
            {/* Logo */}
            <div className="col-span-2 flex items-center">
              <img
                src={exp.image}
                alt={exp.company}
                className="h-11 w-11 rounded-xl border border-neutral-200 object-cover bg-white"
              />
            </div>

            {/* Company Name */}
            <div className="col-span-4 flex items-center">
              <p className="text-sm text-neutral-900">
                {exp.company}
              </p>
            </div>

            {/* Role */}
            <div className="col-span-4 flex items-center">
              <p className="text-sm text-neutral-600">{exp.role}</p>
            </div>

            {/* Date */}
            <div className="col-span-2 flex md:justify-end items-center">
              <span className="text-xs font-medium text-neutral-600 px-3 py-1 rounded-full border border-neutral-200 bg-white whitespace-nowrap">
                {exp.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
