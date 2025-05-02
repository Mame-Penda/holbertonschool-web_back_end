#!/usr/bin/env python3


def insert_school(mongo_collection, **kwargs):
    """inserts a new document in a collection based on kwargs
    Args:
    mongo_collection: the pymongo collection object
    **kwargs: Arbitrary keyword arguments
    Returns:
    The new _id of the inserted document
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
