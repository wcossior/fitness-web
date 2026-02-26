import { About } from "./components/About/About"
import { NotForYou } from "./components/NotForYou/NotForYou"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero/Hero"
import { Methodology } from "./components/Methodology/Methodology"
import { Plans } from "./components/Plans/Plans"
import { Features } from "./components/Features/Features"
import { Results } from "./components/Results/Results"
import { UserProblem } from "./components/UserProblem/UserProblem"
import { Navbar } from "./components/Navbar/Navbar"
import { Faq } from "./components/FAQ/Faq"

function App() {

  return (
    <div className="relative">
      <Navbar></Navbar>
      <Hero></Hero>
      <UserProblem></UserProblem>
      <About></About>
      <Methodology></Methodology>
      <Features></Features>
      <Results></Results>
      <NotForYou></NotForYou>
      <Plans></Plans>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  )
}

export default App
