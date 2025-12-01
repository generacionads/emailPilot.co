import Advantages from './components/Advantages'
import Hero from './components/Hero'
import MetricsPill from './components/MetricsPill'
import Process from './components/Process'
import Cta from './components/Cta'
import Projects from "./components/Projects"
import Faq from "./components/Faq"
import RevenueChart from './components/RevenueChart'
import SuccessStory, { CaseStudyData } from './components/SuccessStory'
import Services from './components/Services'

// DATOS DEL CASO ÉXITO 1
const caseStudy1: CaseStudyData = {
  id: "automotive",
  sectionTitle: "It Started With One Call...",
  logo: { initials: "AL", bgColor: "bg-[#D64743]" },
  tag: "Automotive Lighting Brand",
  headline: <>+$170,000/ Month in <br className="hidden lg:block"/> Extra Revenue</>,
  description: "An automotive lighting brand was relying on outdated email flows and occasional campaigns. Before working with us they were short on time and struggling to keep up.",
  stats: [
    { label: "Increase", value: "384%" },
    { label: "Extra Revenue", value: "$170,000+" },
    { label: "Klaviyo Attributed", value: "55%" },
  ],
  resultsList: [
    "384% increase in monthly recurring revenue",
    "$170,000 extra revenue generated in one month",
    "From 30% -> 55% of their total revenue attributed to Email and SMS"
  ],
  visuals: {
    after: { amount: "$239,000+/ Month", description: "Fully revamped flows and engaging campaigns.", img: "/dashboard-after.jpg" },
    before: { amount: "$62k/ Month", description: "Relying on outdated email flows and occasional campaigns.", img: "/dashboard-before.jpg" }
  }
}

// DATOS DEL CASO ÉXITO 2
const caseStudy2: CaseStudyData = {
  id: "beauty",
  sectionTitle: "Scaling Without Ads...",
  logo: { initials: "SK", bgColor: "bg-purple-500" }, 
  tag: "Premium Skincare Brand",
  headline: <>Doubling LTV in <br className="hidden lg:block"/> 90 Days</>,
  description: "This skincare brand had great products but zero retention strategy. They were burning cash on ads to acquire customers who never bought again.",
  stats: [
    { label: "Retention Rate", value: "2.5x" },
    { label: "Email Revenue", value: "$85,000+" },
    { label: "Open Rate", value: "48%" },
  ],
  resultsList: [
    "Implemented 12 custom flows for different skin types",
    "Generated $85k in pure profit from existing list",
    "Reduced ad spend by 30% while maintaining growth"
  ],
  visuals: {
    after: { amount: "$145,000+/ Month", description: "Personalized routine flows based on quiz results.", img: "/dashboard-after.jpg" }, 
    before: { amount: "$45k/ Month", description: "Generic newsletters sent to everyone.", img: "/dashboard-before.jpg" }
  }
}

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 top-0 h-[120vh] w-full z-0 pointer-events-none">
        
        <div 
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(19, 51, 46, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(19, 51, 46, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
          }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col gap-0"></div>
      <Hero />
      <MetricsPill />
      <Process />
      <Advantages />
      <Cta 
        title="Choose the Smarter Way to Grow Your Store"
        description="Get actionable tips to boost your LTV, lower your CAC and make every dollar you spend on ads go further."
        buttonText="Book My Free Strategy Call"
      />
      <Projects />
      <Services />
      <SuccessStory data={caseStudy1} />
      <SuccessStory data={caseStudy2} />
      <RevenueChart />
      <Cta 
        title={<>Ready to Scale Your <br className="hidden md:block"/> Revenue Predictably?</>}
        description="Stop guessing and start growing. Let's build the retention system your brand deserves."
        buttonText="Let's Talk Growth"
      />
      <Faq />
    </main>
  )
}