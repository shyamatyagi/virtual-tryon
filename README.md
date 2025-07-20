<h1 align="center">💍 Virtual Try-On</h1>


## ✨ Overview

**Virtual Try-On** is a fully client-side web app that lets users try on **rings** and **necklaces** using their webcam. It uses **MediaPipe** and **HTML5 Canvas** to overlay jewelry onto live video in real-time — tracking your **face** and **hands** automatically.

## 🚀 Features

- 🔮 **Face & Hand Tracking** via [MediaPipe](https://google.github.io/mediapipe/)
- 💍 **Ring detection** on both hands — automatically placed on **ring finger**
- 💎 **Necklace detection** below the chin using **FaceMesh**
- 🔄 **Dynamic resizing** sliders for ring and necklace scale
- 🖼️ Interactive **product switcher** (select different rings/necklaces)
- 🛒 **Add to Cart** and **Upload** buttons (placeholders for future use)

---

## 🛠️ Tech Stack

| Tech          | Use                                         |
|---------------|----------------------------------------------|
| HTML5 / CSS3  | UI & Layout                                 |
| JavaScript    | Logic and rendering                         |
| MediaPipe     | Hand & Face Landmark Detection              |
| Canvas API    | Drawing ring/necklace overlays              |           |

---

## 🎯 How It Works

| Jewelry Type | Detection Method      | Landmark Used            |
|--------------|-----------------------|---------------------------|
| Necklaces    | MediaPipe FaceMesh    | Chin (Landmark `152`)     |
| Rings        | MediaPipe Hands       | Ring Finger Base (`13`)   |

Each frame from the webcam is processed using MediaPipe. Based on the detected landmarks, the selected image (ring/necklace) is drawn onto a `<canvas>` layer at the right position, scaled by a user-controlled slider.

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shyamatyagi/virtual-tryon.git
cd virtual-tryon
```

