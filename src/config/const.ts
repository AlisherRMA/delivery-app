export const STORAGE_KEY_LOCALE = "locale";
export const SUPPORTED_LANGUAGES = ["ru", "kk"];

export const MAIN_API_BASE_URL = "/main/api";
export const AUTH_API_BASE_URL = "/main";
export const PUBLIC_API_BASE_URL = "/api";

/**
 * Кодовые обозначения схем, используемых в VFG
 */
export enum VFG_SCHEMAS {
  mjd_passport = "js_objects_passport",
  mjd_rooms = "js_objects_rooms_passport",
}

/**
 *  Кодовые обозначения ролей пользователей
 */
export enum USER_ROLES {
  admin_ib = "ROLE_ADMIN_IB",
  admin = "ROLE_ADMIN",
  kazcenter_specialist = "ROLE_KAZCENTER_SPECIALIST",
  sem_specialist = "ROLE_SEM_SPECIALIST",
  sem_director = "ROLE_SEM_DIRECTOR",
  manager_osi = "ROLE_HOUSE_MANAGER_OSI",
  manager_pt = "ROLE_HOUSE_MANAGER_PT",
  manager_ksk = "ROLE_HOUSE_MANAGER_KSK",
  test_role = "TEST_ROLE",
}

export const METABASE_ACCESS_ROLES = ["ROLE_KAZCENTER_SPECIALIST"];
