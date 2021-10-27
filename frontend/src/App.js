import BannerTop from "./components/BannerTop/BannerTop";
import AddArgonauts from "./components/addArgonauts/AddArgonauts";
import GetArgonauts from "./components/getArgonauts/GetArgonauts";
import BannerBot from "./components/bannerBot/BannerBot";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState();

  return (
    <div className="App">
      <BannerTop />
      <AddArgonauts refresh={refresh} setRefresh={setRefresh}/>
      <GetArgonauts refresh={refresh}/>
      <BannerBot />
    </div>
  );
}

export default App;
