import React from 'react'

const RuleCards = ({ index }) => {
    return (
        <div className='h-96 w-80 border-2 p-2 border-[rgb(211,250,80)] rounded-lg inline-block mx-2'>
            <div className='flex flex-col items-center space-y-4'>
                <div></div>
                <div className='rule_card w-[80%] h-8 text-center bg-[rgb(211,250,80)] text-black flex items-center justify-center font-bold'>
                    HOW TO PLAY
                </div>
                <p className='text-xl tracking-wide text-gray-200'>
                    Rule {index}
                </p>
                <p className='text-center whitespace-normal'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur, ipsam cumque maiores natus earum veniam ipsa accusamus quisquam expedita in delectus dolorem a enim vitae eum amet ipsum facere.
                </p>
            </div>

        </div>
    )
}

export default RuleCards