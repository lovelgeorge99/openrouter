import { Elysia } from "elysia";
import { app as authApp } from "./modules/auth";

const app = new Elysia().use(authApp).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

/*
auth => signup,signin
api-key => create api key, get apikey ,delete api key,disable api key
model=> get all supported models
payment => stripe

*/
