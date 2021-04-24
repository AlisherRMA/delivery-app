import { _RouteConfigBase } from "vue-router/types/router";

export interface IModule {
  /**
   * Наименование модуля, указывать путь к переводу
   */
  moduleName: string;
  /**
   * Маршрут модуля, необходим для vue-router
   */
  routePath: string;
  /**
   * Если наименование модуля отличается в навигации (пример НСИ),
   * то необходимо указать путь к переводу тут
   */

  navigationName?: string;

  /**
   * Список ролей которым доступен этот модуль
   */
  roles?: string[];

  /**
   * mdi иконка для панели навигации
   */
  icon?: string;

  /**
   * Описание под-модулей
   */
  subModules?: ModuleDefinition | IModule[];

  /**
   * Дочерние роуты, которые не должны отображаться в сайд-баре
   */
  routerChildrens?: ModuleDefinition | IModule[];

  /**
   * Конвертировать под-маршруты
   *
   * Пример если true: /users-management => /administration/users-management
   */
  convertSubPaths?: boolean;
}

export type ModuleDefinition = Record<string, IModule>;
