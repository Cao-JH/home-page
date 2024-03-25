import request from './request.js'

export const login = (data) => request.post('/auth/login', data);
