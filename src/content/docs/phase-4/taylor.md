---
title: Taylor Polynomials & Error Bounds
description: Generating polynomial approximations and bounding remainder terms.
---

## 1. General Taylor & Maclaurin Series

$$P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(c)}{k!} (x - c)^k$$

### Essential Maclaurin Series Bases ($c = 0$)
$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots \quad (|x| < 1)$$
$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$$
$$\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$$
$$\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$$

## 2. Lagrange Error Bound

For an $n$-th degree Taylor polynomial approximating $f(x)$ centered at $c$:

$$|R_n(x)| \le \frac{M}{(n+1)!} |x - c|^{n+1}$$

where $M = \max |f^{(n+1)}(t)|$ on the interval between $c$ and $x$.