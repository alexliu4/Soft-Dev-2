# Team Liusers: Claire Liu and Alex Liu
# SoftDev2 pd6
# K07: Import/Export Bank
# 2019-03-04

'''
https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
American movies scraped from Wikipedia (contains: year, genre, name, cast, director)
Import: open the movies.json file, loads data within the json file, inserted into our collection
'''

import pymongo
import json
server_address = "167.99.158.108"
connection = pymongo.MongoClient(server_address)
db = connection.Liusers
collection = db.movies

filename = "movies.json"
movielist = open(filename, "r")
movies = json.load(movielist)
collection.insert_many(movies)

def title_movie(title):
    return collection.find({'title': title})

def genre_movie(genre):
    return collection.find({'genre': genre})

def year_movie(year):
    return collection.find({'year': year})

def lessthan_year(year):
    return collection.find({'year': {'$lt': year}})

def year_and_genre(year, genre):
    return collection.find({'year': year, 'genre': genre})

def display(collection):
    for i in collection:
        print(i['title'])


# Testing
'''
print('----------TESTING YEAR------------')
display(year_movie(2015))
print('----------TESTING GENRE----------')
display(genre_movie("Comedy"))
'''
