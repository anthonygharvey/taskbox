import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./TaskList";
import { withPinnedTasks } from "./TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const div = document.createElement("div");
  const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
  const lastTaskTitle = withPinnedTasks[withPinnedTasks.length - 1].title;
  ReactDOM.render(<TaskList tasks={withPinnedTasks} {...events} />, div);

  const lastTaskInput = div.querySelector(
    // '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
    // decided to not hard-code the title
    `.list-item:nth-child(1) input[value="${lastTaskTitle}"]`
  );
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
