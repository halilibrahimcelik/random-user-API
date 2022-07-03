import React from 'react'
 import styles from "./card.module.scss";
 import { FaMailBulk ,FaPhone} from 'react-icons/fa';
 import {GrMapLocation} from 'react-icons/gr';
const Card = (props) => {
  console.log("props", props);
  const {name,location,phone,email,picture,dob,registered,changeUser}=props;
  console.log(name)
  console.log(props.changeUser)
  return (
    <>
<section>

<div className="card" style={{ width: "20rem" }}>
  <div className={styles.header1} >
    <img className="card-img-top" src={picture.large}  alt={name} style={{ width: "40%" }}/>
      <div className="title">
        <h5 className="card-title"  >{name.title}  </h5>
        <h6 > {name.first} {name.last}</h6>
      </div>
  </div>
  <div className="card-body">
    <p className="card-text">
   <p className="cart-text">  <FaMailBulk/>  {email} </p>
  <p className="cart-text"><FaPhone/> {phone} </p>
  <p className="cart-text"> <GrMapLocation/> {location.country} {location.city} </p>
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
   <button className="btn btn-success" onClick={()=>{changeUser((prev)=>!prev)}}>Change User </button>
  </div>
</div>
</section>
    
    </>
  )
}

export default Card