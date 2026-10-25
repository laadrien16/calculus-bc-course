---
title: Inverse Functions & The Implicit Differentiation Bridge
description: Connecting implicit derivatives and inverse trigonometric functions to parametric rate analysis.
---

## 1. The Core Calculus AB Bridge

In class, you differentiated implicit curves and developed the derivative of inverse functions[cite: 1, 5]. Rather than treating these as isolated tricks, notice how they operate as direct consequences of the **Chain Rule**[cite: 1, 5].

### The General Inverse Function Derivative
Let $g(x) = f^{-1}(x)$. By definition:
$$f(g(x)) = x$$

Differentiating both sides implicitly with respect to $x$[cite: 5]:
$$f'(g(x)) \cdot g'(x) = 1 \implies (f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}$$

:::tip[College Board FRQ Pattern]
On Free-Response questions, you are rarely given explicit formulas for $f(x)$. Instead, you are given a table of values:
- Find $(f^{-1})'(3)$ given that $f(2) = 3$ and $f'(2) = 5$.
- Because $f(2) = 3$, we know $f^{-1}(3) = 2$.
- Therefore, $(f^{-1})'(3) = \frac{1}{f'(2)} = \frac{1}{5}$.
:::

---

## 2. Inverse Trigonometric Derivatives

Using implicit differentiation on a right triangle gives us the core inverse trig derivatives:

$$\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1 - x^2}}$$

$$\frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1 - x^2}}$$

$$\frac{d}{dx}[\arctan x] = \frac{1}{1 + x^2}$$

:::note[Scout Ahead to Phase 2: Early Integration]
Keep $\frac{d}{dx}[\arctan x] = \frac{1}{1 + x^2}$ firmly in mind. When we scout ahead into **Partial Fraction Decomposition** in December, any irreducible quadratic denominator $\int \frac{1}{x^2 + a^2} dx$ integrates directly into an arctangent form.
:::

---

## 3. The Leap to BC: Parametric Slopes

In AP Calculus BC, curves are frequently traced by a particle over time $t$, where:
$$x = x(t), \quad y = y(t)$$

Just like implicit differentiation where $y$ is tied to $x$[cite: 5], here both $x$ and $y$ are tied to parameter $t$.

By the Chain Rule:
$$\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt} \implies \frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} \quad \left(\text{if } \frac{dx}{dt} \neq 0\right)$$

### The Infamous Second Derivative Trap
$$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left[\frac{dy}{dx}\right]}{\frac{dx}{dt}}$$

:::danger[College Board Point Deduction]
Never compute $\frac{d^2y}{dx^2}$ as $\frac{d^2y/dt^2}{d^2x/dt^2}$. You must take the derivative of your first slope with respect to $t$, and divide by $\frac{dx}{dt}$ once more.
:::

---

## 4. Interactive Sandbox

Experiment with the parametric curve below by observing how horizontal and vertical velocity vectors compose into the tangent line $\frac{dy}{dx}$:

<iframe src="https://www.desmos.com/calculator/imwnz0xow8?embed" width="100%" height="450" style="border: 1px solid #333; border-radius: 8px;" frameborder=0></iframe>