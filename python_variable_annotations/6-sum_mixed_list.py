#!/usr/bin/env python3

"""Module provides a function that returns the sum float."""


from typing import List


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """

    Args:
    mxd_list: List[Union[int, float]]

    Returns:
    sum of the list as a float
    """

    return sum(mxd_list)
