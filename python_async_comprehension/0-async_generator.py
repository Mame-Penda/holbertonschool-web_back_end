#!/usr/bin/env python3
"""coroutine called async_generator that takes no arguments."""

import asyncio
import random
import logging
from typing import AsyncGenerator

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


async def async_generator() -> AsyncGenerator[float, None]:
    """ Coroutine that yields 10 random float numbers
    between 0 and 10, with 1-seconde pause between each.
    Yields:
    float: A random float between 0 and 10
    """
    for _ in range(10):
        try:
            await asyncio.sleep(1)
            yield random.uniform(0, 10)

        except (ValueError, RuntimeError) as e:
            logger.error(f"An expected error occured: {e}")
            break
        except Exception as e:
            logger.critical(f"Unexpected error: {e}", exc_info=True)
            raise
