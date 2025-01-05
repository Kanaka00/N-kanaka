// import React from 'react';
// import "./Homepage.css";

// const Homepage = () => {
//   return (
//     <div className='BgHome'>
//       <div className='box1'> 
//         <p className="greetings">
//           Hello Friends !
//         </p>
//         <h1>I Am <span className='userName'>KANAKADRI</span></h1>
//         <div className='userInfo'>
//           <p>"I am a 3rd-year BSc Communication student with skills 
//             in web development and media communication, seeking a job
//              to apply my knowledge and contribute to a dynamic team."</p>
//         </div>
//        <div className="icon">
//         <ul>
//           <li>
//             <a href="">
//               <i class="fa-brands fa-whatsapp"></i>
//             </a>
//             </li>
//             <li>
//             <a href="">
//             <i class="fa-brands fa-github"></i>
//             </a>
//             </li>
//             <li>
//             <a href="">
//             <i class="fa-brands fa-linkedin"></i>
//             </a>
//             </li>
//             <li>
//             <a href="">
//             <i class="fa-brands fa-twitter"></i>
//             </a>
//             </li>
//         </ul>
//        </div>
//       </div>
//       <div className="bgImg">
       
//       </div>
//       <div className='box2'>
//       </div>
//     </div>
//   );
// }

// export default Homepage;

import "./Homepage.css";

const Homepage = () =>{

  return(
    <div className="home-page">
        <div className="name-info-box">
          <div className="box1">
          <h1>I Am <span className='userName'>KANAKADRI</span></h1>
        <div className='userInfo'>
          <p>I am a 3rd-year BSc Communication student with skills 
            in web development and media communication, seeking a job
             to apply my knowledge and contribute to a dynamic team."</p>
        </div>
        <div className="icon">
        <ul>
          <li>
            <a href="">
               <i class="fa-brands fa-whatsapp"></i>
             </a>
             </li>
             <li>
             <a href="">
             <i class="fa-brands fa-github"></i>
             </a>
             </li>
             <li>
             <a href="">
             <i class="fa-brands fa-linkedin"></i>
             </a>
             </li>
             <li>
             <a href="">
             <i class="fa-brands fa-twitter"></i>
             </a>
             </li>
         </ul>
        </div>
          </div>
        </div>
        <div className="pics">
          <div className="rotate">.</div>
          <img src="/zoro.png" alt="Zoro" srcset="" />
        </div>

    </div>
  );
}

export default Homepage;
