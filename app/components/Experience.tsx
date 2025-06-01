export function Experience() {
  const jobs = [
    {
      role: "Software Developer (Working Student)",
      company: "DeepSight, Germany",
      period: "Feb 2023 – Nov 2024",
      details: [
        "Built scalable React + TypeScript interfaces using TailwindCSS.",
        "Developed SQL and FastAPI modules improving throughput by 25%.",
        "Practiced GitHub version control, Agile, and CI/CD workflows.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Progstream, Pakistan",
      period: "Feb 2019 – Nov 2022",
      details: [
        "Created React and Vue dashboards with REST and WebSockets.",
        "Integrated Kubernetes + Docker in CI/CD flows.",
        "Led sub-team of 4 devs under Agile methodology.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-800 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Experience
        </h2>
        <div className="space-y-10">
          {jobs.map((job, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-cyan-300">
                {job.role}
              </h3>
              <p className="text-md text-gray-400">
                {job.company} | {job.period}
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-300">
                {job.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
