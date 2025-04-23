#!/usr/bin/env python3

"""Module provides a function that returns a tuple"""


from typing import Iterable, List, Sequence, Tuple


def element_length(Lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """

    Args:
    Lst: Iterable[sequence]

    Returns:
    A list of tuples
    """

    return [(i, len(i)) for i in Lst]
