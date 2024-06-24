import pandas as pd
import random
import json
import os

def read_json_file():
    with open("template.json") as file:
        return json.load(file)

def read_names_file():
    first_names = []
    last_names = []

    with open("name_list.csv") as file:
        data = pd.read_csv("name_list.csv")

        for i in data["First_Name"]:
            first_names.append(i)

        for i in data["Last_Name"]:
            last_names.append(i)

    return first_names, last_names

def get_random_twenty(first_names, last_names):
    names = []

    for i in range(20):
        number = random.randint(0, 99)

        if first_names[number] in names:
            raise "duplicate names"
        
        names.append('"'+first_names[number] + "." + last_names[number]+'",')

    for i in names:
        print(i)


if __name__ == "__main__":
    data = read_json_file()
    first_names, last_names = read_names_file()

    """for i in range(len(last_names)):
        test = {
            "first_name": first_names[i],
            "last_name": last_names[i],
            "user": first_names[i]+"."+last_names[i],
            "password": "Password",
            "email": first_names[i]+"."+last_names[i]+"@my.tccd.edu",
            "assignments":data["assignments"]
            }
        
        with open("names/"+first_names[i]+"."+last_names[i]+".json", "w") as file:
            json.dump(test, file)"""
    
    get_random_twenty(first_names, last_names)