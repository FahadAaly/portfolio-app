import crowdforimage from "../../public/images/CrowdForImpactOne.png";
import deepsight from "../../public/images/Deepsight.png";
import fizz from "../../public/images/Fizz.jpeg";
import liiteri from "../../public/images/Liiteri.jpeg";

const projects = [
  {
    name: "CrowdforImpact Donation Platform",
    link: "https://crowdforimpact.com/",
    tech: "Java, React, WebSockets, Stripe",
    desc: "Built real-time donation dashboard with React and Java using WebSockets. Integrated Stripe payment gateway with secure Java APIs, enabling seamless international transactions. ",
    image: crowdforimage,
  },
  {
    name: "Liiteri Equipment Sharing",
    link: "https://liiteri.net/fi",
    tech: "Angular, SCSS, Laravel",
    desc: "Created frontend and multilingual backend logic handling 10K+ transactions using React.js, Node.js and Typescript.",
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
    desc: "Improved accessibility and UX with custom components. Implement web sockets for real time update features for messaging application. ",
    image: fizz,
  },
];

export default projects;
