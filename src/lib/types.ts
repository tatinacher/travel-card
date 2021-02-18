export type Params = "park" | "city" | "food";

export interface CardProps {
  picture?: string;
  name: string;
  country?: string;
  params?: Params[];
}
