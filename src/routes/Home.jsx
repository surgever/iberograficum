import IME from "@/components/IME"
import Plomo from "@/components/Plomo"

const Home = props => {
  
  return (
    <div className="todos">
        <IME />
        <Plomo code="V.13.01" epiData={props.epiData} epiDB={props.epiDB} />
      </div>
  );
};
export default Home;
