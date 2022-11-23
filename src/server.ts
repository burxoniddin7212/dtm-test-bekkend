import { validation } from './middleweire/joiValidation';
import express, { Request, Response, ErrorRequestHandler, NextFunction, Express } from 'express';
import cors from 'cors';
import { PORT } from './config';
import { heandler } from "./lib/errorHeandler";
import userRouter from "./modules/users/router";
import facultyRouter from "./modules/faculty/router";
import instituteRouter from "./modules/institute/router";
import testsRouter from "./modules/tests/router";
import calculateResultRouter from "./modules/calculate_result/router";
import resultRouter from "./modules/result/router";

let app: Express = express();
app.use(express.json());
app.use(cors());

app.use(validation);
app.use(userRouter);
app.use(facultyRouter);
app.use(instituteRouter);
app.use(testsRouter);
app.use(calculateResultRouter);
app.use(resultRouter);


app.use(heandler);


app.listen(PORT, () => console.log("server readey " + PORT));