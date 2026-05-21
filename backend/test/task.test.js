import { expect } from "chai";
import sinon from "sinon";
import mongoose from "mongoose";
import Task from "../src/models/Task.js";
import {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../src/controllers/taskController.js";

describe("Task Controller Tests", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should create a new task successfully", async () => {
    const req = {
      body: {
        title: "Test Task",
        description: "Testing add task",
        deadline: "2026-12-31",
      },
    };

    const createdTask = {
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
      completed: false,
    };

    sinon.stub(Task, "create").resolves(createdTask);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await addTask(req, res);

    expect(res.status.calledWith(201)).to.equal(true);
    expect(res.json.calledWith(createdTask)).to.equal(true);
  });

  it("should get all tasks successfully", async () => {
    const tasks = [
      {
        _id: new mongoose.Types.ObjectId(),
        title: "Task 1",
        completed: false,
      },
    ];

    const sortStub = sinon.stub().resolves(tasks);
    sinon.stub(Task, "find").returns({ sort: sortStub });

    const req = {};
    const res = {
      json: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await getTasks(req, res);

    expect(res.json.calledWith(tasks)).to.equal(true);
  });

  it("should update a task successfully", async () => {
    const taskId = new mongoose.Types.ObjectId();

    const task = {
      _id: taskId,
      title: "Old Title",
      description: "Old Description",
      completed: false,
      deadline: null,
      save: sinon.stub().resolvesThis(),
    };

    sinon.stub(Task, "findById").resolves(task);

    const req = {
      params: { id: taskId.toString() },
      body: {
        title: "Updated Title",
        completed: true,
      },
    };

    const res = {
      json: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await updateTask(req, res);

    expect(task.title).to.equal("Updated Title");
    expect(task.completed).to.equal(true);
    expect(res.json.calledOnce).to.equal(true);
  });

  it("should delete a task successfully", async () => {
    const taskId = new mongoose.Types.ObjectId();

    const task = {
      _id: taskId,
      deleteOne: sinon.stub().resolves(),
    };

    sinon.stub(Task, "findById").resolves(task);

    const req = {
      params: { id: taskId.toString() },
    };

    const res = {
      json: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await deleteTask(req, res);

    expect(task.deleteOne.calledOnce).to.equal(true);
    expect(res.json.calledWith({ message: "Task deleted" })).to.equal(true);
  });
});
