---
title: Vector-Valued Functions & Kinematics
description: Crosswalk connecting Calculus BC planar motion to AP Physics 1 kinematics.
---

## 1. The Physics to Calculus Crosswalk

In AP Physics 1, 2D motion is analyzed by breaking vectors into orthogonal horizontal and vertical components. In AP Calculus BC, this is formalized using vector-valued functions:

$$\vec{r}(t) = \langle x(t), y(t) \rangle$$

### Velocity & Acceleration Vectors
Differentiating component-by-component:
$$\vec{v}(t) = \vec{r}'(t) = \langle x'(t), y'(t) \rangle$$
$$\vec{a}(t) = \vec{v}'(t) = \vec{r}''(t) = \langle x''(t), y''(t) \rangle$$

---

## 2. Speed vs. Velocity (The Essential Distinction)

* **Velocity** is a vector indicating direction and rate: $\vec{v}(t) = \langle x'(t), y'(t) \rangle$.
* **Speed** is a scalar quantity representing the magnitude of the velocity vector:

$$\text{Speed} = \|\vec{v}(t)\| = \sqrt{(x'(t))^2 + (y'(t))^2}$$

:::caution[Frequent College Board Trap]
- **Rate of change of speed:** $\frac{d}{dt}\left[\sqrt{(x')^2 + (y')^2}\right]$ (Requires Chain Rule).
- **Magnitude of acceleration:** $\|\vec{a}(t)\| = \sqrt{(x''(t))^2 + (y''(t))^2}$.
These two quantities are **not** equal.
:::

---

## 3. Total Distance Traveled (Scout Ahead to Integration)

Just as linear distance is $\int |v(t)|\,dt$, total arc length / distance traveled along a planar curve from $t = a$ to $t = b$ accumulates speed:

$$\text{Total Distance} = \int_{a}^{b} \sqrt{(x'(t))^2 + (y'(t))^2}\,dt$$

---

## 4. Interactive Kinematics Sandbox

Observe how horizontal velocity $v_x = x'(t)$ and vertical velocity $v_y = y'(t)$ combine into the tangent velocity vector:

<iframe src="https://www.desmos.com/calculator/b8v5lqpthe?embed" width="100%" height="450" style="border: 1px solid #333; border-radius: 8px;" frameborder=0></iframe>