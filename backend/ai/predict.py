import pickle
import sys
import os
import warnings

warnings.filterwarnings("ignore")

current_dir = os.path.dirname(__file__)
model_path = os.path.join(current_dir, "model.pkl")

model = pickle.load(open(model_path, "rb"))

cgpa = float(sys.argv[1])
skills = float(sys.argv[2])

prediction = model.predict([[cgpa, skills]])

print(int(prediction[0]))