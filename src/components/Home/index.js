import React from "react";
import CustomNav from "../CustomNav";
import { userData } from "../../helpers";
import Landing from "./Landing";
import About from "./About";
import Upload from "./Upload";
import PlantCareTips from "./PlantCareTips";
import Subscription from "./Subscription";
import Footer from "./Footer";

const Home = () => {
  const { username } = userData();
  return (
    <div>
      <CustomNav />
      {/* <div className="home">
        <h2>Welcome {username}</h2>
      </div> */}

      <Landing/>
      <About/>
      <Upload/>
      <PlantCareTips/>
      <Subscription/>
      <Footer/>
    </div>
  );
};

export default Home;