import PlayerInfo from "./components/PlayerInfo";


function App() {

  return (
    <div className='bg-violet-600 h-screen p-10 flex flex-col gap-8'>
        <section className='tracking-widest flex justify-between text-white font-bold'>
            <button className=' w-4/12 bg-violet-700 rounded-3xl cursor-pointer hover:scale-105 hover:transition-transform delay-100	ease-in-out hover:shadow-inner'>MENU</button>
            <img src="src/assets/images/logo.svg" alt="menu logo consisting of four dots" className='w-2/12'/>
            <button className=' w-4/12 bg-violet-700 rounded-3xl cursor-pointer hover:scale-105 hover:transition-transform delay-100	ease-in-out hover:shadow-inner'>RESTART</button>
        </section>
        <section className='flex gap-5 justify-center'>
            <PlayerInfo player={'PLAYER 1'}/>
            <PlayerInfo player={'PLAYER 2'}/>
        </section>
        <section className='ml-auto mr-auto'>
            <img src="src/assets/images/board-layer-white-small.svg" alt="empty connect four board"/>
        </section>
    </div>
  )
}

export default App
