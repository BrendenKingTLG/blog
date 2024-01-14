import React from "react";

export default function index() {
  return (
    <div className="w-full bg-white pb-1">
      <div className="divider m-0"></div>
      <div className="flex justify-center items-center pt-1">
        <ul className="menu menu-horizontal">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Parent</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
