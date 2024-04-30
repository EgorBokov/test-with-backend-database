export interface IMainData {
    id: number;
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

export type OrderType = 'asc' | 'desc';

export interface IHeadCell {
    disablePadding: boolean;
    id: keyof IMainData;
    label: string;
    numeric: boolean;
}