import React, { useState } from 'react'

function Form() {
 const [result, setResult] = useState("send");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "23c3df73-046f-43ad-a73b-5a4453343a52");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="order-2 lg:order-1">
      <h3 className="text-orange text-2xl font-semibold py-3 text-center lg:text-left">
        Get In Touch
      </h3>
      <p className="max-w-[85%]  text-white text-xl pb-3 text-center lg:text-left">
        Feel free to reach out if you'd like to collaborate you are just a few
        clicks away!
      </p>
      <form onSubmit={onSubmit} className="py-3 space-y-4">
        <input
          type="text"
          name="name"
          id="name"
          spellCheck="false"
          placeholder="Name"
          required
          className="w-full bg-brown text-white text-lg px-4 py-2 rounded-xl outline-0 border-0"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          className="w-full bg-brown text-white text-lg px-4 py-2 rounded-xl outline-0 border-0"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
          className="w-full bg-brown text-white text-lg px-4 py-2 rounded-xl outline-0 border-0"
        ></textarea>
        <button className="w-full text-xl bg-darkCyan rounded-xl text-center py-2 text-[#fff]">
          {result}
        </button>
      </form>
    </div>
  );
}

export default Form