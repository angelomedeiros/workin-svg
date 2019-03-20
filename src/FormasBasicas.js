import React from "react";

const style = {
  svg1: {
    border: "1px solid red",
    backgroundColor: "#fff"
  }
};

export default () => (
  <>
    <div>
      <h2>Rect</h2>
      <svg style={style.svg1}>
        <rect x="0" y="0" width="100" height="50" />
      </svg>
    </div>
    <div>
      <h2>Circle</h2>
      <svg style={style.svg1}>
        <circle r="60" cx="150" cy="75" />
      </svg>
    </div>
    <div>
      <h2>Ellipse</h2>
      <svg style={style.svg1}>
        <ellipse rx="60" ry="30" cx="150" cy="75" />
      </svg>
    </div>
    <div>
      <h2>Circle</h2>
      <svg style={style.svg1}>
        <circle r="60" cx="150" cy="75" />
      </svg>
    </div>
    <div>
      <h2>Line</h2>
      <svg style={style.svg1}>
        <line x1="10" y1="10" x2="80" y2="75" stroke="#000" strokeWidth="3" />
      </svg>
    </div>
    <div>
      <h2>Polyline</h2>
      <svg style={style.svg1}>
        <polyline points="10,10 80,75 150,10" stroke="#000" strokeWidth="3" fill="transparent" />
      </svg>
    </div>
    <div>
      <h2>Polygon</h2>
      <svg style={style.svg1}>
        <polygon points="10,10 80,75 150,10" stroke="#000" strokeWidth="3" fill="transparent" />
      </svg>
    </div>
    <div>
      <h2>Path 1.1</h2>
      <svg style={style.svg1}>
        <path stroke="#000" strokeWidth="3" fill="transparent" d="M10,10 80,75 150,10z" />
      </svg>
    </div>
    <div>
      <h2>Path 1.2</h2>
      <svg style={style.svg1}>
        <path stroke="#000" strokeWidth="3" fill="transparent" d="M10,10 L80,75 L150,10z" />
      </svg>
    </div>
    <div>
      <h2>Path 2</h2>
      <svg style={style.svg1}>
        <path
          stroke="#000"
          strokeWidth="3"
          fill="transparent"
          d="M40,20 L40,80 A30,30 0 0,0 100,80z"
        />
      </svg>
    </div>
    <div>
      <h2>Path 2 cont.</h2>
      <svg style={style.svg1}>
        <path
          stroke="#000"
          strokeWidth="3"
          fill="transparent"
          d="M40,20 L40,80 A15,15 0 0,0 100,80 L100,20z"
        />
      </svg>
    </div>
    <div>
      <h2>Path 2 with defs</h2>
      <svg style={style.svg1}>
        <defs>
          <path
            id="palheta"
            stroke="#000"
            strokeWidth="3"
            d="M40,20 L40,80 A15,15 0 0,0 100,80 L100,20z"
          />
        </defs>
        <use xlinkHref="#palheta" fill="transparent" />
        <use xlinkHref="#palheta" x="20" y="20" fill="black" />
      </svg>
    </div>
    <div>
      <h2>Path 2 with g</h2>
      <svg style={style.svg1}>
        <g fill="blue">
          <use xlinkHref="#palheta" />
          <use xlinkHref="#palheta" x="20" y="20" />
        </g>
      </svg>
    </div>
    <div>
      <h2>Path 3 with symbol</h2>
      <svg style={style.svg1}>
        <symbol id="palheta__symbol" fill="blue" viewBox="0 0 200 300">
          <use xlinkHref="#palheta" />
          <use xlinkHref="#palheta" x="20" y="20" fill="green" />
        </symbol>
        <use xlinkHref="#palheta__symbol" />
      </svg>
    </div>
  </>
);
