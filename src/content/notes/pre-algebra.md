---
title: "Pre-Algebra"
description: "BJU Press Pre-Algebra 核心知识点与代数基础结构化汇总"
category: "BJU PRESS"
cover: "/images/notes-cover-1.jpg"
order: 1
---

## Chapter 1: 基础运算与代数逻辑

### 🌟 四则运算与绝对值
1. **加法 (Addition)** & **减法 (Subtraction)**：利用数轴理解。减去一个数等于加上它的相反数。
2. **乘法 (Multiplication)** & **除法 (Division)**：同号得正，异号得负。乘除法均满足交换律和结合律。
3. **绝对值 (Absolute Value)**：计算整数的距离，忽略符号，如 $|-5| = 5$。

### 🌟 指数运算 (Exponents)
若 $a$ 是实数，$n$ 是正整数，则幂的定义为：
$$
a^n = \underbrace{a \times a \times \cdots \times a}_{n\text{个}a}
$$

**核心指数法则：**
* **同底数相乘**：$a^m \times a^n = a^{m+n}$
* **同底数相除**：$\frac{a^m}{a^n} = a^{m-n} \quad (a \ne 0)$
* **幂的乘方**：$(a^m)^n = a^{m \times n}$
* **积的乘方**：$(ab)^n = a^n \times b^n$
* **商的乘方**：$\left( \frac{a}{b} \right)^n = \frac{a^n}{b^n} \quad (b \ne 0)$
* **零指数**：$a^0 = 1 \quad (a \ne 0)$
* **负指数**：$a^{-n} = \frac{1}{a^n} \quad (a \ne 0)$

> **🐲 百部综合例题：**
> 求解：$\frac{(2^3)^2 \times 2^{-4}}{2^3}$
> **步骤：**
> 1. 分子乘方：$(2^3)^2 = 2^6$
> 2. 分子相乘：$2^6 \times 2^{-4} = 2^2$
> 3. 上下相除：$2^2 \div 2^3 = 2^{-1} = \frac{1}{2}$

---

### 🌟 小数运算的底层逻辑
**核心原理：等价变换原则**。当一个式子中，同时对分子与分母（或被除数与除数）乘以或除以相同的非零数时，结果不变。

$$
\frac{a}{b} = \frac{a \times k}{b \times k} \quad (k \ne 0)
$$

**去小数点的数学依据**（如 $2.4 \div 0.3$）：
$$
\frac{2.4}{0.3} = \frac{2.4 \times 10}{0.3 \times 10} = \frac{24}{3} = 8
$$

---

## Chapter 2: 代数性质与运算律

### 🌟 三大核心运算律
1. **结合律 (Associative Law)**：改变括号顺序不影响结果（仅适用加、乘）。
   * 加法：$(a + b) + c = a + (b + c)$
   * 乘法：$(a \times b) \times c = a \times (b \times c)$
2. **交换律 (Commutative Law)**：交换位置不改变结果（仅适用加、乘）。
   * 加法：$a + b = b + a$
   * 乘法：$a \times b = b \times a$
3. **分配律 (Distributive Law)**：乘法分配到加/减法上。
   * $a \times (b + c) = ab + ac$

> **💡 特殊情况：除法的“分配”性质**
> $$\frac{a + b}{c} = \frac{a}{c} + \frac{b}{c}$$

---

## Chapter 3: 方程与不等式

### 🌟 方程的解法 (Solving Equations)
* **等式性质**：方程两边同加减、同乘除相同的数（非零），等式依然成立。
* **逆运算 (Inverse Operations)**：用加法抵消减法，用除法抵消乘法，层层剥离求出未知数。

### 🌟 不等式 (Inequalities)
不等式表示大小关系（$<, >, \le, \ge$）。解法与方程类似，但有一个**绝对铁律**：
> ⚠️ **百部警报：** 当对不等式两边**乘以或除以负数**时，不等式的方向**必须反转**！
> 例：$-2x < 8 \Rightarrow x > -4$

---

## Chapter 4: 数列与因数

### 🌟 等差与等比数列
* **等差数列 (Arithmetic Sequence)**：存在公差 $d$。
  $$a_n = a_1 + (n - 1)d$$
* **等比数列 (Geometric Sequence)**：存在公比 $r$。
  $$a_n = a_1 \times r^{n-1}$$

