import "./App.scss";
import AboutRaymond from "./Components/About-Raymond/About-Raymond";
import OurValues from "./Components/Our-Values/Our-Values";
import TheJourney from "./Components/The-Journey/The-Journey";
import OurMilestones from "./Components/ourmilestones/OurMilestones";
function App() {
  return (
    <div>
      <div className="App">
        <AboutRaymond />
      </div>
      <div className="App">
        <TheJourney />
      </div>
      <div>
        <OurMilestones />
      </div>
      <div className="App">
        <OurValues />
      </div>
    </div>
  );
}

export default App;
