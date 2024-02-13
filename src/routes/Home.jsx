import IME from "@/components/IME"
import Plomo from "@/components/Plomo"

const Home = props => {
  
  return (
    <div className="todos">
        <IME />
        <Plomo code="GI.15.04" epiData={props.epiData} />
      </div>
  );
};
export default Home;
