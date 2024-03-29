import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
   /* <div>
      <div className='py-40 bg-black text-center text-white'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us Page</h2>
      </div>
    </div>*/
    <section>
      <div className='py-40 bg-black text-center text-white'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us</h2>
      </div>



      <div className='container'>
        {/*image */}
        <div className="image">
          <img src='./images/contact.png' alt=''  />
  </div>



<div className='max-w-screen-lg mx-auto p-8 bg-white rounded-md shadow-md flex'>
        
        
 {/*       
  <div className='container'>
        {/*image }
        <div className="image">
          <img src='./images/contact.png' alt=''  />
  </div>
    */}    

        {/*Form */}
  <div className="form"> 
    <h2 className="text-3xl font-bold mb-6">Contact Us</h2> 
       <form className="space-y-4 ">
          <label htmlFor="email" className="block text-sm font-medium text-black">
            User Name:
          </label>
          <input type="text" placeholder="Full Name" name='user_name' required/>
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email:
          </label>
          <input type="email" placeholder="Email" name='user_email' required/>
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Subject
          </label>
          <input type="text" placeholder="Subject" name='subject' required/>
          <label htmlFor="email" className="block text-sm font-medium text-black">
           Message
          </label>
          <textarea className='h-150 min-150' type="text" placeholder="Message" name='message' required/>
          <br/>
         <button type='submit' className='bg-purple-700 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none'>Send Mesage</button>
        </form>
    </div>  
   </div>



      </div>
    </section>

  )
}

export default Contact