import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ReservationDetail from "@/components/templates/Reservation/ReservationDetail";
import React from "react";

function Reservation() {
  return (
    <>
      <PageHeader route="Reservation" />
      <ReservationDetail />
    </>
  );
}

export default Reservation;
