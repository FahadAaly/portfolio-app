export function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React.js",
    "Angular",
    "Vue.js",
    "Node.js",
    "PHP",
    "Laravel",
    "HTML5",
    "Tailwind CSS",
    "MySQL",
    "Docker",
    "Git",
    "CI/CD",
  ];
  return (
    <section id="skills" className="bg-gray-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 p-4 rounded shadow hover:bg-cyan-600 hover:text-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
