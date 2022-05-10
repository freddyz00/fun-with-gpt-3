import React, { useState } from "react";
import "./TextInput.css";

import ClipLoader from "react-spinners/ClipLoader";

function TextInput({ responses, setResponses }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      prompt,
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // add the response to the list sorted by time of creation
        setResponses(
          [
            ...responses,
            {
              id: data.id,
              prompt: prompt,
              response: data.choices[0].text,
              createdAt: data.created,
            },
          ].sort((a, b) => b.createdAt - a.createdAt)
        );
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setPrompt("");
        setLoading(false);
      });
  };

  return (
    <section className="TextInput">
      {/* heading */}
      <h1 className="TextInput-heading">Fun With GPT-3</h1>

      {/* text input form */}
      <form className="TextInput-form" onSubmit={handleSubmit}>
        <label htmlFor="prompt">Enter A Prompt</label>
        <textarea
          required
          id="prompt"
          rows="7"
          className="TextInput-textarea"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        ></textarea>
        <button
          className={`TextInput-button ${
            loading && "TextInput-button--loading"
          }`}
          type="submit"
          disabled={loading}
        >
          {!loading && "Submit"}
          <ClipLoader loading={loading} size={20} />
        </button>
      </form>
    </section>
  );
}

export default TextInput;
