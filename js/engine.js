import Marshal from './pieces/Marshal';
import Bomb from './pieces/Bomb';
import Captain from './pieces/Captain';
import Colonel from './pieces/Colonel';
import Flag from './pieces/Flag';
import General from './pieces/General';
import Lieutenant from './pieces/Lieutenant';
import Major from './pieces/Major';
import Miner from './pieces/Miner';
import Scout from './pieces/Scout';
import Sergeant from './pieces/Sergeant';
import Spy from './pieces/Spy';

let marshal = new Marshal();
let bomb = new Bomb();
let captain = new Captain();
let colonel = new Colonel();
let flag = new Flag();
let general = new General();
let lieutenant = new Lieutenant();
let major = new Major();
let miner = new Miner();
let scout = new Scout();
let sergeant = new Sergeant();
let spy = new Spy();


console.log(marshal.getName(), marshal.getRank());
console.log(general.getName(), general.getRank());
console.log(colonel.getName(), colonel.getRank());
console.log(major.getName(), major.getRank());
console.log(captain.getName(), captain.getRank());
console.log(lieutenant.getName(), lieutenant.getRank());
console.log(sergeant.getName(), sergeant.getRank());
console.log(miner.getName(), miner.getRank());
console.log(scout.getName(), scout.getRank());
console.log(spy.getName(), spy.getRank());
console.log(bomb.getName(), bomb.getRank());
console.log(flag.getName(), flag.getRank());