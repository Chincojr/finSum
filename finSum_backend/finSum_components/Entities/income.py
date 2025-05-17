from finSum_backend.finSum_components.Utitlites.helpers import create_random_string

class income:
    def __init__(self):
        self.portfolio_id: str        
        self.player_id: float
        self.stocks: list
        
    def assign_portfolio_id(self, length=15):        
        self.portfolio_id = create_random_string(length)

        


