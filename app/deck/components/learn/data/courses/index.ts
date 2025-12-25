import { jobInterviewing } from './job-interviewing';
import { leadership101 } from './leadership-101';
import { agileBasics } from './agile-basics';

export const courses = [jobInterviewing, leadership101, agileBasics];

// Re-export individual courses for direct access
export { jobInterviewing, leadership101, agileBasics };
