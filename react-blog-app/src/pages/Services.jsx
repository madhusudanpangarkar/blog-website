import React from 'react'
import './Services.css';


const Services = () => {
  let message = ' Our skilled team of designers and developers creates stunning and responsive websites tailored to your brand. From concept to deployment, we ensure a seamless user experience.'
  return (
    <div>
      <div className='py-40 bg-black text-center text-white'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Services Page</h2>
      </div>
      <section className='section-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-title'>Our Services</h2>
              <p className='section-subtitle'>{message}</p>

           
            </div>

            <div className='col-sm-6 col-md-4'>
          
              <div className='team-item1'>
                <img src='./images/team.jpg' className='team-img1'/>
                <p className='about-team'>
                Engage your audience with compelling content. Our experienced copywriters and content creators deliver high-quality articles, blog posts, and marketing collateral that resonate with your target audience.<br/>Make a lasting impression with visually stunning graphics and a cohesive brand identity. Our graphic designers bring creativity and expertise to logo design, marketing materials, and brand collateral.
                <br/> Leverage our IT consulting services to optimize your technology infrastructure. From system analysis to strategic planning, we help businesses streamline operations and enhance overall efficiency.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services