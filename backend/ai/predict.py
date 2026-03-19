import pickle
import sys
import os
import warnings
import json

warnings.filterwarnings("ignore")

# Get model path
current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, "model.pkl")

# Load model
with open(model_path, "rb") as f:
    model = pickle.load(f)

try:
    # Read inputs from command line
    cgpa = float(sys.argv[1])
    dsa = float(sys.argv[2])
    aptitude = float(sys.argv[3])
    projects = float(sys.argv[4])
    internships = float(sys.argv[5])
    certifications = float(sys.argv[6])
    communication = float(sys.argv[7])
    skills = float(sys.argv[8])

    features = [[
    max(0, min(10, cgpa)),
    max(0, min(100, dsa)),
    max(0, min(100, aptitude)),
    max(0, projects),
    max(0, internships),
    max(0, certifications),
    max(0, min(100, communication)),
    max(0, min(100, skills))
]]
    # Prediction
    prediction = int(model.predict(features)[0])

    # Probability (confidence)
    if hasattr(model, "predict_proba"):
        probability = float(model.predict_proba(features)[0][1]) * 100
    else:
        probability = 0

    result = {
        "prediction": prediction,
        "confidence": round(probability, 2)
    }

    print(json.dumps(result))

except Exception as e:
    print(json.dumps({
        "error": str(e)
    }))