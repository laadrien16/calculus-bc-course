---
title: Partial Fractions & Improper Integrals
description: Rational decompositions, arctangent forms, and unbounded limits.
---

## 1. Partial Fraction Decomposition (Linear Factors)

Split rational expressions with factorable denominators before integrating:
$$\frac{1}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$$

Use the Heaviside cover-up method or solve the system of linear equations to isolate $A$ and $B$.

## 2. Improper Integrals

Integrals with infinite limits or interior vertical asymptotes require formal limits[cite: 2]:

$$\int_{1}^{\infty} \frac{1}{x^p} \, dx = \lim_{b \to \infty} \int_{1}^{b} \frac{1}{x^p} \, dx$$

:::caution[AP Grading Requirement]
You will lose full points on an FRQ if you compute with $\infty$ as a standard number. You must explicitly write $\lim_{b \to \infty}$[cite: 2].
:::