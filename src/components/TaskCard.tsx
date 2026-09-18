type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: string;
};
function TaskCard({
  id,
  title,
  description,
  assignee,
  category,
  priority,
}: TaskCardProps) {
  return (
    <article>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Ansvaring: {assignee}</p>
      <p>Prioritet: {priority}</p>
      <p>{id}</p>
    </article>
  );
}
export default TaskCard;
