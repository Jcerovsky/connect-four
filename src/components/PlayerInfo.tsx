interface Props {
  player: string;
}

function PlayerInfo({ player }: Props) {
  const playerImgSrc =
    player === "PLAYER 1" ? "player-one.svg" : "player-two.svg";
  const playerIconLayout = player === "PLAYER 1" ? "-left-7" : "-right-7";
  const playerDivLayout = player === "PLAYER 2" ? "flex-row-reverse" : "";

  return (
    <div className={`w-5/12 font-bold`}>
      <div
        className={`relative border-2 border-b-8 rounded-3xl text-center border-black bg-white py-3 text-sm sm:flex
            sm:justify-around sm:items-center sm:py-4 ${playerDivLayout}`}
      >
        <p>{player}</p>
        <p className=" text-3xl sm:text-4xl">12</p>
        <img
          src={`src/assets/images/${playerImgSrc}`}
          className={`absolute top-3 ${playerIconLayout}`}
        />
      </div>
    </div>
  );
}

export default PlayerInfo;
