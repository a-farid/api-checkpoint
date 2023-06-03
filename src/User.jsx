import React from "react";

function User({ id, name, username, email, address }) {
  console.log(address);
  return (
    <div className="user">
        <img className='img' src="/user.png" alt="" />
<div className="user-desc">

      <div className="user-name">{name}</div>
      <div className="user-info">Username: {username}</div>
      <div className="user-info">Email: {email}</div>
      <div className="user-info">Adress: {address.street}</div>
</div>
    </div>
  );
}

export default User;

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
