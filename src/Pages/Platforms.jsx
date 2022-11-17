import React from 'react'
import SearchBar from '../Components/SearchBar';
import { useGamePlatforms } from '../Context/GamePlatformsContext';

const Platforms = () => {

    const GamePlatforms = useGamePlatforms()

    if (GamePlatforms == null) {
        return <h1>loading</h1>
    } else { console.log(GamePlatforms) }
    return (
        <>

            <div id="blog" className="bg-gray-900 px-4 xl:px-0 py-12">
                <div className="mx-auto container">
                    <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-100">Platforms</h1>
                    <div className="mt-12">
                        <div>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                                {GamePlatforms.results.map(platform =>
                                    <div className='hover:shadow-[0px_0px_22px_1px_rgba(38,0,255,0.65);] '>
                                        <img className="w-full h-[300px] " src={platform.image_background} alt="games" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-white font-semibold tracking-wide">{platform.name}&nbsp;</p>
                                            <p className="text-sm text-white font-semibold tracking-wide">{platform.year_start ? 'Start year' : platform.year_start} </p>
                                            <p className="text-sm text-white font-semibold tracking-wide">{platform.year_start}</p>
                                        </div>
                                        <div className=" bg-gray-500 px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl ">
                                            <h1 className="text-lg text-gray-200 font-semibold tracking-wider">Some Game:</h1>
                                            <p className="text-gray-100 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">{platform.games.slice(0, 3).map(name => <p style={{ margin: 0, padding: 0 }}>{name.name + ","}</p>)}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}




export default Platforms