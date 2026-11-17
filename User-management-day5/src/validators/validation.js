import * as z from "zod";

const userValidationSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "firstName should be more than 2 letters" })
    .max(20, { message: "firstName should not be more than 20 letters" }),
  lastName: z
    .string()
    .min(3, { message: "lastName should be more than 3 letters" })
    .max(20, { message: "lastName should not be more than 20 letters" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[!@#$%^&*()_+={}\[\]:;"'<,>.?\/\\|~-]/, {
      message: "Password must contain at least one special character",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  token: z.jwt({ message: "Invalid token" }).optional(),
});

const loginValidationSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[!@#$%^&*()_+={}\[\]:;"'<,>.?\/\\|~-]/, {
      message: "Password must contain at least one special character",
    }),
  email: z.string().email({ message: "Invalid email address" }),
});

export { userValidationSchema, loginValidationSchema };
