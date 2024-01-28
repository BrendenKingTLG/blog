import React, { useState } from "react";
import "./style.css";
export default function Index() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
          setShowPopup(true); // Show the pop-up

          // Set a timeout to hide the pop-up after 2 seconds
          const timeoutId = setTimeout(() => {
            setShowPopup(false);
          }, 2000);
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
      {showPopup && (
        <div className="popup flex flex-row justify-center items-center gap-1 rounded-md">
          <p className="text-sm">sent</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="10"
              height="10"
              viewBox="0 0 50 50"
            >
              <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
            </svg>
          </div>
        </div>
      )}

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
                          viewBox="0 0 50 50"
                        >
                          <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
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
