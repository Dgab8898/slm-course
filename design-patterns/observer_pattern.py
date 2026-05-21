class Subscriber:
    def update(self, message):
        print(f"Notification received: {message}")


class TaskManager:
    def __init__(self):
        self.subscribers = []

    def subscribe(self, subscriber):
        self.subscribers.append(subscriber)

    def notify(self, message):
        for subscriber in self.subscribers:
            subscriber.update(message)

    def add_task(self, task):
        print(f"Task added: {task}")
        self.notify(f"New task created: {task}")


user1 = Subscriber()
user2 = Subscriber()

task_manager = TaskManager()

task_manager.subscribe(user1)
task_manager.subscribe(user2)

task_manager.add_task("Complete SLM Assignment")