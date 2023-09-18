// export interface IProduct {
//   id?: number;
//   title: string;
//   author: string;
//   description: string;
//   genre: string;
//   language: string;
//   pages: number;
//   image: string;
// }

export interface IProduct {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


