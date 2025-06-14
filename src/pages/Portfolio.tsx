import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    client: "Innovate Inc.",
    problem: "Customer support team was overwhelmed with repetitive queries, leading to slow response times and burnout.",
    solution: "Developed and deployed a custom AI chatbot trained on their knowledge base. The bot now handles 80% of initial customer inquiries instantly, 24/7.",
    results: "Reduced average response time by 95%. Saved 40+ hours of manual work per week. Increased customer satisfaction by 30%.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    client: "MarketBoost",
    problem: "The sales team spent too much time on manual data entry and lead qualification, taking focus away from closing deals.",
    solution: "Implemented a workflow automation system that captures leads from various sources, enriches data, qualifies them based on predefined criteria, and assigns them to the right salesperson automatically.",
    results: "Increased sales team efficiency by 40%. Shortened the sales cycle by 15%. Boosted qualified leads in the pipeline by 25%.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    client: "DataDriven Co.",
    problem: "Struggled to analyze large datasets from marketing campaigns quickly, leading to missed opportunities for optimization.",
    solution: "Created a data analysis automation tool that processes raw data in real-time, generates insightful reports, and visualizes key performance indicators on a live dashboard.",
    results: "Enabled data-driven decisions in minutes instead of days. Improved marketing ROI by 20% through rapid campaign adjustments.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    client: "Synergy Corp",
    problem: "Complex internal approval processes for documents and expenses were causing significant delays and administrative overhead.",
    solution: "Designed an automated workflow that routes documents for approval based on custom rules, sends reminders, and logs every step for full transparency.",
    results: "Reduced document approval time from days to hours. Cut administrative overhead by 50%. Eliminated manual follow-ups.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Portfolio = () => {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl fade-in-up">
          Case Studies
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up" style={{ animationDelay: '0.2s' }}>
          See how our AI automation solutions deliver real, quantifiable results for our clients.
        </p>
      </div>
      <div className="grid gap-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="w-full overflow-hidden grid md:grid-cols-2 items-center fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
            <img
              src={study.image}
              alt={`Case study for ${study.client}`}
              className="w-full h-full object-cover aspect-video md:aspect-auto"
            />
            <div className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl">{study.client}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <div>
                  <h3 className="font-semibold">The Problem</h3>
                  <p className="text-gray-500 dark:text-gray-400">{study.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Our Solution</h3>
                  <p className="text-gray-500 dark:text-gray-400">{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold">The Results</h3>
                  <p className="text-gray-500 dark:text-gray-400">{study.results}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link to="/#contact">Discuss Your Project</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
