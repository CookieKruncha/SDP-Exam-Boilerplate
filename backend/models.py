from pydantic import BaseModel
from typing import Optional, List

# Example Model - Adapt during exam
class BaseMetric(BaseModel):
    id: str
    name: str
    value: float
    description: Optional[str] = None
