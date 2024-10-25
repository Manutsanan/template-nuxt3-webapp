import type { LoginRequest } from "@/models/auth.model";
import { client } from './httpClient';

export function login(body: LoginRequest) {
   return client("/auth/login", {
      method: "POST",
      body: body,
   });
}

export function logout() {
   return client("/auth/logout", {
      method: "POST",
   });
}