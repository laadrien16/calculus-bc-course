---
title: Infinite Series Convergence Tests
description: The master decision matrix for the 10 convergence tests.
---

## The Decision Tree

1. **$n$-th Term Test:** If $\lim_{n \to \infty} a_n \neq 0$, the series **diverges** immediately.
2. **Geometric Series:** $\sum ar^n$ converges if and only if $|r| < 1$, with sum $S = \frac{a}{1-r}$.
3. **$p$-Series:** $\sum \frac{1}{n^p}$ converges if and only if $p > 1$.
4. **Alternating Series Test (AST):** Converges if terms decrease in absolute magnitude and $\lim_{n \to \infty} |a_n| = 0$.
5. **Ratio Test:** Compute $L = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|$:
   - $L < 1 \implies$ Absolutely Convergent
   - $L > 1 \implies$ Divergent
   - $L = 1 \implies$ Inconclusive (must use another test)