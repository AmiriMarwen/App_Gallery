import React from "react";
import Latestsection from "../components/cardSection/Latestsection";

export const AndroidGames = () => (
  <div class="max-w-6xl mx-auto px-5">
    <div className="Category-tag flex space-x-5 py-6">
      <span class="game-tag-current">Games</span>
      <span class="game-tag">Strategy</span>
      <span class="game-tag">Adventure</span>
      <span class="game-tag">Role Playing</span>
      <span class="game-tag">Puzzle</span>
      <span class="game-tag">Simulation</span>
      <span class="game-tag">Racing</span>
      <span class="game-tag">Arcade</span>
    </div>
    <Latestsection />
  </div>
);
