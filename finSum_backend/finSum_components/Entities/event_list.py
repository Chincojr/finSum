from finSum_backend.finSum_components.Entities.event import event

class event_list:
    def __init__(self, unchecked_events:list):
        self.events = []
        self.element_type = event


    def _check_type(self, item):
        if not isinstance(item, self.allowed_type):
            raise TypeError(f"Only {self.allowed_type.__name__} instances allowed")

    def add_event(self, event):
        self._check_type(event)
        self.events.append(event)

    def add_multiple_events(self, multiple_events:list):
        for event in multiple_events:
            self._check_type(event)
        self.events.extend(multiple_events)

    def get_events(self):
        return self.events

    def clear_events(self):
        self.events = []