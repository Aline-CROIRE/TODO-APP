export type Duration = "Daily" | "Weekly" | "Monthly" | "Year";

export interface Task {
  id: string;
  name: string;
  duration: Duration;
}
