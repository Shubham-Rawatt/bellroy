// import React from 'react'

// const Sign = () => {
//   return (
//     <div>sign</div>
//   )
// }

// export default Sign

import React, { useState } from "react";

const FillForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-[#f1f1f1] px-4 py-7">
      <div className="mx-auto flex max-w-140 flex-col items-center">
        
        {/* Heading */}
        <h2 className="text-center text-[24px] font-normal leading-[1.3] text-[#e44b16]">
          Sign up for new releases and subscriber exclusives
        </h2>

        {/* Form */}
       <form
  onSubmit={handleSubmit}
  className="mt-6 flex h-10.2 w-full overflow-hidden rounded-sm bg-white p-3 shadow-lg"
>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email to register"
    className="min-w-0 flex-1 bg-transparent px-2 text-[12px] text-gray-600 outline-none placeholder:text-[#999]"
  />

  <button
    type="submit"
    className="h-full rounded-[4px] bg-[#d5d5d5] px-3 text-[12px] font-bold tracking-[0.5px] text-white transition-colors duration-200 hover:bg-[#c5c5c5]"
  >
    SUBMIT
  </button>
</form>

        {/* Description */}
        <p className="mt-4 max-w-130 text-center text-[11px] leading-4.25 text-[#888]">
          You are signing up to receive product updates and newsletters. By
          signing up, you are consenting to our{" "}
          <a
            href="#"
            className="text-[#e44b16] underline"
          >
            privacy policy
          </a>{" "}
          but you can opt out at any time.
        </p>

      </div>
    </section>
  );
};

export default FillForm;