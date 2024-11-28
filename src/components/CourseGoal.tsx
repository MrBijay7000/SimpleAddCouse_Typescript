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

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  children,
  onDelete,
  id,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
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
