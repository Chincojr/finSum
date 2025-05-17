import random
import string

def create_random_string(length=10):
    """
    Generate a random string of fixed length.
    :param length: Length of the random string to be generated.
    :return: Random string of specified length.
    """
    alphabet = string.ascii_letters + string.digits
    return ''.join(random.choices(alphabet, k=length))

all_event_types = [
    "career_path",
    "upbringing",
    "financial_obligations",
    "calamities",
    "personal_interests",
    "education_level"
]