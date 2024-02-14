import "./App.scss";
import AboutRaymond from "./Components/About-Raymond/About-Raymond";
import OurValues from "./Components/Our-Values/Our-Values";
import TheJourney from "./Components/The-Journey/The-Journey";
function App() {
  return (
    <div className="App">
      <AboutRaymond/>
      <TheJourney/>
      <OurValues/>
    </div>
  );
}

export default App;
