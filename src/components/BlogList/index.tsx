import React from "react";
interface BlogProps {
  title: string;
  date: string;
  author: string;
  summary: string;
}
export default function index({ title, date, author, summary }: BlogProps) {
  return (
    <div>
      <div className="divider m-0"></div>
      <div className="blog w-11/12 flex justify-center">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-lg">{title}</h2>
            <p className="text-lg">{summary}</p>
            <div className="card-actions justify-end">
              <p className="text-lg">
                {date} * {author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
