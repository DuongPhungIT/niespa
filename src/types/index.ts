/**
 * Types dùng chung cho toàn bộ app.
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  image: string;
  images?: string[];
  categoryId: string;
  categoryName?: string;
  brand?: string;
  ageRange?: string;
  rating?: number;
  reviewCount?: number;
  shortDescription?: string;
  description?: string;
  inStock: boolean;
  createdAt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  productCount?: number;
  parentId?: string | null;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  total?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
