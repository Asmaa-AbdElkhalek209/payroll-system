import { LoginFormData } from "../schemas/login.schema";

export async function loginApi(data: LoginFormData) {
  // mock
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          email: data.email,
        },
      });
    }, 1000);
  });
}
