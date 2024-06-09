import { Paginacion } from "./paginacion.interface";

export interface ResponseData<T> {
  data: T;
  paginacion: Paginacion
}
