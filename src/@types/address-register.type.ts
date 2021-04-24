import { PageableAPIResponse, PageableOptions } from "./base.type";

export interface AddressRegisterPageable extends PageableAPIResponse {
  content: AddressRegisterEntity[];
}

export interface AddressRegisterEntity {
  recordId: number;
  modified?: string;
  actual?: boolean;
  atsType?: AddressLabel;
  geonimType?: AddressLabel;
  buildingPointer?: AddressLabel;
  rco?: string;
  cato?: number;
  nameRus?: string;
  nameKaz?: string;
  fullPathRus?: string;
  fullPathKaz?: string;
  number?: string;
  parentId?: number;
  children: AddressRegisterEntity[];
  isLast?: boolean;
  parentBuilding?: AddressRegisterEntity;
  thisIs?: string;
  rowNumber?: number;
}

export type Geonim = AddressRegisterEntity;

export interface Building extends AddressRegisterEntity {
  geonimId?: number;
  atsId?: number;
  groundId?: number;
  rca?: string;
}

export interface Flat extends AddressRegisterEntity {
  categoryRoom?: number;
  rcaBuilding?: number;
  buildingId?: number;
  roomType?: AddressLabel;
  isActive?: boolean;
  rca?: string;
}

export type AddressLabel = {
  recordId: string | number;
  shortValueRu: string;
  shortValueKz: string;
  valueRu: string;
  valueKz: string;
  actual: boolean;
};

interface AddressRegisterAPIParams {
  size: number;
}

export interface AtsParams {
  parentId: number;
}

export interface GeonimParams extends AddressRegisterAPIParams {
  atsId: number;
}

export interface BuildingParams extends AddressRegisterAPIParams {
  geonimId: number;
}

export interface FlatParams extends AddressRegisterAPIParams {
  buildingId: number;
}

export interface SearchBuildingParams extends PageableOptions {
  atsId: number;
  buildingPointerId?: number;
  searchString: string;
}
