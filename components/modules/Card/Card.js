import Link from "next/link";
import React from "react";

function Card({ title, desc, price, img, id }) {
  return (
    <div class="row align-items-center mb-5">
      <div class="col-4 col-sm-3">
        <img class="w-100 rounded-circle mb-3 mb-sm-0" src={img} alt="" />
        <h5 class="menu-price">${price}</h5>
      </div>
      <div class="col-8 col-sm-9">
        <Link href={`/products/${id}`}>
          <h4>{title}</h4>
        </Link>
        <p class="m-0">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
