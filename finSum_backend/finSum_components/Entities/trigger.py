from datetime import datetime
from finSum_backend.finSum_components.Utitlites.helpers import create_random_string


class trigger :
    def __init__(self):
        self.trigger_id: str
        self.trigger_description: str
        self.trigger_name: str
        self.time : datetime
        self.frequency: str
        self.event_id: str
        self.past_triggers: list
        self.action = None

    def assign_trigger_id(self, length=15):        
        self.trigger_id = create_random_string(length)
    
    def assign_trigger_description(self, description: str):
        if not isinstance(description, str):
            raise ValueError("trigger_description must be a string")
        self.trigger_description = description
    
    def assign_trigger_name(self, name: str):
        if not isinstance(name, str):
            raise ValueError("trigger_name must be a string")
        self.trigger_name = name
    
    def assign_time(self, time: datetime):
        if not isinstance(time, datetime):
            raise ValueError("time must be a datetime object")
        self.time = time
    
    def assign_frequency(self, frequency: str):
        if not isinstance(frequency, str):
            raise ValueError("frequency must be a string")
        self.frequency = frequency
    
    def assign_event_id(self, event_id: str):
        if not isinstance(event_id, str):
            raise ValueError("event_id must be a string")
        self.event_id = event_id