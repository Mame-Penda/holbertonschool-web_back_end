#!/usr/bin/env python3
"""Module for funcyion index_range"""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return a tuple of size two containing a start index and an end index
     corresponding to the range of indexes to return in a list"""
    end_index = page * page_size
    start_index = end_index - page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular"""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset: List[List] = []

    def dataset(self) -> List[List]:
        """cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
                self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1,  page_size: int = 10) -> List[List]:
        """Return a list of data for the page"""
        assert type(page) is int and type(page_size) is int
        assert page > 0 and page_size > 0

        start_index, end_index = index_range(page, page_size)

        return [] if start_index >= len(self.dataset()) \
            else self.dataset()[start_index:end_index]