### 🌟 最大公因数 (GCF) & 最小公倍数 (LCM)
* **辗转相除法求 GCF**：如求 $gcd(48, 18)$。
  $48 \div 18 = 2 \dots 12 \Rightarrow 18 \div 12 = 1 \dots 6 \Rightarrow 12 \div 6 = 2 \dots 0$。故 $GCF = 6$。
* **求 LCM**：
  $$LCM(a, b) = \frac{|a \times b|}{gcd(a, b)}$$

---

## Chapter 5 & 6: 有理数与比率

### 🌟 比例与比率 (Ratio and Rate)
* **比率的本质 = 除法**。表示每单位 $b$ 的量有多少单位 $a$。
* **解比例 (Proportions)**：利用交叉相乘法。
  $$\frac{a}{b} = \frac{c}{d} \Rightarrow a \times d = b \times c$$

### 🌟 代数式的化简
合并同类项（具有相同变量和指数的项），并利用分配律展开。
例：$3x + 5x = 8x$，以及 $2(x + 3) = 2x + 6$。

---

## Chapter 7: 百分数 (Percents)

### 🌟 核心公式
所有百分数问题都围绕这个核心：
$$\text{Part} = \text{Percent} \times \text{Whole} \quad (p = r \times w)$$

### 🌟 常见应用场景
1. **比例尺 (Scales)**：$\frac{\text{图上距离}}{\text{实际距离}} = \text{比例尺}$
2. **折扣 (Discount)**：$\text{折后价} = \text{原价} - (\text{原价} \times \text{折扣率})$
3. **加价 (Markup)**：$\text{零售价} = \text{成本} + (\text{成本} \times \text{加价率})$
4. **单利 (Simple Interest)**：$I = P \times R \times T$
5. **百分变化 (Percent Change)**：
   $$\text{Percent Change} = \frac{\text{New} - \text{Old}}{\text{Old}} \times 100\%$$

---

## Chapter 8: 方程与不等式的深度应用

### 🌟 未知数在两边的方程
**解题原则**：先消去一边的变量项（移项集中变量），再移常数项。
$$8x + 4 = 6x + 10 \Rightarrow 2x = 6 \Rightarrow x = 3$$

### 🌟 不等式应用翻译
* **至少 (at least)** $\Rightarrow \ge$
* **至多 (at most)** $\Rightarrow \le$
* **不超过 (no more than)** $\Rightarrow \le$

---

## Chapter 9: 关系与函数 (Relations and Functions)

### 🌟 函数的判定与斜率
* **函数 (Function)**：每个 $x$ 对应唯一的 $y$。可用垂线测试判断。
* **斜率 (Slope, $m$)**：
  $$m = \frac{y_2 - y_1}{x_2 - x_1}$$

### 🌟 线性函数方程
* **斜截式 (Slope-Intercept Form)**：
  $$y = mx + b$$
* **正比例 (Direct Variation)**：$y = kx$

---

## Chapter 10: 统计与概率

### 🌟 统计特征量
* **平均数 (Mean)**、**中位数 (Median)**、**众数 (Mode)**、**极差 (Range)**。

### 🌟 概率与计数 (Probability & Counting)
* **排列 (Permutations)**：$P(n, r) = \frac{n!}{(n-r)!}$
* **组合 (Combinations)**：$C(n, r) = \frac{n!}{r!(n-r)!}$
* **概率公式**：$P(\text{事件}) = \frac{\text{有利结果数}}{\text{总可能结果数}}$

---

## Chapter 11: 根式 (Radicals)

### 🌟 根式的性质与运算
* **乘除法则**：$\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$
* **有理化分母**：$\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$

### 🌟 勾股定理 (Pythagorean Theorem)
$$a^2 + b^2 = c^2$$

---

## Chapter 12 & 13: 几何图形、面积与体积

### 🌟 常见面积公式
* **平行四边形**：$A = bh$
* **三角形**：$A = \frac{1}{2}bh$
* **圆**：$A = \pi r^2$

### 🌟 立体几何体积公式
* **柱体**：$V = Bh$
* **锥体**：$V = \frac{1}{3}Bh$
* **球体**：$V = \frac{4}{3}\pi r^3$

---

## Chapter 14: 多项式 (Polynomials)

### 🌟 多项式的乘法
**二项式相乘 (FOIL 法则)**：
$$(x+3)(x+5) = x^2 + 8x + 15$$

**乘法公式**：
* 平方差：$(a+b)(a-b) = a^2 - b^2$
* 完全平方和：$(a+b)^2 = a^2 + 2ab + b^2$
* 完全平方差：$(a-b)^2 = a^2 - 2ab + b^2$