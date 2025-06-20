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
  creation_date: string;
  recurrency: Weekday[];
  notification: boolean;
  type: HabitType;
  objective: boolean | number; 
}

export type HabitsStackParamList = {
  HabitsList: undefined;
  HabitsForm: undefined;
};
