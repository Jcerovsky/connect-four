interface Props {
    player: string
}

function PlayerInfo({player}: Props) {

    const playerImgSrc = player === 'PLAYER 1'? 'player-one.svg' : 'player-two.svg'
    const playerIconLayout = player === 'PLAYER 1'? '-left-6' : '-right-6'
    return (
        <div className='w-5/12 font-bold'>
            <div className='relative border-2 border-b-8 rounded-3xl text-center border-black bg-white py-3 text-sm' >
                <p>{player}</p>
                <p className=' text-3xl'>12</p>
                <img src={`src/assets/images/${playerImgSrc}`} className={`absolute top-3 ${playerIconLayout}`}/>
            </div>

        </div>
    );
}

export default PlayerInfo;