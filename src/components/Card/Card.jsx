import React from 'react'
 import styles from "./card.module.scss"
const Card = (props) => {
  console.log("props", props);
  const {name,location,phone,email,picture,dob,registered}=props;
  console.log(phone,email,picture.thumbnail,name)
  return (
    <>
<section>

<div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top " src={picture.large}  alt={name} />
  <div className="card-body">
    <h5 className="card-title">2323 </h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
   
  </div>
</div>
</section>
    
    </>
  )
}

export default Card