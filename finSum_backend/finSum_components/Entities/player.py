
from finSum_backend.finSum_components.Entities.event import event
from finSum_backend.finSum_components.Entities.portfolio import portfolio
from finSum_backend.finSum_components.DB.DBFunctions import MongoDB
from finSum_backend.finSum_components.Utitlites.helpers import create_random_string


class player:
    def __init__(self):
        self.player_id: str
        self.age : int
        self.gender: str
        self.salary: float
        self.player_name: str
        self.career_path: list
        self.upbringing: list
        self.financial_obligations: list
        self.life_events: list
        self.personal_interests: list
        self.education_level: list
        self.database =  "Players"
        self.collection = "Players_Collection"

    def create_player_id(self,length=10):        
        self.player_id = create_random_string(length)
    
    def assign_player_name(self, name: str):
        self.player_name = name

    def assign_gender(self, gender: str):
        if gender not in ("male", "female"):
            raise ValueError("gender must be 'male' or 'female'")
        self.status = gender

    def assign_age(self, age: int):
        if age < 0:
            raise ValueError("age must be a positive integer")
        self.age = age
    
    def assign_salary(self, salary: float):
        if salary < 0:
            raise ValueError("salary must be a positive float")
        self.salary = salary

    def assign_career_path(self, career_path_stories:list):        
        if not isinstance(career_path_stories, list):
            raise ValueError("career_path must be a list")

        self.career_path = []        
        for story in career_path_stories:
            career_story = event()
            career_story.create_event(**story)
            self.career_path.append(career_story)
        

    def assign_upbringing(self, upbringing_stories:list):
        if not isinstance(upbringing_stories, list):
            raise ValueError("upbringing must be a list")

        self.upbringing = []        
        for story in upbringing_stories:
            upbringing_story = event()
            upbringing_story.create_event(**story)
            self.upbringing.append(upbringing_story)

    def assign_financial_obligations(self, obligations:list):
        if not isinstance(obligations, list):
            raise ValueError("financial_obligations must be a list")

        self.financial_obligations = []        
        for obligation in obligations:
            financial_obligation = event()
            financial_obligation.create_event(**obligation)
            self.financial_obligations.append(financial_obligation)

    def assign_life_events(self, life_events:list):
        if not isinstance(life_events, list):
            raise ValueError("life events must be a list")

        self.life_events = []        
        for life_event in life_events:
            life_event_obj = event()
            life_event_obj.create_event(**life_event)
            self.life_events.append(life_event_obj)

    def assign_personal_interests(self, career_path:list):
        if not isinstance(career_path, list):
            raise ValueError("personal_interests must be a list")

        self.personal_interests = []        
        for interest in career_path:
            personal_interest = event()
            personal_interest.create_event(**interest)
            self.personal_interests.append(personal_interest)

    def assign_education_level(self, career_path:list):
        if not isinstance(career_path, list):
            raise ValueError("education_level must be a list")

        self.education_level = []        
        for education in career_path:
            education_event = event()
            education_event.create_event(**education)
            self.education_level.append(education_event)

    def save_player(self):
        db = MongoDB()
        db.connect()
        player_data = {
            "player_id": self.player_id,
            "name": self.player_name,
            "age" : self.age,
            "gender" : self.gender,
            "salary" : self.salary,
            "player_name" : self.player_name,
            "career_path" : self.career_path,
            "upbringing" : self.upbringing,
            "financial_obligations" : self.financial_obligations,
            "life_events" : self.life_events,
            "personal_interests" : self.personal_interests,
            "education_level" : self.education_level,
        }
        db.insert_document(self.database, self.collection, player_data)
        db.client.close()
    

    def create_player(self, **args):
        # Logic to create a player
        try:
            self.create_player_id()
            self.assign_player_name(args.get('player_name'))
            self.assign_gender(args.get('gender'))
            self.assign_age(args.get('age'))
            self.assign_salary(args.get('salary'))
            self.assign_career_path(args.get('career_path', []))
            self.assign_upbringing(args.get('upbringing', []))
            self.assign_financial_obligations(args.get('financial_obligations', []))
            self.assign_life_events(args.get('life_events', []))
            self.assign_personal_interests(args.get('personal_interests', []))
            self.assign_education_level(args.get('education_level', []))

            player_portfolio = portfolio()
            player_portfolio.create_portfolio(player_id=self.player_id)
            

            self.save_player()
        except Exception as err:
            print(f"Error creating player: {err}")
            raise


