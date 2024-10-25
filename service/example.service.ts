import { client } from './httpClient';

export function info(query?: any) {
   return client(`/example/info/${query.id}`, { method: "GET" });
}

export function list(params?: any) {
   return client("/example/list", { method: "GET", params: params });
}

export function create(body?: any) {
   return client("/example/create", {
      method: "POST",
      body: body,
   });
}

export function updateById(body?: any) {
   return client(`/example/${body.id}/update`, {
      method: "PATCH",
      body: body,
   });
}

export function update(body?: any) {
   return client(`/example/update`, {
      method: "PATCH",
      body: body,
   });
}

export function destroy(query?: any) {
   return client(`/example/delete/${query?.id}`, {
      method: "DELETE",
   });
}