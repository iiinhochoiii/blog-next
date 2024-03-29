export const regExpEmail = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; // email 유효성검사
export const regExpPhone = /(01[016789])?[-](\d{4}|\d{3})?[-]\d{4}$/i; // phone 유효성검사
export const regPassword = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&]).{7,}.$/;
export const regPhone = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
