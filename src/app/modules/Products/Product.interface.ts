export type TProduct = {
  branchId: string;
  productName: string;
  productType: string;
  productQuantity: number;
  buyingPrice: number;
  sellingPrice: number;
  discount?: number;
  stock: 'available' | 'stock out';
};
