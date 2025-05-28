import "./assets/app.css";
import "./assets/2048.css";
import { setupGrid } from "./2048Grid.ts";

const grid = setupGrid(document.querySelector<HTMLDivElement>(".grid")!);

let gridDisplay = [
  [null, null, 4, null],
  [null, null, 8, null],
  [null, null, 64, 8],
  [2, 8, 2, 8],
];

grid.display(gridDisplay);

const directionMap: Record<string, string> = {
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
};

document.addEventListener("keydown", async (event) => {
  const direction = directionMap[event.key];
  if (!direction) return;

  const response = await fetch(`http://localhost:3000/2048/${direction}`, {
    method: "POST",
  });
  if (response.ok) {
    const newGrid = await response.json();
    grid.display(newGrid);
  }
});