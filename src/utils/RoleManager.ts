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
  dataRole.forEach((role, index) => {
    labels += `${index + 1} - ${role.title} \n`;
  });
  return labels;
}