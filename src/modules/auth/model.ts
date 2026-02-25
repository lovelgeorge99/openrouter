import { t } from "elysia";

export namespace AuthModel {
  export const signInSchema = t.Object({
    email: t.String(),
    password: t.String(),
  });

  export type signInSchema = typeof signInSchema.static;

  export const signInResponseSchema = t.Object({
    message: t.Literal("Signed in correctly"),
  });

  export type signInResponseSchema = typeof signInResponseSchema.static;

  export const signinFailedResponseSchema = t.Object({
    message: t.Literal("Incorrect Credentials"),
  });

  export type signinFailedResponseSchema =
    typeof signinFailedResponseSchema.static;

  export const signUpSchema = t.Object({
    email: t.String(),
    password: t.String(),
  });

  export type signUpSchema = typeof signUpSchema.static;

  export const signUpResponseSchema = t.Object({
    id: t.String(),
  });

  export type signUpResponseSchema = typeof signUpResponseSchema.static;

  export const signupFailedResponseSchema = t.Object({
    message: t.Literal("Error while signing up"),
  });

  export type signupFailedResponseSchema =
    typeof signupFailedResponseSchema.static;
}
