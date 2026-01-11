# 📱 React Native Mini App Case

Bu proje, **React Native geliştirici pozisyonu** için verilen teknik case kapsamında geliştirilmiştir.  
Uygulama; **login zorunluluğu bulunan**, **Yemek** ve **Market** olmak üzere iki ayrı mini uygulama içeren bir mimariye sahiptir.

---

## 🚀 Özellikler

- Kullanıcı login olmadan **Yemek** ve **Market** sekmelerine erişemez
- Başarılı login sonrası toast mesajı gösterilir  
  > “Giriş başarılı, hoş geldiniz.”
- Login durumu uygulama kapatılıp açıldığında da korunur (**persisted login**)
- **Bottom Tab + Stack Navigation** mimarisi
- **Redux Toolkit** ile global state yönetimi
- **TypeScript** ile geliştirilmiştir
- En az bir Redux slice için **unit test** eklenmiştir

---

## 🧭 Uygulama Akışı

### Ana Tab Yapısı
**[ Home ] – [ Yemek ] – [ Market ] – [ Profil ]**

### 🍔 Yemek Mini App Akışı
Home → Yemek → YemekAnaSayfa → YemekSepet → Home

### 🛒 Market Mini App Akışı
Home → Market → MarketAnaSayfa → MarketSepet → Home

---

## 🔐 Login & Yetkilendirme Mantığı

- Kullanıcının login durumu **Redux Toolkit** üzerinden global olarak tutulur
- Login olmayan kullanıcılar, **navigator seviyesinde** Yemek ve Market mini uygulamalarına erişemez
- Login işlemi başarılı olduğunda toast mesajı tetiklenir
- Login state, **AsyncStorage** kullanılarak persist edilir ve uygulama yeniden açıldığında otomatik olarak restore edilir

---

## 🧱 Mimari Yapı

- **State Management:** Redux Toolkit
- **Navigation:**
  - Bottom Tab Navigation (ana yapı)
  - Stack Navigation (Yemek & Market mini uygulamaları)
- **Persist:** AsyncStorage (Redux Persist ile)
- **Form & Validasyon:** React Hook Form + Yup / Zod
- **Test:** Jest ile Redux slice unit testleri
- **Dil:** TypeScript

---

## 📂 Klasör Yapısı (Özet)

src/
├─ api/
├─ assets/
├─ components/
├─ constants/
├─ navigation/
├─ screens/
│ ├─ Food/
│ ├─ Home/
│ ├─ Login/
│ ├─ Market/
│ └─ Profile/
├─ store/
│ ├─ slices/
│ ├─ store.ts
│ └─ hooks.ts
├─ tests/
├─ types/
└─ validation/

---

## 🧪 Testler

- `authSlice` için unit test yazılmıştır
- Login / logout aksiyonları test edilmiştir
- Redux state değişimleri testler ile doğrulanmaktadır

---

## ⚙️ Kurulum & Geliştirme Ortamı

### Geliştirme Ortamı

- **Node.js:** v24.12.0
- **Ruby:** 3.2.4
- **Xcode:** 16.2
- **Platform:** macOS Sonoma (intel chip)

### Projeyi Çalıştırma

```bash
git clone <repo-url>
cd project-name
npm install

# iOS
cd ios && pod install
npm run ios

# Android
npm run android
