import { About } from "./components/About"
import { Benefits } from "./components/Benefits"
import { CallToAction } from "./components/CallToAction"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Methodology } from "./components/Methodology"
import { Plans } from "./components/Plans"
import { Process } from "./components/Process"
import { Results } from "./components/Results"
import { UserProblem } from "./components/UserProblem"

function App() {

  return (
    <div className="min-h-[200vh]">
      <Hero></Hero>
      <Results></Results>
      <UserProblem></UserProblem>
      <Methodology></Methodology>
      <Process></Process>
      <Benefits></Benefits>
      <Plans></Plans>
      <About></About>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  )
}

export default App
