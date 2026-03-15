import pickle
import sys
import os
import warnings

warnings.filterwarnings("ignore")

current_dir = os.path.dirname(__file__)
model_path = os.path.join(current_dir, "model.pkl")

model = pickle.load(open(model_path, "rb"))

# Inputs
cgpa = float(sys.argv[1])
dsa = float(sys.argv[2])
aptitude = float(sys.argv[3])
projects = float(sys.argv[4])
internships = float(sys.argv[5])
certifications = float(sys.argv[6])
communication = float(sys.argv[7])
skills = float(sys.argv[8])

features = [[
    cgpa,
    dsa,
    aptitude,
    projects,
    internships,
    certifications,
    communication,
    skills
]]

prediction = model.predict(features)
prob = model.predict_proba(features)[0][1]

print(int(prediction[0]), round(prob*100,2))