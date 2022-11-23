"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let GET = `
select 
* 
from 
users
`;
let LOGIN = `
select 
*
from 
users as u
where u.user_name=$1 and password=$2
`;
let POST = `
INSERT INTO users(full_name,user_name,password,tell_number,region,gander) VALUES ($1,$2,$3,$4,$5,$6) returning*
`;
exports.default = {
    GET,
    POST,
    LOGIN
};
