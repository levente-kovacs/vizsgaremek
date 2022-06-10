import { WorkoutExercise } from "./workout-exercise";

export class WorkoutSchedule {
  _id: string = '';
  name: string = '';
  workoutType: string = '';
  monday: WorkoutExercise[] = [];
  tuesday: WorkoutExercise[] = [];
  wednesday: WorkoutExercise[] = [];
  thursday: WorkoutExercise[] = [];
  friday: WorkoutExercise[] = [];
  saturday: WorkoutExercise[] = [];
  sunday: WorkoutExercise[] = [];
}
