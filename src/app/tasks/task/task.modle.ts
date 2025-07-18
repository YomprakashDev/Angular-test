// Represents a single task item assigned to a user
export interface TaskInterface {
  id: string;        // Unique task ID
  userId: string;    // ID of the user this task belongs to
  title: string;     // Title or short name of the task
  summary: string;   // Detailed description or notes
  dueDate: string;   // ISO-formatted due date (e.g., '2025-12-31')
}
