---
title: Foundations of Integration & U-Substitution
description: Accumulation, the Fundamental Theorem of Calculus, and reversing the Chain Rule.
---

## 1. Reversing the Derivative

Integration operates as continuous accumulation and the inverse operation of differentiation[cite: 2]:

$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

## 2. The Chain Rule in Reverse ($u$-Substitution)

When integrating a composite function multiplied by its inner derivative:
$$\int f'(g(x)) g'(x) \, dx = f(g(x)) + C$$

Let $u = g(x)$, so $du = g'(x) \, dx$:
$$\int f'(u) \, du = f(u) + C$$

:::tip[Changing Definite Limits]
When evaluating definite integrals with $u$-substitution, convert your limits immediately:
$$\int_{a}^{b} f(g(x)) g'(x) \, dx = \int_{g(a)}^{g(b)} f(u) \, du$$
:::

## 3. Interactive Riemann Sum Accumulator
<iframe src="https://www.desmos.com/calculator/5kye1f9qlx?embed" width="100%" height="450" style="border: 1px solid #333; border-radius: 8px;" frameborder=0></iframe>