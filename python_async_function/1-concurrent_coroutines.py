#!/usr/bin/env python3
"""an asynchronous coroutine that takes in an integer argument"""

import asyncio
from typing import List
from 0-basic_async.syntaxe import wait_random


async def wait_n(n: int, max_delay: int) -> list[float]:
    delays = [wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*delays)
    return sorted(results)
