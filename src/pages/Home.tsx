import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, TrendingUp, BarChart3, Zap } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Lead Generation",
      description: "Automatically identify and find high-quality leads, filling your pipeline without the manual effort."
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Automated Outreach",
      description: "Deploy intelligent campaigns that engage prospects across multiple channels, starting conversations at scale."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Lead Nurturing",
      description: "Create automated, personalized journeys that build relationships and guide prospects toward conversion."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Custom Workflows",
      description: "We analyze your backend processes and build tailor-made automation systems to boost efficiency, reduce costs, and power your growth."
    }
  ];

  const testimonials = [
    {
      quote: "PGP Systems automated our workflow and saved us 20 hours a week. Game-changing.",
      name: "Jane Doe",
      title: "CEO, TechCorp",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      quote: "The custom AI chatbot they built for us increased our lead generation by 40%.",
      name: "John Smith",
      title: "Marketing Head, Innovate Ltd.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      quote: "Unbelievable efficiency gains. Their data analysis automation is a must-have.",
      name: "Emily White",
      title: "COO, DataDriven Inc.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const portfolio = [
    {
      title: "AI-Powered Customer Support",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Automated Sales Funnel",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Real-time Data Analytics",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Workflow Process Optimization",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-28 flex items-center justify-center text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center items-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-50 fade-in-up">
              Stop Wasting Time. <br /> Start Automating with AI.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-base md:text-lg fade-in-up" style={{ animationDelay: '0.2s' }}>
              We design and implement automation to handle your repetitive tasks so you can focus on scaling your business.
            </p>
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                asChild
                className="h-16 px-12 text-lg font-semibold transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/#contact">Get Your Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-8 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our automation systems are designed to elevate your business operations and drive growth.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="grid gap-4 text-center fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="flex justify-center items-center">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl fade-in-up">
              Our Work in Action
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-base md:text-lg mt-4 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore some of the custom solutions we've built for our clients.
            </p>
          </div>
          <div className="mt-12">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolio.map((item, index) => (
                  <Link to="/portfolio" key={index} className="group block fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                    <Card className="overflow-hidden h-full transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                      <img src={item.image} alt={item.title} className="aspect-video object-cover w-full" />
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">View All Past Projects</Link>
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl fade-in-up">
            What Our Clients Say
          </h2>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <CardContent className="p-6">
                  <blockquote className="text-lg font-medium">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-4 pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="w-full py-8 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight fade-in-up">
              Ready to Automate Your Success?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Let's talk. Fill out the form below, and we'll schedule a free consultation to discuss your automation needs.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <form className="grid gap-4">
              <Input type="text" placeholder="Name" className="max-w-lg" />
              <Input type="email" placeholder="Email" className="max-w-lg" />
              <Textarea placeholder="How can we help you?" className="max-w-lg" />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
