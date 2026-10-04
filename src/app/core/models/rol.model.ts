// Roles principales de RURALL
export type Rol = 'productor' | 'logistica' | 'comprador';

// Perfil específico del rol Comprador //
export interface PerfilComprador {
  ciudad: string;
  direccionEntrega: string;
  telefonoRespaldo1?: string;
  telefonoRespaldo2?: string;
}