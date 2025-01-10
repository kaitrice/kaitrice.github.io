import "./Process.css";

function Step({ index, name, description, example }) {
  return (
    <div>
      <h5>{index}</h5>
      <h6>{name}</h6>
      <p>{description}</p>
      {example}
    </div>
  )
}

export default function Process() {
  return (
    <div id="process">
      <section>
        <h2 className="section-header">My Process</h2>
        <h3>How I do it</h3>
      </section>
      <section>
        <h4>Design</h4>
        {design.map((item, index) => (
          <Step 
            key={index} 
            index={item.num}
            name={item.name}
            description={item.description}
            example={item.example}
          />
        ))}
      </section>
      
      <section>
        <h4>Development</h4>
        {development.map((item, index) => (
          <Step 
            key={index} 
            index={item.num}
            name={item.name}
            description={item.description}
            example={item.example}
          />
        ))}
      </section>
    </div>
  );
}

/* DATA */

const design = [
  {
    num: '01',
    name: "Define & Understand",
    description: "",
    example: <div>

    </div>,
  },
  {
    num: '02',
    name: "Exploration & Research",
    description: "",
    example: <div>

    </div>,
  },
  {
    num: '03',
    name: "Sketch & Prototype",
    description: "",
    example: <div>

    </div>,
  },
  {
    num: '04',
    name: "Review & Evaluate",
    description: "",
    example: <div>

    </div>,
  },
]

const development = [
  {
    num: '01',
    name: "Planning & Specifications",
    description: "Work with client to narrow target needs and create plan for delivery.",
    example: <div>

    </div>,
  },
  {
    num: '02',
    name: "Design Requirements",
    description: "Create diagrams to map out development structure.",
    example: <div>

    </div>,
  },
  {
    num: '03',
    name: "Development",
    description: "Build software, using frequent and rapid iterations.",
    example: <div>

    </div>,
  },
  {
    num: '04',
    name: "Testing & Quality Assurance",
    description: "Develop tests to ensure completion of requirements and is high quality.",
    example: <div>

    </div>,
  },
  {
    num: '05',
    name: "Deployment & Maintence",
    description: "",
    example: <div>

    </div>,
  },
  {
    num: '06',
    name: "Feedback",
    description: "",
    example: <div>

    </div>,
  },
]
