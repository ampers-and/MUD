import React from "react";
import { maze, loop } from "../utils/main_maze";

const Map = () => {
  let grid = [];

  for (let i = 0; i < 10; i++) {
    grid.push([]);
    for (let j = 0; j < 10; j++) {
      grid[i].push({ room: "?", n: "?", s: "?", e: "?", w: "?" });
    }
  }

  console.log("maze", loop);

  console.log("grid", grid);

  for (let room in loop) {
    let r = loop[room];

    let x = 10 - r[0][1];
    let y = r[0][0];
    grid[x][y] = { ...grid[x][y], room: room, ...r[1] };
  }

  console.log("grid", grid);

  let style = j => {
    if (j.room === "?") {
      return { borderColor: "dimgray" };
    } else {
      let n,
        s,
        w,
        e = "white";
      for (k in j) {
        if (j[n] !== "?") {
        }
      }
    }
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
              style={style(j)}
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
