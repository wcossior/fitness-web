import { About } from "./components/About/About"
import { CallToAction } from "./components/CallToAction"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero/Hero"
import { Methodology } from "./components/Methodology/Methodology"
import { Plans } from "./components/Plans/Plans"
import { Benefits } from "./components/Benefits/Benefits"
import { Results } from "./components/Results/Results"
import { UserProblem } from "./components/UserProblem/UserProblem"
import { Navbar } from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="relative">
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <Results></Results> */}
      <UserProblem></UserProblem>
      <Methodology></Methodology>
      <Benefits></Benefits>
      <Plans></Plans>
      <About></About>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  )
}

export default App
