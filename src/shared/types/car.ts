type car = {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string;
  logo: string;
  details: { id: number; color: string; image: string }[];
};

export default car;
