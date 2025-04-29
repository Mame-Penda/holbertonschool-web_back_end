#!/usr/bin/env python3
"""coroutine called async_generator that takes no arguments."""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Coroutine collect 10 random numbers using async_comprehension"""
    randoms = [number async for number in async_generator()]
    return randoms
