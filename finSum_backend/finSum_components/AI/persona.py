from llama_cpp import Llama

class persona :
    def __init__(self):
        self.age : int
        self.gender: str
        self.salary: float
        # self.player_name: str
        self.career_path: list
        self.upbringing: list
        self.financial_obligations: list
        self.life_events: list
        self.personal_interests: list
        self.education_level: list
        self.MODEL_PATH = "C:/Users/HP ZBOOK/Documents/Seo Suggestion Model/models/tinyllama-1.1b-chat-v1.0.Q8_0.gguf"

    def create_persona(self, **args):
        
        llm = Llama(
            model_path=self.MODEL_PATH,
            n_ctx=4096,
            n_threads=4,
            n_gpu_layers=20  # 👉 runs first 20 layers on GPU, rest on CPU
        )

        prompt = f"""
            > Please generate a detailed biography of a fictional person aged between 20 and 45 years old. The biography should primarily highlight their financial journey and major socio-economic events that have influenced their life so far.
            >
            > The biography should include:
            >
            >  Early financial background and upbringing related to socio-economic status.
            >  Key career milestones and salary progression.
            >  Major financial obligations (e.g., debts, loans, family support).
            >  Notable life events with financial impact (e.g., buying a home, investments, losses, unexpected expenses).
            >  Educational background as it relates to career and financial growth.
            >  Personal interests that may affect spending or saving habits.
            >
            > The tone should be realistic and relatable, reflecting typical challenges and opportunities faced by adults in this age group. The narrative should balance successes and setbacks to show a nuanced financial life.

        """

        # Run the model
        output = llm(prompt, max_tokens=512,stop=["\n\n", "###"])

        # Print output
        print("🔍 Suggestions:")
        print(output)

        








