import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const About = () => {
  const teamMembers = [
    {
      name: "Ninad",
      role: "Co-Founder & Technical Lead",
      description: "Car enthusiast with a passion for automotive software development.",
      picture: "",
    },
    {
      name: "Yug",
      role: "Co-Founder & Product Lead",
      description: "Car enthusiast with a passion for automotive software development.",
      picture: "",
    },
    {
      name: "Rhea",
      role: "Software Engineer",
      description: "CS Master's student at ASU.",
      picture: "",
    },
    {
      name: "Maia",
      role: "Software Engineer",
      description: "CS Master's student at ASU.",
      picture: "/maia.jpg",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="mb-4">About Drive Insight</h1>
        <p className="text-xl">Empowering drivers with knowledge, protecting their privacy</p>
      </div>

      {/* Our Story */}
      <section className="mb-16">
        <h2>Our Story</h2>
        <div className="gap-8 flex grid md:grid-cols-2">
          <div>
            <p className="mb-4">
              Drive Insight was born in 2024 from the shared passion of two car enthusiasts, Ninad and Yug. As graduates of Arizona State University, they combined their technical expertise with their love for automobiles to create something unique - an application that gives drivers deep insights into their driving behavior while maintaining absolute data privacy.
            </p>
            <p>
              The journey began with Ninad's prototype in Python two years ago, driven by a curiosity to understand fuel consumption during peak gas prices. This early experiment evolved into something much more ambitious.
            </p>
          </div>
          <div className='mt-5'>
            <Card>
              <CardContent className="p-6">
                <h3>"Educate, don't just enforce"</h3>
                <p className="italic">
                   - This principle guides everything we do at Drive Insight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="mb-16">
        <h2>The Problem We're Out to Solve</h2>
        <Card className='md:justify-center'>
            <CardContent className="p-6">
            
            <h3 className="mb-4">Industry Reality</h3>
              <ul className="space-y-3 ">
                <li>Big corporations selling user driving data to third parties</li>
                <li>Insurance companies using undisclosed scoring systems</li>
                <li>Limited scope of existing solutions (GPS speed only)</li>
              </ul>
        
              <h3 className="mb-4">Our Solution</h3>
              <ul className="space-y-3">
                <li>Complete data privacy - no cloud storage, you own your data</li>
                <li>Customizable scoring system aligned with your goals</li>
                <li>Comprehensive metrics including RPM and fuel usage</li>
              </ul>
           
            </CardContent>
        </Card>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-center">Meet Our Team</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          We're a dedicated team of automotive enthusiasts and technology experts working to revolutionize the driving experience.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-muted">
                <img
                  src={member.picture}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-2">{member.name}</h3>
              <p className="text-primary mb-2 font-semibold">{member.role}</p>
              <p className="text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Vision */}
      <section className="mb-16">
        <h2>The Road Ahead</h2>
        <Card>
            <CardContent className="p-6">
            <p className="mb-4">
                Drive Insight is at the forefront of incorporating AI technology to generate even deeper driving insights. We're committed to continuous innovation while maintaining our core values of privacy and user empowerment.
            </p>
            <p>
                Our vision extends beyond just data collection - we're building a platform that helps new drivers become safer and experienced drivers become better, all while keeping their data completely in their control.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2>Join Our Journey</h2>
        <p className="text-xl mb-8">
          Experience the future of driving insights while maintaining complete control over your data.
        </p>
        <Link href="/install">
        <Button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
          Get Started
        </Button>
        </Link>
      </section>
    </div>
  );
};

export default About;