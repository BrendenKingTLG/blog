import React from "react";
import Link from "next/link";
import "./style.css";

export default function Index() {
  return (
    <div className="py-5">
      <h4 className="px-3">Latest</h4>
      <div className="divider m-0"></div>
      <div className="grid-layout pt-4 pb-5">
        {[...Array(6)].map((_, index) => (
          <Link key={index} href={"/blog"}>
            <div className="nyt-card">
              <div className="card-body">
                <h2 className="card-title">Greetings person, How Are You</h2>
                <p>Hello its nice to meet you</p>
                <div className="card-actions">
                  <p>07/2022 * Brenden King</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
