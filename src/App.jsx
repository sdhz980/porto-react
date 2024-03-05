import Banner from './components/Banner'
import Content from './components/Content'
import Navbar from './components/Navbar'
import Skill from './components/Skill'

function App() {
  return (
    <>
      <div>
        <Navbar/>
            <section>
                <Banner/>
            </section>

            <section>
                <Content/>
            </section>
            <section>
                <Skill/>
            </section>

        <section>

        </section>

      </div>
    </>
  )
}

export default App
