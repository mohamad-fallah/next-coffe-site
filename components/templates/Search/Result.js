import Card from "@/components/modules/Card/Card";
import React from "react";

function Result({ searchResult }) {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="mb-5">Hot Coffee</h1>
            {/*  */}
            {searchResult
              .filter((item) => item.type === "hot")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} key={item.id} />
              ))}
          </div>
          <div class="col-lg-6">
            <h1 class="mb-5">Cold Coffee</h1>

            {searchResult
              .filter((item) => item.type === "cold")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
