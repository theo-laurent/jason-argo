import BannerTop from "./components/BannerTop/BannerTop";
import AddArgonauts from "./components/addArgonauts/AddArgonauts";
import GetArgonauts from "./components/getArgonauts/GetArgonauts";
import BannerBot from "./components/bannerBot/BannerBot";

function App() {
  return (
    <div className="App">
      <BannerTop />
      <AddArgonauts />
      <GetArgonauts />
      <BannerBot />
    </div>
  );
}

export default App;
