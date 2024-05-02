export function calculateUserAge(dateOfBirth: string): number {
  const currentDate = new Date();
  const dob = new Date(dateOfBirth);
  const ageInMillis = currentDate.getTime() - dob.getTime();
  const ageInYears = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365.25));
  return ageInYears;
}
