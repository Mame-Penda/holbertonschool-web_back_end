#!/usr/bin/env python3

"""Module provides a function that returns a multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by the given multiplier.

    Args:
        multiplier (float): The number to multiply with.

    Returns:
        Callable[[float], float]:
    """

    def multiply(number: float) -> float:
        return number * multiplier

    return multiply
