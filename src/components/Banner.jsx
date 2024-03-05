import arrow from '../assets/arrow.png'

const Banner = () => {
  return (
    <>  
        <div id='containerText' className="pl-[15vw] pr-[15vw] pt-[20vh] h-[100vh] bg-red-700 flex flex-wrap items-center justify-center">
          
          <div className="flex flex-wrap gap-[2vw] justify-center">

              <div className="text-white font-Monsterrat h-full">
                  <h1 id='hiText' className="text-[5vw]">Hi!</h1>
                  <h1 id='myNameText' className="text-[3.5vw]">My Name is</h1>
              </div>

              <div id='nameText' className="font-Monsterrat h-full mt-[8.2%] content-end">
                <h2 className='text-[5vw]'>Shadam Husain</h2>
              </div>

                <div className='w-0 bg-white h-[0.4vh] mb-[6vh] basis-[60vw] rounded-full'></div>
                
                <div className='text-white font-Monsterrat text-[3.8vw] mt-[-45px] tracking-[8.5px] text-center'><h1>Im Full Stack Programmer</h1></div>

          </div>

              <div className="relative pl-[15vw] pr-[15vw] text-center mt-[5%] animate-bounce">
                <h1>Scroll down for more</h1>
                <img src={arrow} alt="" className='h-[5vw] w-[5vw] ml-auto mr-auto mt-[1em] rounded-full'/>
              </div>


        </div>
    </>
  )
}

export default Banner