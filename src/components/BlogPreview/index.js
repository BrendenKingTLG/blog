import React from "react";
import "./style.css";
export default function index({ title, date, author, summary }) {
  return (
    <div className="card w-60 h-60 bg-base-100 shadow-xl blog">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xs">{title}</h2>
        <p className=" text-xs">{summary}</p>
        <div className="card-actions justify-end">
          <p className="text-xs text-gray-500">
            {date} * {author}
          </p>
        </div>
      </div>
    </div>
  );
}
