#!/usr/bin/env python3
"""coroutine called async_generator that takes no arguments."""

import asyncio
import random


async def async_generator():
    """ Coroutine that yields 10 random float numbers
    between 0 and 10, with 1-seconde pause between each.
    Yields:
    float: A random float between 0 and 10
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
