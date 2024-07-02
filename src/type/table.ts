export type Column = {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
};

export type Data = {
  [key: string]: string;
};
