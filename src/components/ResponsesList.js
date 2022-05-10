import React from "react";
import "./ResponsesList.css";

import ResponseCard from "./ResponseCard";

function ResponsesList({ responses, setResponses }) {
  return (
    <section className="ResponsesList">
      {responses.map((response) => (
        <ResponseCard
          prompt={response.prompt}
          response={response.response}
          deleteItem={() =>
            setResponses(responses.filter((item) => item.id !== response.id))
          }
        />
      ))}
      {responses.length === 0 && <p>Submit a prompt to see a response.</p>}
    </section>
  );
}

export default ResponsesList;
