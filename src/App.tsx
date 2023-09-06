import PlayerInfo from "./components/PlayerInfo";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="bg-violet-600 h-screen flex flex-col gap-8 sm:gap-6 relative">
      <section className="tracking-widest flex justify-between text-white font-bold px-10 pt-10 items-center">
        <button
          className=" w-4/12 py-2 bg-violet-700 rounded-3xl cursor-pointer hover:scale-105 sm:w-24
        hover:transition-transform delay-100 ease-in-out hover:shadow-inner"
          onClick={() => navigate("/menu")}
        >
          MENU
        </button>
        <img
          src="src/assets/images/logo.svg"
          alt="menu logo consisting of four dots"
          className="w-2/12 self-center	sm:w-1/12"
        />
        <button
          className="w-4/12 py-2 bg-violet-700 rounded-3xl cursor-pointer hover:scale-105
        hover:transition-transform delay-100 ease-in-out hover:shadow-inner self-center sm:w-24"
        >
          RESTART
        </button>
      </section>
      <div className="flex flex-col gap-8 sm:gap-6 sm:grid ">
        <section className="flex gap-5 justify-center px-10">
          <PlayerInfo player={"PLAYER 1"} />
          <PlayerInfo player={"PLAYER 2"} />
        </section>
        <section className=" relative w-full">
          <img
            src="src/assets/images/board-layer-white-small.svg"
            alt="empty connect four board"
            className="border-b-8 border-t-2 border-black outline-black	 rounded-[36px] ml-auto mr-auto w-9/12 z-20 relative"
          />
          <div className="relative z-20 w-full">
            <img
              src="src/assets/images/turn-background-red.svg"
              alt="house-shaped icon with a timer"
              className="absolute left-1/2 transform -translate-x-1/2 -bottom-36 "
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 absolute text-white font-bold top-5 text-center whitespace-nowrap">
              <p>PLAYER 1'S TURN</p>
              <p className="text-6xl">15s</p>
            </div>
          </div>
          <div className=" h-96 w-full bg-violet-800 rounded-t-[70px] absolute left-0 -bottom-[350px] z-10"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
