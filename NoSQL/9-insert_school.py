#!/usr/bin/env python3
""" Insert a document in a MongoDB collection """


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in the given collection using kwargs
    Args:
        mongo_collection: The pymongo collection object
        **kwargs: Arbitrary keyword arguments representing the document fields
    Returns:
        The _id of the newly inserted document
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
