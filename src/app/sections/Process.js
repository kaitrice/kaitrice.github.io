import "./Process.css";

function Step({ index, name, description, example }) {
  return (
    <div className="step">
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
      <div>
        <h2 className="section-header">My Process</h2>
        <h3>How I do it</h3>
      </div>
      
      <h4>Design</h4>
      <section>
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
      
      <h4>Development</h4>
      <section>
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
    description: "Identify the problem and gain a clear understanding of the project's scope and user needs.",
    example: <div>

    </div>,
  },
  {
    num: '02',
    name: "Exploration & Research",
    description: "Investigate other solutions, trends, and user behavior for innovative design solutions for the specific problem.",
    example: <div>

    </div>,
  },
  {
    num: '03',
    name: "Sketch & Prototype",
    description: "Translate ideas into visual concepts and interactive prototypes to draft the design solution.",
    example: <div>

    </div>,
  },
  {
    num: '04',
    name: "Review & Evaluate",
    description: "Iteratively assess design effectiveness and refine based on feedback.",
    example: <div>

    </div>,
  },
]

const development = [
  {
    num: '01',
    name: "Planning & Specifications",
    description: "Allign with client on target needs and roadmap.",
    example: <div>

    </div>,
  },
  {
    num: '02',
    name: "Design Requirements",
    description: "Map out technical architecture and workflows that will guide development step.",
    example: <div>

    </div>,
  },
  {
    num: '03',
    name: "Development",
    description: "Build the product iteratively, using best practices and agile methodologies.",
    example: <div>

    </div>,
  },
  {
    num: '04',
    name: "Testing & Quality Assurance",
    description: "Verify that the product meets requirements and is free of defects.",
    example: <div>

    </div>,
  },
  {
    num: '05',
    name: "Deployment & Maintence",
    description: "Launch the product and ensure ongoing support and improvements.",
    example: <div>

    </div>,
  },
  {
    num: '06',
    name: "Feedback",
    description: "Collect insights from users to inform continuous improvements.",
    example: <div>

    </div>,
  },
]
