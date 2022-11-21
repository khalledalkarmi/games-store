import React from 'react'

export const DealsCard = ({game}) => {
    return (
        <div className="">
            <div className=" relative ">

                <div className=" relative group">
                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <img className=" w-1/2" src={game.thumb} alt="A girl Posing Img" />
                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                        <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                    </div>
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-100 md:mt-6 mt-4">{game.title}</p>
                <p className=" font-semibold text-xl leading-5 text-gray-100 mt-4"><del>{game.normalPrice}$</del></p>
                <p className=" font-semibold text-xl leading-5 text-gray-100 mt-4">{game.salePrice=='0.00'?'Free':game.salePrice+'$'}</p>
                <p className=" font-semibold text-xl leading-5 text-gray-100 mt-4">Saving: {Math.ceil(game.savings)}%</p>
            </div>


        </div>

    )
}
