export interface AudioProduct {
  id: string;
  name: string;
  type: string;
  brand: string;
  price: number;
  power?: number;
  description: string;
  image_url: string;
  in_stock: boolean;
  created_at: string;
}

export interface InsulationProduct {
  id: string;
  name: string;
  layer: number;
  brand: string;
  description: string;
  price_per_sqm: number;
  image_url: string;
  created_at: string;
}

export interface CalculatorSelection {
  carSize: 'small' | 'medium' | 'large' | 'suv';
  zones: {
    doors: boolean;
    floor: boolean;
    roof: boolean;
    trunk: boolean;
  };
  audioProducts: {
    [productId: string]: number;
  };
}
