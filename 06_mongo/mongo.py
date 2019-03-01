# Alex Liu, Josh Weiner
# SoftDev2 pd6
# K06 -- Yummy Mango Py
# 2019-02-28

import pymongo

SERVER_ADDR = "167.99.158.108"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

# All restaurants in a specified borough.
def get_borough(borough):
    return collection.find( {'borough': borough} )

# All restaurants in a specified zip code.
def get_zipcode(zipcode):
    return collection.find( {'address.zipcode': zipcode} )

# All restaurants in a specified zip code and with a specified grade.
def get_zip_grade(zipcode, grade):
    return collection.find( {'address.zipcode': zipcode, 'grades.grade': grade} )

# All restaurants in a specified zip code with a score below a specified threshold.
def get_zip_score(zipcode, score):
    return collection.find( {'address.zipcode': zipcode, 'grades.score': {'$lt': score} } )

# Something more clever
def get_zip_grade_score(zipcode, grade, score):
    return collection.find( {'address.zipcode': zipcode, 'grades.grade': grade, 'grades.score': {'$gt': score} } )

def display_restaurants(collection):
    for i in collection:
        print(i)


display_restaurants(get_borough("Brooklyn"))
display_restaurants(get_zipcode("11364"))
display_restaurants(get_zip_grade("11364", "B"))
display_restaurants(get_zip_score("11364", 5))
display_restaurants(get_zip_grade_score("11364", "C", 20))
