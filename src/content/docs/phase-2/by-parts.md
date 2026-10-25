---
title: Integration by Parts (IBP)
description: Reversing the Product Rule and mastering tabular integration.
---

## 1. Derivation from the Product Rule

Starting with $\frac{d}{dx}[uv] = u \frac{dv}{dx} + v \frac{du}{dx}$ and integrating both sides[cite: 2]:

$$\int u \, dv = uv - \int v \, du$$

## 2. Choosing $u$ with LIATE
Select $u$ in descending order of priority:
1. **L**ogarithmic ($\ln x$)
2. **I**nverse Trigonometric ($\arctan x, \arcsin x$)
3. **A**lgebraic ($x^2, 3x$)
4. **T**rigonometric ($\sin x, \cos x$)
5. **E**xponential ($e^x, 2^x$)

## 3. The Tabular Shortcut
For polynomials paired with sinusoids or exponentials (e.g., $\int x^3 e^{2x} \, dx$), differentiate the polynomial down to 0 while repeatedly integrating the other factor, alternating signs $+ - + -$.