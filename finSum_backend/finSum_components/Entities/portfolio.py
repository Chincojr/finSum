from finSum_backend.finSum_components.Utitlites.helpers import create_random_string

class portfolio :
    def __init__(self):
        self.portfolio_id: str        
        self.portfolio_value: float
        self.stocks: list
        self.bonds: list
        
    def assign_portfolio_id(self, player_id):        
        # self.portfolio_id = create_random_string(length)
        pass

    def create_portfolio(self, **args):
        self.assign_portfolio_id(args.get("player_id"))
        # self.portfolio_value = args.get("portfolio_value", 0.0)
        # self.stocks = args.get("stocks", [])
    
    def save_portfolio(self):
        # Save the portfolio to the database
        pass


