import React, { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make a POST request to your backend API route to send the email
    fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, contact: false }),
    })
      .then((response) => {
        if (response.ok) {
          // Email sent successfully, you can handle success here
          console.log("Email sent successfully");
        } else {
          // Handle error when the email fails to send
          console.error("Error sending email");
        }
      })
      .then(() => {
        setSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
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
                    <button
                      type="submit"
                      className={
                        "btn btn-error text-white w-full" +
                        (sent ? " btn-disabled" : "")
                      }
                    >
                      Subscribe{" "}
                      {sent && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.8,10.4c0.1,0.5,0.2,1.1,0.2,1.6c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8c1.6,0,3.2,0.5,4.4,1.3l1.4-1.4 C16.2,2.7,14.2,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10c0-1.1-0.2-2.2-0.5-3.2L19.8,10.4z"></path>
                          <path d="M11 16.4L6.3 11.7 7.7 10.3 11 13.6 21.3 3.3 22.7 4.7z"></path>
                          <path
                            d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"
                            opacity=".3"
                          ></path>
                        </svg>
                      )}
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
