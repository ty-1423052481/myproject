import "jquery";

import "../stylesheets/index.css";
import "../stylesheets/details.css";
import "../stylesheets/login.css";
import "../stylesheets/cartlist.css";

import "../stylesheets/registry.css";



import {
    lunBo,
} from './index.js';

import {
    userRegistry,
} from './registry.js';

import {
    details,
} from './details.js';

import {
    userLogin,
} from './login.js';


import {
    cartList,
} from './cartlist';


new lunBo().init();
new userRegistry().init();
new details().init();
new userLogin().init();
new cartList().init();