import Charts from "./Charts";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <Charts />
      <div className="flex flex-col justify-center items-center mt-8 text-2xl md:text-lg">
        <span>Numbers of users are :</span>
        <span className="text-3xl text-lime-900 font-bold">{count}</span>
        <span> based on the table in the users page</span>
      </div>
    </>
  );
};

export default Home;
