import { Parallax } from 'react-parallax';

const IntroSection = ({bgImg,heading,description}) => {
  return (
      <Parallax
        blur={{ min: -40, max: 40 }}
        bgImage={bgImg}
        bgImageAlt="the dog"
        strength={-200}
        bgImageStyle={{objectPosition:'center',}}
    >
       <div className=' py-14 md:py-20 px-4 lg:py-40'>
        <div className='max-w-4xl mx-auto bg-black/40 py-14 px-5'>
            <h1 className='uppercase text-center text-2xl text-white font-semibold'> {heading} </h1>
            <p className='text-center text-white'> {description} </p>
        </div>
    </div>
    </Parallax>
  )
}

export default IntroSection