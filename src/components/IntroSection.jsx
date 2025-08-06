import heroImg from '../assets/home/chef-service.jpg'

const IntroSection = () => {
  return (
    <div className='flex lg:flex-row md:flex-row flex-col items-center gap-3'>
        <div className=''>
            <h1 className='uppercase text-center lg:text-2xl md:text-xl text-sm font-semibold'> <span className="text-amber-500">velvet</span> ember</h1>
            <p className='text-center text-gray-600 font-medium'>Velvet Ember is a refined digital experience blending elegance and innovation. Crafted for modern users, it delivers smooth performance, sleek design, and an immersive interface you’ll love.</p>
        </div>
       <div>
         <img src={heroImg} alt=""/>
       </div>
    </div>
  )
}

export default IntroSection