import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Task from "./Task";

export const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

const longTitle =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem tempore quo saepe numquam nulla quidem, sit perferendis, nam laboriosam neque facere libero pariatur veniam illum cumque optio consequatur laborum dolor!";

function randomTitle() {
  const titleLength = Math.floor(Math.random() * 150) + 1;
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789";
  var charactersLength = characters.length;

  for (var i = 0; i < titleLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

storiesOf("Task", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Task task={object("task", { ...task })} {...actions} />
  ))
  .add("pinned", () => (
    <Task task={{ ...task, state: "TASK_PINNED" }} {...actions} />
  ))
  .add("archived", () => (
    <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
  ))
  .add("long_title", () => (
    <Task task={{ ...task, title: longTitle }} {...actions} />
  ))
  .add("random_title_length", () => (
    <Task task={{ ...task, title: randomTitle() }} {...actions} />
  ));
