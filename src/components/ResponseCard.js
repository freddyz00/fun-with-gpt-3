import React from "react";
import "./ResponseCard.css";

function ResponseCard({ prompt, response, deleteItem }) {
  return (
    <article className="ResponseCard">
      {/* prompt */}
      <h3 className="ResponseCard-title">Prompt</h3>
      <p>{prompt}</p>

      {/* response */}
      <h3 className="ResponseCard-title">Response</h3>
      <p>{response}</p>

      {/* button to delete the item */}
      <button onClick={deleteItem} className="ResponseCard-close">
        &times;
      </button>
    </article>
  );
}

export default ResponseCard;
