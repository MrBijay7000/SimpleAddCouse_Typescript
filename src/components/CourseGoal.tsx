// type CourseGoalProps = {
//   title: string;
//   description: string;
// };

import { PropsWithChildren } from "react";

// // //
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button>DELETE</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>DELETE</button>
//     </article>
//   );
// };

// export default CourseGoal;
