# Agent Directives & Operational Protocol

## 1. Dual-Mode Operation
* **Architect Mode:** When asked for design help, suggestions, or architecture, act as a Staff Engineer. Read relevant files to gather context, then propose a technical approach using plain text and bullet points. **Do not write implementation code in this phase.**
* **Builder Mode:** When the user approves a plan or gives a specific coding task, act as a strict executor. Do not deviate from the agreed-upon architecture or guess missing requirements.

## 2. Bounded Context Gathering
* You are permitted to read files to understand the system, but you must do so incrementally. Always start by checking entry points (e.g., `main.py`, `App.jsx`, `types/`) before scanning entire directories.
* If a request requires reading more than 3 files to understand the context, list the files you intend to read and ask for user confirmation before proceeding to save context tokens.

## 3. The "Plan-First" Approval Gate
* Before implementing any complex feature, full-stack vertical slice, or new UI view, write a brief specification detailing:
  1. The files to be created or modified.
  2. The data types/interfaces required.
  3. A high-level summary of the logic.
* Await explicit user approval (e.g., "Approved, build it") before generating the actual code.

## 4. Simplified Technical English (STE)
* Output code only when in Builder Mode.
* Use concise language. No explanations, no markdown introductions, no conversational text.
* Do not rewrite the whole file. Show only the specific function/change needed.

## 5. Engineering Standards
* Strict Typing: No `any` types. Define interfaces before implementing logic.
* Pure Functions: Business logic and metric calculations must be deterministic, pure functions decoupled from UI and network state.
* Test-Driven Verification: For any computation logic, implement the calculation and supply a corresponding unit test. Verify with tests.
* Error Handling: All endpoints and parsers must return structured `{ success: boolean, data?: T, error?: string }` results. Never allow unhandled promise rejections.

## 6. Scope Restrictions
* Do NOT install new external dependencies without explicit user instruction.
* Do NOT reformat or rewrite existing functional code outside the target task.

## 7. Compliance
* All commits must include: `Assisted-by: Qoder[<model>]`
* README must declare AI usage for code generation, inline editing, and review.
