const BASE_URL = 'http://localhost:5000';

export const COMIDAS_URL = BASE_URL + '/api/comidas'; 
export const COMIDAS_TAGS_URL = COMIDAS_URL + '/tags';
export const COMIDAS_BY_SEARCH_URL = COMIDAS_URL + '/buscar/';
export const COMIDAS_BY_TAG_URL = COMIDAS_URL + '/tag/';
export const COMIDAS_BY_ID_URL = COMIDAS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL +'/api/users/register';