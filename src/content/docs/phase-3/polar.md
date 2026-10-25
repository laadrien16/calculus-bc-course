---
title: Polar Calculus
description: Derivatives and enclosed area integrals in polar coordinates.
---

## 1. Conversions & Polar Slopes

Given $r = f(\theta)$:
$$x = r\cos\theta, \quad y = r\sin\theta$$

$$\frac{dy}{dx} = \frac{\frac{dy}{d\theta}}{\frac{dx}{d\theta}} = \frac{r'\sin\theta + r\cos\theta}{r'\cos\theta - r\sin\theta}$$

## 2. Polar Area Integral

Accumulating infinitesimal circular sectors of area $dA = \frac{1}{2}r^2 d\theta$:

$$A = \frac{1}{2} \int_{\alpha}^{\beta} [r(\theta)]^2 \, d\theta$$

Between two curves:
$$A = \frac{1}{2} \int_{\alpha}^{\beta} \left([r_{\text{outer}}]^2 - [r_{\text{inner}}]^2\right) \, d\theta$$