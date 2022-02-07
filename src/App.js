import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
          <Topbar/>
          <div class="container">
              <Sidebar/>
              <div className="others">other page</div>
          </div>
    </div>
  );
}

export default App;
