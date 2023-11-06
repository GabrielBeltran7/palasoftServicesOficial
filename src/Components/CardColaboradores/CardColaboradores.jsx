import React, { useState } from "react";
import style from "./CardColaboradores.module.css";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={style.cardContainer}>
      <div
        className={`${style.card} ${isFlipped ? style.flipped : ""}`}
        onClick={handleCardClick}
      >
        <div className={`${style.front} ${isFlipped ? style.hidden : ""}`}>
          <img src={props.imagen} alt={props.nombre} />
        </div>
        <div className={`${style.back} ${isFlipped ? "" : style.hidden}`}>
          <div className={style.backContent}>
            <h2>{props.nombre}</h2>
            <p>{props.profesion}</p>
            <div className={style.sm}>
              <a href={props.facebook} target="_blank">
                <FaFacebook className={style.icon} />
              </a>
              <a href={props.youtube} target="_blank">
                <FaYoutube className={style.icon} />
              </a>
              <a href={props.instagram} target="_blank">
                <FaInstagram className={style.icon} />
              </a>
              <a href={props.linkedin} target="_blank">
                <FaLinkedin className={style.icon} />
              </a>
              <a href={props.github} target="_blank">
                <FaGithub className={style.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import React from "react";
// import style from "./CardColaboradores.module.css";
// import {
//   FaFacebook,
//   FaYoutube,
//   FaInstagram,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";
// const Card = (props) => {
//   const id = props.id;
//   return (
//     <div className={style.cardContainer}>
//       <div className={style.card}>
//         <div className={style.front}>
//           <img src={props.imagen} alt={props.nombre} />
//         </div>
//         <div className={style.back}>
//           <div className={style.backContent}>
//             <h2>{props.nombre}</h2>
//             <p>{props.profesion}</p>
//             <div className={style.sm}>
//               <a href={props.facebook} target="_blank">
//                 <FaFacebook className={style.icon} />
//               </a>

//               <a href={props.youtube} target="_blank">
//                 <FaYoutube className={style.icon} />
//               </a>

//               <a href={props.instagram} target="_blank">
//                 <FaInstagram className={style.icon} />
//               </a>

//               <a href={props.linkedin} target="_blank">
//                 <FaLinkedin className={style.icon} />
//               </a>

//               <a href={props.github} target="_blank">
//                 <FaGithub className={style.icon} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
