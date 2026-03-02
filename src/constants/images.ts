/**
 * Ảnh Mẹ & Bé – Unsplash, đúng chủ đề: mẹ bầu, mẹ sau sinh, bé, sản phẩm mẹ và bé.
 * Format: w=width, q=80.
 */
const U = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

/** Ảnh spa chăm sóc mẹ và bé sau sinh (lisanail.vn) */
const HERO_SPA_ME_BE =
  'https://lisanail.vn/wp-content/uploads/2024/03/spa-cham-soc-cho-me-va-be-sau-sinh.jpg';

export const IMAGES = {
  /** Spa chăm sóc mẹ và bé sau sinh */
  hero: HERO_SPA_ME_BE,
  /** Không gian chăm sóc thư giãn / spa nhẹ nhàng */
  whyChoose: U('1540555700478-4be289fbecef', 1200),

  /** Dịch vụ tại Spa – từng ảnh đúng nội dung */
  services: {
    'cham-soc-me-bau-tai-spa': U('1544161515-4ab6f6ff7af0', 600), // Mẹ bầu
    'goi-dau-duong-sinh': U('1560066984-138dadb4c035', 600), // Gội đầu chăm sóc
    'massage-body': U('1544161515-4ab6f6ff7af0', 600), // Thư giãn mẹ bầu
    'be-boi-thuy-lieu': U('1587668178277-295251f900ce', 600), // Bé trong nước
    'facial-niespa': U('1570172619644-dfd03ed5d881', 600), // Chăm sóc da mặt
    'tay-u-da': U('1616394584738-fc6e612e71b9', 600), // Skincare
    'lieu-trinh-san-chac': U('1519823551278-64ac92734fb1', 600), // Body care
    'tam-trang-collagen': U('1540555700478-4be289fbecef', 600), // Spa thư giãn
    'triet-long': U('1522337360788-8b13dee7a37e', 600), // Làm đẹp
  },

  /** Home Spa – chăm sóc tại nhà mẹ và bé */
  homeServices: {
    'cham-soc-me-bau-tai-nha': U('1544161515-4ab6f6ff7af0', 400), // Mẹ bầu
    'cham-soc-me-sau-sinh-tai-nha': U('1584515933487-779824d29309', 400), // Mẹ và bé
    'thong-tac-tia-sua': U('1519689680058-324335c77eba', 400), // Chăm sóc mẹ
    'tam-massage-be-tai-nha': U('1587668178277-295251f900ce', 400), // Bé tắm/nước
  },

  /** Avatar cảm nhận – chị em phụ nữ / mẹ */
  avatars: [
    U('1438761681033-6461ffad8d80', 100),
    U('1544005313-94ddf0286df2', 100),
    U('1494790108377-be9c29b29330', 100),
  ],
} as const;

/** Ảnh sản phẩm Mẹ & Bé – từng danh mục và sản phẩm cụ thể */
export const PRODUCT_IMAGES = {
  /** Sữa bột */
  formula: U('1587049352846-4a222e784d38', 400),
  formula2: U('1550583724-b2692b85b150', 400),
  /** Tã bỉm / chăm sóc bé */
  diaper: U('1584100936595-c0654b55a2e2', 400),
  /** Bình sữa / phụ kiện bé */
  bottle: U('1584305574647-0cc949dc0118', 400),
  /** Đồ chơi trẻ em */
  toy: U('1587654780291-39c9404d746b', 400),
  /** Thời trang bà bầu */
  maternity: U('1594938298603-c8148c4dae35', 400),
} as const;
