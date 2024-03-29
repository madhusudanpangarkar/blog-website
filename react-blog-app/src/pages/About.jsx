import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub} from "react-icons/fa6";
import './About.css';

const About = () => {
  const TeamMemberCard = ({ name, role, college, imageUrl }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-contain " src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="name font-bold">{name}</div>
        <p className="role font-bold">{role}</p>
        <p className="text-gray-700  text-center text-base">{college}</p>
      </div>
    </div>
  );
  let message = 'Our team, comprised of skilled professionals with diverse backgrounds, has successfully undertaken and completed GyaanGossip.Com. This project aimed to empower your creativity as you effortlessly create, publish, and explore blogs across diverse categories such as food, entertainment, and lifestyle, which will help in shaping a dynamic platform for sharing knowledge and experiences.'
  const teamMembers = [
    {
      name: 'MADHUSUDAN PANGARKAR',
      role: 'Team Leader',
      college: 'MET College of Engineering',
      imageUrl: './images/mohandas.jpg',
    },
    {
      name: 'SANSKRUTI LAD',
      role: 'Team Member',
      college: 'International Institute of Information Technology, Pune',
      imageUrl: './images/sanskruti.jpg',
    },
    {
      name: 'SHRUTISHA GHANGALE',
      role: 'Team Member',
      college: "Pune Vidyarthi Griha's College of Engineering, Nashik",
      imageUrl: './images/shrutisha.jpg',
    },
    {
      name: 'VAISHNAVI SONAWANE',
      role: 'Team Member',
      college: 'K. K. Wagh College of Engineering, Nashik',
      imageUrl: './images/vaishnavi.jpg',
    },
    {
      name: 'RUTUJA PATHARE',
      role: 'Team Member',
      college: "Pune Vidyarthi Griha's College of Engineering, Nashik",
      imageUrl: './images/rutuja.jpg',
    },
  ];
  return (
    <div>
      <div className='py-40 bg-black text-center text-white'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About Us</h2>
      </div>
      <div className="bg-gray-200 p-6">
      <div className="flex space-x-4">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>




      {/* <section className='section-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-title'>Our Team Experties</h2>
              <p className='section-subtitle'>{message}</p>
            </div> */}


            {/*Madhusudan Pangarkar */}
            {/* <div className='flex space-x-4'> */}
            {/* <div className='card-container'>
            <div className='col-sm-6 col-md-4'>
              <div className='team-item'>
                <img src='./images/mohandas.jpg' className='team-img' alt='pic'/>
                <h3>Madhusudan Pangarkar</h3>
                <div className='team-info'>
                  <p>Team Leader</p>
                  <p>MET College of Engineering </p>
                  <ul className='team-icon'>
                    <li>
                      <a href='https://www.linkedin.com/in/madhusudan-pangarkar-916214218' className='LinkedIn'>
                        <i className='FaLinkedin'><FaLinkedin/></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='FaTwitter'>
                        <i className='fa-twitter'><FaTwitter/></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='Dribbble'>
                        <i className='fa-dribbble'><FaGithub/></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>             
            </div> */}



            {/*Sanskruti Lad */}
            {/* <div className='col-sm-6 col-md-4'>
              <div className='team-item'>
                <img src='./images/sanskruti.jpg' className='team-img' alt='pic'/>
                <h3>Sanskruti Lad</h3>
                <div className='team-info'>
                  <p>Team Member</p>
                  <p>International Institute of Information Technology, Pune </p>
                  <ul className='team-icon'>
                    <li>
                      <a href='https://www.linkedin.com/in/sanskrutilad0802?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='LinkedIn'>
                        <i className='FaLinkedin'><FaLinkedin/></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='FaTwitter'>
                        <i className='fa-twitter'><FaTwitter/></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='Dribbble'>
                        <i className='fa-dribbble'><FaGithub/></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>              
            </div> */}



            {/*Shrutisha Ghangale */}
            {/* <div className='col-sm-6 col-md-4'>
              <div className='team-item'>
                <img src='./images/shrutisha.jpg' className='team-img' alt='pic'/>
                <h3>Shrutisha Ghangale</h3>
                <div className='team-info'>
                  <p>Team Member</p>
                  <p>Pune Vidyarthi Griha's College of Engineering, Nashik </p>
                  <ul className='team-icon'>
                    <li>
                      <a href='https://www.linkedin.com/in/shrutisha-ghangale-179658258/' className='LinkedIn'>
                        <i className='FaLinkedin'><FaLinkedin/></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='FaTwitter'>
                        <i className='fa-twitter'><FaTwitter/></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/Shrutisha-Ghangale' className='Dribbble'>
                        <i className='fa-dribbble'><FaGithub/></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>            
            </div> */}



            {/*Vaishnavi Sonawane */}
            {/* <div className='col-sm-6 col-md-4'>
              <div className='team-item'>
                <img src='./images/vaishnavi.jpg' className='team-img' alt='pic'/>
                <h3>Vaishnavi Sonawane</h3>
                <div className='team-info'>
                  <p>Team Member</p>
                  <p>K. K. Wagh College of Engineering, Nashik </p>
                  <ul className='team-icon'>
                    <li>
                      <a href='https://www.linkedin.com/in/vaishnavi-sonawane-ai?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'  className='LinkedIn'>
                        <i className='FaLinkedin'><FaLinkedin/></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='FaTwitter'>
                        <i className='fa-twitter'><FaTwitter/></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/vasonawane' className='Dribbble'>
                        <i className='fa-dribbble'><FaGithub /></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>             
            </div> */}



 
           {/*Rutuja Pathare */}
            {/* <div className='col-sm-6 col-md-4'>
              <div className='team-item'>
                <img src='./images/rutuja.jpg' className='team-img' alt='pic'/>
                <h3>Rutuja Pathare</h3>
                <div className='team-info'>
                  <p>Team Member</p>
                  <p>Pune Vidyarthi Griha's College of Engineering, Nashik  </p>
                  <ul className='team-icon'>
                    <li>
                      <a href='https://www.linkedin.com/in/rutuja-pathare-6037a6277' className='LinkedIn'>
                        <i className='FaLinkedin'><FaLinkedin/></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='FaTwitter'>
                        <i className='fa-twitter'><FaTwitter/></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/RPathare/Hackerrank' className='Dribbble'>
                        <i className='fa-dribbble'><FaGithub/></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>              
            </div>
            </div> */}
            
            {/* </div>
          </div> */}
        {/* </div> */}
      {/* </section>
    </div> */}
    </div>
  );
};

export default About