export type Weekday =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type HabitType = 'check' | 'time amount' | 'amount';

export interface Habit {
  title: string;
  description: string;
  start_date: string; 
  end_date?: string; 
  creation_date: string;
  recurrency: Weekday[];
  notification: boolean;
  type: HabitType;
  objective: boolean | number; 
}
