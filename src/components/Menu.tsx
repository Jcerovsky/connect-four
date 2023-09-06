import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 p-10 h-screen bg-violet-600 items-center justify-center ">
      <img
        src="src/assets/images/logo.svg"
        alt="menu logo consisting of four dots"
        className="w-2/12 mb-5 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div
        className="text-2xl text-white font-bold flex justify-between items-center border-2 border-b-8
        border-black rounded-3xl bg-pink-500 w-full p-4 hover:scale-105 transition-transform hover:delay-200 ease-in-out cursor-pointer"
      >
        <p>PLAYER VS CPU</p>
        <img src="src/assets/images/player-vs-cpu.svg" />
      </div>
      <div
        className="text-2xl font-bold flex justify-between items-center border-2 border-b-8
        border-black rounded-3xl bg-yellow-500 w-full p-4 hover:scale-105 transition-transform hover:delay-200 ease-in-out cursor-pointer"
      >
        <p>PLAYER VS PLAYER</p>
        <img src="src/assets/images/player-vs-player.svg" />
      </div>
      <div
        className="text-2xl font-bold flex justify-between items-center border-2 border-b-8
        border-black rounded-3xl bg-white w-full p-4 py-5 hover:scale-105 transition-transform hover:delay-200 ease-in-out cursor-pointer"
      >
        <p>GAME RULES</p>
      </div>
    </div>
  );
}

export default Menu;
