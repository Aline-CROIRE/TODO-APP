export type Duration = "Daily" | "Weekly" | "Monthly" | "Yearly";

export interface Task {
  id: string;
  name: string;
  duration: Duration;
}
