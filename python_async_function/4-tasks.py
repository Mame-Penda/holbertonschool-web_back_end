#!/usr/bin/env python3
"""execute multiple coroutines at the same time with async"""

import asyncio
from typing import List
wait_random = __import__('4-tasks').task_wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """return the results of all delay (float values)"""
    delay = [wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*delay)
    return sorted(results)
