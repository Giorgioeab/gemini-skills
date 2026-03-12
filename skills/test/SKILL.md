---
name: test
description: Use esta skill para criar, executar e revisar testes com cobertura.
---

# /test — Test Generation and Execution

## Overview

Generates tests, runs existing tests, or checks test coverage. Follows the test pyramid (Unit > Integration > E2E) and Arrange-Act-Assert pattern.

## Sub-commands

```
/test                — Run all tests
/test [file/feature] — Generate tests for specific target
/test coverage       — Show test coverage report
/test watch          — Run tests in watch mode
```

## Behavior

### Generate Tests

When asked to test a file or feature:

1. **Analyze the code** — Identify functions, edge cases, dependencies to mock
2. **Generate test cases** — Happy path, error cases, edge cases, integration
3. **Write tests** — Use project's test framework, follow existing patterns, mock externals

## Output Format

### For Test Generation

```markdown
## 🧪 Tests: [Target]

### Test Plan
| Test Case | Type | Coverage |
|-----------|------|----------|
| Should create user | Unit | Happy path |
| Should reject invalid email | Unit | Validation |
| Should handle db error | Unit | Error case |

### Generated Tests
[tests/[file].test.ts with code]

Run with: `npm test`
```

### For Test Execution

```
🧪 Running tests...

✅ auth.test.ts (5 passed)
✅ user.test.ts (8 passed)
❌ order.test.ts (2 passed, 1 failed)

Failed:
  ✗ should calculate total with discount
    Expected: 90
    Received: 100

Total: 15 tests (14 passed, 1 failed)
```

## Test Pattern

```typescript
describe('AuthService', () => {
  describe('login', () => {
    it('should return token for valid credentials', async () => {
      // Arrange
      const credentials = { email: 'test@test.com', password: 'pass123' };
      
      // Act
      const result = await authService.login(credentials);
      
      // Assert
      expect(result.token).toBeDefined();
    });

    it('should throw for invalid password', async () => {
      // Arrange
      const credentials = { email: 'test@test.com', password: 'wrong' };
      
      // Act & Assert
      await expect(authService.login(credentials)).rejects.toThrow('Invalid credentials');
    });
  });
});
```

## Key Principles

- **Test behavior not implementation**
- **One assertion per test** (when practical)
- **Descriptive test names**
- **Arrange-Act-Assert pattern**
- **Mock external dependencies**

## Examples

```
/test src/services/auth.service.ts
/test user registration flow
/test coverage
/test fix failed tests
```
