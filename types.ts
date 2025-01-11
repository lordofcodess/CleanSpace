export type Task = {
  id: string;
  title: string;
  points: number;
};

export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
  TaskSubmission: { task: Task };
}; 