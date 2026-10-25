---
title: Parametric Derivatives & Motion
description: Calculating first and second derivatives for parametric equations.
---

## 1. Core Formulas

For a curve defined parametrically by $x = f(t)$ and $y = g(t)$:

### First Derivative
$$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}, \quad \text{provided } \frac{dx}{dt} \neq 0$$

### Second Derivative (The Common Trap)
Notice that you differentiate $\frac{dy}{dx}$ with respect to $t$, not $x$:

$$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left[\frac{dy}{dx}\right]}{\frac{dx}{dt}}$$

:::caution[AP Trap]
Never calculate the second derivative as $\frac{d^2y/dt^2}{d^2x/dt^2}$. You must divide the derivative of the first slope by $\frac{dx}{dt}$.
:::