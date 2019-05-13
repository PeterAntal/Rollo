import { D4 } from "./D4";
import { D6 } from "./D6";
import { D8 } from "./D8";
import { D10 } from "./D10";
import { D20 } from "./D20";
import { D100 } from "./D100";
import { DiceFactory } from "./DiceFactory";

export { DiceFactory };
export * from "./IDice";

DiceFactory.getInstance().RegisterDice(D6);
DiceFactory.getInstance().RegisterDice(D4);
DiceFactory.getInstance().RegisterDice(D8);
DiceFactory.getInstance().RegisterDice(D10);
DiceFactory.getInstance().RegisterDice(D20);
DiceFactory.getInstance().RegisterDice(D100);
