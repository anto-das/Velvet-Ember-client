import heroImg from '../assets/home/chef-service.jpg'

const IntroSection = () => {
  return (
    <div className='bg-cover bg-center py-17'
     style={{ backgroundImage: `url(${heroImg})` }}
    >
        <div className='max-w-4xl mx-auto bg-base-100 py-8 px-5'>
            <h1 className='uppercase text-center text-2xl text-[#151515] font-semibold'>velvet ember</h1>
            <p className='text-center'>Velvet Ember is a refined digital experience blending elegance and innovation. Crafted for modern users,</p>
        </div>
    </div>
  )
}

export default IntroSection