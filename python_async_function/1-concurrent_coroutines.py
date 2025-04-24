#!/usr/bin/env python3
"""an asynchronous coroutine that takes in an integer argument"""

from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    list = []
    for i in range(n):
        delay = await wait_random(max_delay)
        list.append(delay)
    return sorted(list)
