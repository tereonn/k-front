import { EP_URL } from '../../config';
import {
  LoginQueryRequest,
  RegisterBodyRequest,
  RegisterBodyResponse,
} from '../../dto';
import { HttpMethods, Headers } from './net_const';

export const register = async (
  body: RegisterBodyRequest,
): Promise<RegisterBodyResponse> => {
  const path = EP_URL + '/api/register';

  return (
    await fetch(path, {
      method: HttpMethods.POST,
      headers: {
        ...Headers.ContTypeJson,
      },
      body: JSON.stringify({ user: body }),
    })
  ).json();
};

export const login = async (query: LoginQueryRequest) => {
  const path = EP_URL + '/api/login?';

  return (
    await fetch(path + new URLSearchParams(query), {
      method: HttpMethods.GET,
      headers: {
        ...Headers.ContTypeJson,
      },
    })
  ).json();
};
