import React from "react";
import { maze, loop } from "../utils/main_maze";

const Map = () => {
  let grid = [];

  for (let i = 0; i < 30; i++) {
    grid.push([]);
    for (let j = 0; j < 26; j++) {
      grid[i].push({ room: "?", n: "?", s: "?", e: "?", w: "?" });
    }
  }

  console.log("maze", maze);

  console.log("grid", grid);

  for (let room in maze) {
    let r = maze[room];

    let x = 30 - r[0][1] + 1;
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
      for (let k in j) {
        if (j[k] !== "?") {
          if (k === "n") {
            n = "deepskyblue";
          } else if (k === "s") {
            s = "deepskyblue";
          } else if (k === "e") {
            e = "deepskyblue";
          } else if (k === "w") {
            w = "deepskyblue";
          }
        }
      }
      return {
        borderTopColor: n,
        borderBottomColor: s,
        borderLeftColor: w,
        borderRightColor: e
      };
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
