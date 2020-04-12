import React from "react";
import SideMenu from "./../SideBarComponent";
import Card from "./../CardComponent";
import card2 from "../../assets/imgs/cardImage1.PNG";
import card3 from "../../assets/imgs/imageCard3.jpg";
import DealsCard from "../../Components/DealsCard";
import FeaturedDeals from "../../Components/FeaturedDeals";
import CoronaMessage from "../../assets/imgs/coronaMessage.png";
import coronaMessage2 from "../../assets/imgs/coronaMessage2.png";

import "./style.scss";
const Card1Details = {
  Header: "Day Pass Combo incl. Rental Equipment",
  hoverText: "Day Pass Combo to Snowplanet incl. Rental Equipment",
  Secondary: "Snowplanet",
  third: "Silverdale",
  bought: "394",
  sale: "$39",
  original: "$113"
};

const Card2Details = {
  Header: "Jetts Gym Membership - 57 Locations",
  hoverText:
    "3-Month Membership incl. 24/7 Access Pass - Option for 12-Month Membership & Available at 57 Locations Nationwide",
  Secondary: "Jetts New Zealand",
  third: "",
  bought: "512",
  sale: " $129",
  original: "$204.40"
};
function Home() {
  return (
    <div className="Home">
      <div className='home-row'>
        <img src={CoronaMessage} alt="CoronaMessage" className='message-corona' />

        <img src={coronaMessage2} alt="CoronaMessage" className='message-corona-2' />
      </div>
      <div className='home-row'>
        <SideMenu />
        <Card image={card2} details={Card1Details} />
        <Card image={card3} details={Card2Details} />
      </div>

      <div className='home-row'>
        <DealsCard />
      </div>
      <div className='home-row'>
        <FeaturedDeals />
      </div>
    </div>
  );
}

export default Home;
