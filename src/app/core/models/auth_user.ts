export interface AuthUser {
  logged: boolean;
  userInfo: {
    email: string;
    role: "guest" | "user" | "admin";
  };
}
