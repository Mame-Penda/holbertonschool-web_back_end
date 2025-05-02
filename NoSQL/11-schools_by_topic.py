#!/usr/bin/env python3
""" function that returns the list of school having a specific topic"""


def schools_by_topics(mongo_collection, topic):
    """return the list of school"""
    return mongo_collection.find({"topics": topic})
