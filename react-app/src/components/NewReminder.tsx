import { useState } from "react";

interface NewReminderProps {
  onAddReminder: (tittle: string) => void;
}

const NewReminder = ({ onAddReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };
  return (
    <form onSubmit={submit}>
      <label htmlFor="title">Title: </label>
      <input
        value={title}
        id="title"
        type="text"
        className="form-control"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add reminder
      </button>
    </form>
  );
};

export default NewReminder;
