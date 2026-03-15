import pandas as pd
from sklearn.linear_model import LogisticRegression
import pickle

# Load dataset
data = pd.read_csv("placement_data.csv")

X = data[["cgpa","skills_score"]]
y = data["placed"]

# Train model
model = LogisticRegression()
model.fit(X,y)

# Save model
pickle.dump(model,open("model.pkl","wb"))

print("Model trained successfully")