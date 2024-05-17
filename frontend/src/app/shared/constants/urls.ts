import { environment } from "../../../environments/environment";
// environment.production? '' :
const BASE_URL = environment.production? '' : 'http://localhost:5000';

export const COMIDAS_URL = BASE_URL + '/api/comidas'; 
export const COMIDAS_TAGS_URL = COMIDAS_URL + '/tags';
export const COMIDAS_BY_SEARCH_URL = COMIDAS_URL + '/buscar/';
export const COMIDAS_BY_TAG_URL = COMIDAS_URL + '/tag/';
export const COMIDAS_BY_ID_URL = COMIDAS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL +'/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';