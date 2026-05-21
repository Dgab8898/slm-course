class Task:
    def __init__(self, title):
        self.title = title

    def display(self):
        print(f"Normal Task: {self.title}")


class PriorityTask:
    def __init__(self, title):
        self.title = title

    def display(self):
        print(f"Priority Task: {self.title}")


class TaskFactory:
    @staticmethod
    def create_task(task_type, title):
        if task_type == "normal":
            return Task(title)
        elif task_type == "priority":
            return PriorityTask(title)
        else:
            raise ValueError("Unknown task type")


task1 = TaskFactory.create_task("normal", "Finish backend")
task2 = TaskFactory.create_task("priority", "Submit assignment")

task1.display()
task2.display()