#!/usr/bin/env python3
"""an asynchronous coroutine that takes in an integer argument"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """wait a random beetween 0 and max_delay second

    Args:
    max_delay (int): max_delay in second

    Returns:
    float: the delay actually waited
    """

    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
