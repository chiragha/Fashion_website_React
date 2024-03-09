import Blogs from "./components/Blogs"
import Category from "./components/Category"
import Collection from "./components/Collection"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"



const App = () => {
  return (
    <main>
     <Navbar />
     <Hero />
     <Category />
     <Feature />
     <Collection />
     <Blogs />
     <Footer />
    </main>
  )
}

export default App
