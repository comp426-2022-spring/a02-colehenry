
import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

args['number'];

var flips = [];


if (args.number != null) { // if there is input
    flips = coinFlips(args.number);
    console.log(flips);
    console.log(countFlips(flips));
} else {
    flips = coinFlips(1);
    console.log(flips);
    console.log(countFlips(flips));
}