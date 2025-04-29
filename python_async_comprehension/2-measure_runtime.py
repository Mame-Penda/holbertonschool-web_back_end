#!/usr/bin/env python3
"""coroutine for the measure_runtime function."""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Coroutine collect 10 random numbers using async_comprehension"""
    startTime = time.time()
    await asyncio.gather(*[async_comprehension() for _ in range(4)])
    endTime = time.time()
    return endTime - startTime
