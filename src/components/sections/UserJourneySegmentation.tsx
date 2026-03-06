  'use client'

  import { motion } from 'framer-motion'

  const framework = [
  {
  title: "Market Philosophy",
  desc:
  "Murivest focuses on structurally resilient segments of commercial real estate where long-term demographic and economic trends support tenant demand. Priority sectors include logistics, mixed-use retail nodes, and strategically located Grade A office assets."
  },

  {
  title: "Asset Selection",
  desc:
  "Investment opportunities are screened based on location durability, tenant covenant strength, transport connectivity, and long-term land scarcity. Preference is given to assets capable of generating stable income while offering operational value creation potential."
  },

  {
  title: "Underwriting Discipline",
  desc:
  "Each opportunity undergoes conservative underwriting assumptions including vacancy stress testing, lease rollover risk modelling, and capital expenditure forecasting. Acquisition decisions prioritise downside protection over speculative appreciation."
  },

  {
  title: "Capital Preservation",
  desc:
  "Murivest structures transactions using prudent leverage and long-term tenant strategies designed to preserve investor capital through market cycles. The objective is durable income rather than transaction velocity."
  },

  {
  title: "Exit Strategy",
  desc:
  "Investment exits are typically structured through institutional asset sales, portfolio recapitalisation, or income stabilisation followed by yield compression once capital markets strengthen."
  }
  ]

  export default function InvestmentFramework(){

  return(

  <section className="bg-[#FDFCFA] border-t border-[#E5E2DC]">

  <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-28">

  {/* Section Header */}

  <div className="max-w-3xl mb-20">

  <div className="flex items-center gap-3 mb-6">
  <div className="w-6 h-[1px] bg-[#8B7355]" />
  <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
  Investment Framework
  </p>
  </div>

  <h2 className="text-4xl md:text-5xl font-serif leading-[1.15] text-[#2C2C2C] mb-6">
  Disciplined Capital
  <span className="italic text-[#5A5A5A] font-light"> Deployment</span>
  </h2>

  <p className="text-[15px] leading-[1.9] text-[#5A5A5A] font-light">
  Murivest applies institutional investment principles to the acquisition and management of commercial real estate. 
  The objective is to generate stable income and long-term value through disciplined underwriting and prudent capital structures.
  </p>

  </div>

  {/* Framework Grid */}

  <div className="grid md:grid-cols-2 gap-x-20 gap-y-14">

  {framework.map((item, i)=>(
  <motion.div
  key={i}
  initial={{opacity:0, y:20}}
  whileInView={{opacity:1, y:0}}
  viewport={{once:true}}
  transition={{duration:0.6, delay:i*0.1}}
  >

  <h3 className="font-serif text-xl text-[#2C2C2C] mb-3">
  {item.title}
  </h3>

  <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
  {item.desc}
  </p>

  </motion.div>
  ))}

  </div>

  </div>

  </section>

  )

  }