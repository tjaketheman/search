import React from "react";
import bosses from "./metroidbosses";

// export const mapping = () => {
//     return (bosses.map(boss => ({
//         name: bosses.name
//         dmgDone: bosses.dmgToSamus
//         hp: bosses.hp
// I'm not sure about this code, I don't think it will do what I want
//     )
// }

class SingleBoss extends React.Component {
    render() {
    return (
    <React.Fragment>
      <div>
        <ul>
          <li>Name: {bosses.name}</li>
          <li>Damage Done: {bosses.dmgToSamus}</li>
          <li>HP: {bosses.hp}</li>
          <li>Drops:</li>
          <ul>
            <li>None: {bosses.drops.nodrop}</li>
            <li>Small Energy: {bosses.drops.smallenergy}</li>
            <li>Large Energy: {bosses.drops.bigenergy}</li>
            <li>Missile: {bosses.drops.missile}</li>
            <li>Super Missile: {bosses.drops.superm}</li>
            <li>Power Bomb: {bosses.drops.powerbomb}</li>
          </ul>
        </ul>
      </div>
    </React.Fragment>
    )
  }
}


export default SingleBoss;
