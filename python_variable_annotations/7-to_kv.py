#!/usr/bin/env python3

"""Module provides a function that returns a tuple"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """

    Args:
    k: str
    v: Union[int, float]

    Returns:
    tuple with k and v*v
    """

    return (k, v ** 2)
