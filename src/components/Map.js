import React from "react";
import { maze } from "../utils/main_maze";

const Map = () => {
  let grid = [];

  for (let i = 0; i < 26; i++) {
    grid.push([]);
    for (let j = 0; j < 30; j++) {
      grid[i].push({ room: "?", n: "?", s: "?", e: "?", w: "?" });
    }
  }

  console.log("maze", maze);

  console.log("grid", grid);

  for (let room in maze) {
    let r = maze[room];

    let x = r[0][0];
    let y = r[0][1] - 2;
    grid[x][y] = { ...grid[x][y], room: room, ...r[1] };
  }

  console.log("grid", grid);

  let nonStyle = {
    borderColor: "dimgray"
  };

  let northStyle = {
    borderColorTop: "lime"
  };

  return (
    <div className="grid">
      {grid.map((i, index) => (
        <div key={index} className={`row ${index}`}>
          {i.map((j, jndex) => (
            <div
              key={Number(String(index) + String(jndex))}
              className={`column ${jndex}`}
              id={`box ${index} ${jndex}`}
              style={j.room === "?" ? nonStyle : null}
            >
              {j.room !== "?" && <p>{j.room}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Map;
