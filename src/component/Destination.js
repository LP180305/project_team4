import Bay1 from "../assets/Vivonne_Bay_1.jpg";
import Bay2 from "../assets/vivonne_bay_2.jpg";
import White1 from "../assets/White_1.jpg";
import White2 from "../assets/white_2.jpg";
import Mindil1 from "../assets/Mindil_1.jpg";
import Mindil2 from "../assets/Mindil_2.jpg";
import "./css/DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Beaches</h1>
      
      <DestinationData
        className="first-des"
        heading="VIVONNE BAY BEACHVIVONNE BAY BEACH"
        text="South Australia’s Kangaroo Island is enveloped by picture-perfect
            beaches, with Vivonne Bay Beach often dubbed the most beautiful.
            There’s not a lot around this beach – but that’s what makes it so
            special. Picture an immaculate stretch of sand, crystal-clear waters
            home to playful seals and dolphins, and miles of unspoiled bush
            known as the Vivonne Bay Conservation Park."
        img1={Bay1}
        img2={Bay2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="WHITEHAVEN BEACH"
        text="Perhaps the most famous of Queensland’s spectacular beaches is Whitehaven, and it’s no mystery why.
         Located in the breathtaking Whitsunday Islands, the sand seems impossibly white as it swirls together with turquoise water. 
         Visit the beach during a variety of Whitsunday cruises, or stay on Hamilton Island and take the 30-minute boat ride."
        img1={White1}
        img2={White2}
      />

      <DestinationData
        className="first-des"
        heading="MINDIL BEACH"
        text="Mindil Beach, located in the Northern Territory’s Darwin, is much more than just a beach. 
        Swimming is not recommended, but the beach festivities more than make up for it. 
        There’s always something going on – whether it’s fun runs, festivals or the beloved Mindil Beach Sunset Markets, where you’ll find dozens of sizzling food stalls."
        img1={Mindil1}
        img2={Mindil2}
      />
    </div>
  );
};

export default Destination;
