type TokenPart = {
  token: string;
};

export type RegisterBodyRequest = {
  login: string;
  pass: string;
  name: string;
  phone: string;
  city: string;
};

export type RegisterBodyResponse = TokenPart;

export type LoginQueryRequest = {
  login: string;
  pass: string;
};

export type LoginBodyResponse = TokenPart;
