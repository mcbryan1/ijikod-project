import React from "react";
import "./Pages.css";

export default function Loading() {
  return (
    <div class="d-flex justify-content-center align-item-center mainLoad">
    <div class="spinner-border text-danger" style={{width:50, height:50,}} role="status" >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  );
}
