import firebase_admin
from firebase_admin import credentials, db

# Initialize Firebase with your credentials
cred = credentials.Certificate("iot-based-smart-parking-be092-firebase-adminsdk-fbsvc-34885a425b.json")
firebase_admin.initialize_app(cred, {"databaseURL": "https://iot-based-smart-parking-be092-default-rtdb.firebaseio.com/"})

# Update slot data
ref = db.reference("/parking")
ref.set({"slot1": "FULL", "slot2": "FULL"})

print("Updated Firebase successfully!")
