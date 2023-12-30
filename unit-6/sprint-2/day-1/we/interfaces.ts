// <--------- TypeScript Interfaces -----> 

interface User extends Course {
    name: string;
    class: number;
    x: string;
    phoneNumber: number;
    // courseId: number;
    // courseTitle: string
} 

interface Course {
    courseId: number;
    courseTitle: string
}