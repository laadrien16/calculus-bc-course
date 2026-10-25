---
title: Euler's Method & Logistic Differential Models
description: Tangent line numerical stepping and carrying capacity limits.
---

## 1. Euler's Method (Numerical Approximation)

Step along tangent lines using step size $\Delta x$:
$$x_{n+1} = x_n + \Delta x$$
$$y_{n+1} = y_n + \left.\frac{dy}{dx}\right|_{(x_n, y_n)} \cdot \Delta x$$

| Step $n$ | $x_n$ | $y_n$ | $\frac{dy}{dx}$ | $\Delta y = \frac{dy}{dx}\Delta x$ | $y_{n+1} = y_n + \Delta y$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | $x_0$ | $y_0$ | $f'(x_0, y_0)$ | $\dots$ | $\dots$ |

## 2. The Logistic Model

$$\frac{dP}{dt} = kP\left(1 - \frac{P}{M}\right)$$

* **$M$**: Carrying capacity ($\lim_{t \to \infty} P(t) = M$).
* **Maximum Growth Rate**: Occurs at exactly half the carrying capacity, $P = \frac{M}{2}$.
* **Inflection Point**: The graph of $P(t)$ switches from concave up to concave down at $P = \frac{M}{2}$.