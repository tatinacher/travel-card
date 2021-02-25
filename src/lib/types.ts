export type Params = "park" | "city" | "food";

export interface CardProps {
  picture?: any;
  name: string;
  country?: string;
  params?: Params[];
}

export interface CountiresProps {
  id: string;
  name: string;
}

export interface LocationProps {
  id: string;
  name: string;
  picture?: any;
  params?: Params[];
}
