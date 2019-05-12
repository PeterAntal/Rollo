import { D6 } from "./D6";
import { DiceFactory } from "./DiceFactory";

export { DiceFactory };
export * from "./IDice";

DiceFactory.getInstance().RegisterDice(D6);