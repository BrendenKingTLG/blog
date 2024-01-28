import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  contact: boolean;
}

export default function Index() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    contact: true,
  });
  const [contacted, setContacted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send data to the backend server
    fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Check if the response has content
        if (response.ok && response.status !== 204) {
          return response.json();
        }
        return response.text().then((text) => {
          return text ? JSON.parse(text) : {};
        });
      })
      .then((data) => {
        console.log("Success:", data);
        setContacted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-fit w-full">
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 w-full">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={
              "btn btn-error text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" +
              (contacted ? " btn-disabled" : "")
            }
          >
            Submit{" "}
            {contacted && (
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
  );
}
