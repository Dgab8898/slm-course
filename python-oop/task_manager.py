class Task:
    def __init__(self, title, description):
        self.title = title
        self.description = description
        self.completed = False

    def mark_complete(self):
        self.completed = True

    def display_task(self):
        status = "Completed" if self.completed else "Pending"

        print(f"""
Task: {self.title}
Description: {self.description}
Status: {status}
""")


class PriorityTask(Task):
    def __init__(self, title, description, priority):
        super().__init__(title, description)

        self.priority = priority

    def display_task(self):
        status = "Completed" if self.completed else "Pending"

        print(f"""
Task: {self.title}
Description: {self.description}
Priority: {self.priority}
Status: {status}
""")


task1 = Task(
    "Finish SLM Project",
    "Complete all cloud deployment tasks"
)

task2 = PriorityTask(
    "Prepare Presentation",
    "Create final project slides",
    "High"
)

task1.display_task()

task2.display_task()

task2.mark_complete()

task2.display_task()