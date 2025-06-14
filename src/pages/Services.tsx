import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Bot, Zap, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-10 h-10 mb-4 text-primary" />,
    title: "Custom AI Chatbots",
    description: "We build and deploy intelligent chatbots that provide instant support, qualify leads, and engage customers 24/7.",
  },
  {
    icon: <Zap className="w-10 h-10 mb-4 text-primary" />,
    title: "Workflow Automation",
    description: "Eliminate repetitive manual tasks. We automate your business processes, from data entry to complex approval chains.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 mb-4 text-primary" />,
    title: "Data Analysis Automation",
    description: "Turn raw data into actionable insights automatically. We create systems that analyze data and generate reports in real-time.",
  },
];

const Services = () => {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl fade-in-up">
          Our Services
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up" style={{ animationDelay: '0.2s' }}>
          We provide end-to-end AI automation solutions tailored to your specific business needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col text-center items-center fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
            <CardHeader>
              {service.icon}
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link to="/#contact">Get a Quote</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
