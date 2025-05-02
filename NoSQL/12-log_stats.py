#!/usr/bin/env python3
"""Script that provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    # Total number of logs
    log_count = collection.count_documents({})
    print(f"{log_count} logs")

    # Count methods
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        method_count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_count}")

    # Count specific GET requests to path `/status`
    status_check_count = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check_count} status check")
