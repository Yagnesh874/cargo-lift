import React from 'react'
import ronaldo from '../assets/ronaldo.jpg'
import virat from '../assets/kohli.webp'
import messi from '../assets/messi.jpeg'
function Tododestinations() {
    return (
        <div className="font-bold text-5xl text-center">
            Top destinations

            <div className="flex flex-col md:flex-row gap-3 md:justify-evenly">
                <div className="h-80 md:w-1/4 md:h-auto bg-purple-700 ">
                    <img src={ronaldo} alt="" srcset="" />
                    <div><p className="text-2xl font-light">He is considered to be one of the greatest footballers of all time. Ronaldo began his professional career with Sporting CP at age 16 in 2002 and signed for Manchester United a year later. He won three back-to-back Premier League titles in 2006-07, 2007-08, and 2008-09</p></div>
                </div>
                <div className="h-80 md:w-1/4 md:h-auto bg-red-800">
                    <img src={virat} alt="" srcset="" />
                    <div>
                        <p className='text-2xl font-light'>Virat Kohli (born November 5, 1988, Delhi, India) is an Indian international cricketer considered by many as one of the greatest batsmen in the history of the game. Kohli plays for (and previously captained) the Royal Challengers Bangalore (RCB) in the Indian Premier League (IPL).</p>
                    </div>
                </div>
                <div className="h-80 md:w-1/4 md:h-auto bg-green-700">
                    <img src={messi} alt="" srcset="" />
                    <div>
                        <p className='text-2xl font-light'>Lionel Messi is a football player from Argentina who plays for Inter Miami. He has won the Ballon D'Or, the annual award given to the best player in the world, 8 times, 2022 FIFA World Cup winner and an Olympic gold medal winner in 2008. He was born in 1987 in Rosario, Argentina's third-biggest city.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tododestinations
