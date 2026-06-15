export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  department_id?: number | null;
  base_salary?: string;
  hire_date?: string | null;
  status?: string;
  address?: string | null;
  national_id?: string | null;
  profile_image?: string | null;
  created_at?: string;
  updated_at?: string;

  roles: Role[];
}
