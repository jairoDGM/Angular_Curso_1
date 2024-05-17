export const productList :Product[] = [
  {id: 1, name: 'trapeador', price: 25, descripcion: 'palo con trapo'},
  {id: 2, name: 'fabuloso', price: 30, descripcion: 'detergente olor navidad'},
  {id: 3, name: 'trapo microfibra', price: 10, descripcion: 'trapo multiuso'},
  {id: 4, name: 'jabon de manos', price: 25, descripcion: 'jabon para lavar manos'},
  {id: 5, name: 'cloro', price: 10},
  {id: 6, name: 'escoba', price: 15, descripcion: 'escoba con cerdas plasticas'},
  {id: 7, name: 'pala', price: 25, descripcion: 'pala de madera'},
]

export interface Product{
  id: number | string;
  name: string;
  price: number;
  descripcion?: string;
}
