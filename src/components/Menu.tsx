import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 p-10 h-screen items-center justify-center">
      <div className=" flex flex-col gap-3 sm:border-2 sm:border-black sm:border-b-8 sm:rounded-3xl sm:bg-violet-500 items-center justify-center p-6 ">
        <img
          src="src/assets/images/logo.svg"
          alt="menu logo consisting of four dots"
          className="w-18 mb-10 cursor-pointer hover:scale-105 transition-transform delay-100"
          onClick={() => navigate("/")}
        />
        <div
          className="text-2xl text-white font-bold flex justify-between items-center border-4 border-b-[0.70rem]
        border-black rounded-3xl bg-pink-500 w-[22rem] p-4 hover:scale-105 transition-transform hover:delay-200 ease-in-out cursor-pointer"
        >
          <p>PLAYER VS CPU</p>
          <img src="src/assets/images/player-vs-cpu.svg" />
        </div>
        <div
          className="text-2xl font-bold flex justify-between items-center border-4 border-b-[0.70rem] border-b-8
        border-black rounded-3xl bg-yellow-500 w-[22rem] p-4 hover:scale-105 transition-transform hover:delay-200 ease-in-out cursor-pointer"
        >
          <p>PLAYER VS PLAYER</p>
          <img src="src/assets/images/player-vs-player.svg" />
        </div>
        <div
          className="text-2xl font-bold flex justify-between items-center border-4 border-b-[0.70rem] border-b-8
        border-black rounded-3xl bg-white w-[22rem] p-4 py-5 hover:scale-105 transition-transform hover:delay-200 ease-in-out cursor-pointer"
        >
          <p>GAME RULES</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
