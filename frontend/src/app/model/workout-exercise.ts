import { WorkoutType } from "./workout-type";

export class WorkoutExercise {
  _id: string = '';
  name: string = '';
  workoutType: WorkoutType = new WorkoutType();
  workingMuscles: string[] = [];
  image: string = '';
  sets: string = '';
  reps: string = '';
  time: string = '';
  weight: number = 0;
}
