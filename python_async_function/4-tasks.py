#!/usr/bin/env python3
"""execute multiple tasks using task_wait_random"""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """return the results of all delay (float values)"""
    delay = [task_wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*delay)
    return sorted(results)
