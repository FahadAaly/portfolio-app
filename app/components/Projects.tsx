import Image from "next/image";
import crowdforimage from "../../public/images/CrowdForImpactOne.png";
import deepsight from "../../public/images/Deepsight.png";
import fizz from "../../public/images/Fizz.jpeg";
import liiteri from "../../public/images/Liiteri.jpeg";

export function Projects() {
  const projects = [
    {
      name: "CrowdforImpact Donation Platform",
      link: "https://crowdforimpact.com/",
      tech: "Java, React, WebSockets, Stripe",
      desc: "Built real-time dashboards and payment flow using Java + Stripe.",
      image: crowdforimage,
    },
    {
      name: "Liiteri Equipment Sharing",
      link: "https://liiteri.net/fi",
      tech: "Angular, SCSS, Laravel",
      desc: "Created frontend and multilingual backend logic handling 10K+ transactions.",
      image: liiteri,
    },
    {
      name: "Datadesk",
      link: "https://www.deepsight.de/",
      tech: "React, Python, TailwindCSS",
      desc: "Leverage self-learning and pre-trained AI models to rapidly anonymize, cleanse, and analyze your text data with precision and efficiency.",
      image: deepsight,
    },
    {
      name: "The FIZZ Housing Platform",
      link: "https://www.the-fizz.com/en/",
      tech: "React, NodeJS, TailwindCSS",
      desc: "Improved accessibility and UX with custom components.",
      image: fizz,
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-cyan-700"
            >
              <Image
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover rounded mb-4 group-hover:opacity-90 transition duration-300"
              />
              <h3 className="text-xl font-semibold text-cyan-300 mb-1">
                {p.name}
              </h3>
              <p className="text-sm text-gray-400 italic">{p.tech}</p>
              <p className="text-gray-200 mt-2 text-sm">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
