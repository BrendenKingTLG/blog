import React from "react";

export default function index({ title, date, author, summary }) {
  return (
    <div className="blog">
      <div className="divider m-0"></div>
      <div className="card w-60">
        <div className="card-body">
          <h2 className="card-title text-xs">{title}</h2>
          <p className="text-xs">{summary}</p>
          <div className="card-actions justify-end">
            <p className="text-xs">
              {date} * {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
