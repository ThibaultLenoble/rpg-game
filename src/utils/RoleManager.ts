import Player from "../class/Player/Player";
import {dataRole} from "../datas/role";

export const setRole = (player: Player, roleId: number) => {

  let role = dataRole[roleId]

  player.role = role.title
  player.currentLife = player.maxLife = role.hpMax
  player.weapon = role.weapon

  return player;
}

export const displayAllRoleChoices = (): string => {
  let labels = "";
  console.log(dataRole)
  dataRole.forEach((role, index) => {
    labels += `${index + 1} - ${role.title} - ❤️:${role.hpMax} /  🗡️:${role.weapon.name} - ${role.weapon.damage} \n`;
  });
  return labels;
}