import React, { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make a POST request to your backend API route to send the email
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contact: false }),
      });

      if (response.ok) {
        // Email sent successfully, you can handle success here
        console.log("Email sent successfully");
      } else {
        // Handle error when the email fails to send
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="w-screen h-fit splash-screen">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-20">
          <div className="hero min-h-fit bg-base-100 rounded-md p-6 min-w-3.5">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Subscribe now!</h1>
                <p className="py-6">
                  Get the latest content delivered straight to your inbox.
                </p>
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2">
                <form className="card-body" onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-error text-white">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
