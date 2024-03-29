import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'
import SideBar from '../components/SideBar'

const SingleBlog = () => {

    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];
  return (
    <div>
        <div className='py-40 bg-black text-center text-white'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
        </div>

        { /* Blog details */}

        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt='' className='w-full mx-auto rounded' />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className='mb-3 text-gray-600'><span className='font-bold text-base'>Category:</span> {category}</p>
                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
                <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
                <p className='text-base text-gray-500 mb-6'>{content}</p>
                <div>
                    <p className='text-base text-gray-500 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat architecto qui facilis nisi consequatur, sed voluptas tempora doloribus veritatis totam voluptatum perspiciatis itaque enim, culpa dolore, sequi quam consectetur? Voluptatibus ducimus fuga beatae et minima! Quibusdam placeat perspiciatis hic deserunt porro quisquam cumque voluptatum soluta culpa. Rem, natus error?</p>
                    <p className='text-base text-gray-500 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat architecto qui facilis nisi consequatur, sed voluptas tempora doloribus veritatis totam voluptatum perspiciatis itaque enim, culpa dolore, sequi quam consectetur? Voluptatibus ducimus fuga beatae et minima! Quibusdam placeat perspiciatis hic deserunt porro quisquam cumque voluptatum soluta culpa. Rem, natus error?</p>
                    <p className='text-base text-gray-500 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat architecto qui facilis nisi consequatur, sed voluptas tempora doloribus veritatis totam voluptatum perspiciatis itaque enim, culpa dolore, sequi quam consectetur? Voluptatibus ducimus fuga beatae et minima! Quibusdam placeat perspiciatis hic deserunt porro quisquam cumque voluptatum soluta culpa. Rem, natus error?</p>
                    <p className='text-base text-gray-500 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat architecto qui facilis nisi consequatur, sed voluptas tempora doloribus veritatis totam voluptatum perspiciatis itaque enim, culpa dolore, sequi quam consectetur? Voluptatibus ducimus fuga beatae et minima! Quibusdam placeat perspiciatis hic deserunt porro quisquam cumque voluptatum soluta culpa. Rem, natus error?</p>
                    <p className='text-base text-gray-500 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat architecto qui facilis nisi consequatur, sed voluptas tempora doloribus veritatis totam voluptatum perspiciatis itaque enim, culpa dolore, sequi quam consectetur? Voluptatibus ducimus fuga beatae et minima! Quibusdam placeat perspiciatis hic deserunt porro quisquam cumque voluptatum soluta culpa. Rem, natus error?</p>
                </div>
            </div>

            <div className='lg:w-1/2'>
                <SideBar/>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog