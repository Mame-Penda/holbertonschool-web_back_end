#!/usr/bin/env python3
"""coroutine called async_generator that takes no arguments."""
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """Coroutine collect 10 random numbers using async_comprehension"""
    return [number async for number in async_generator()]
